import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';

const mockPrismaService = {
    contact_messages: {
        create: jest.fn(),
    },
    $connect: jest.fn(),
    $disconnect: jest.fn(),
};

describe('ContactMessagesController (e2e)', () => {
    let app: INestApplication;

    const validPayload = {
        email: 'john@example.com',
        name: 'John Doe',
        phone: '+1 234 567 8900',
        subject: 'product-inquiry',
        message: 'I am interested in your medical simulation products.',
    };

    const mockCreatedRecord = {
        id: 1,
        email: validPayload.email,
        name: validPayload.name,
        phone: validPayload.phone,
        subject: validPayload.subject,
        message: validPayload.message,
        created_at: new Date().toISOString(),
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        app = moduleFixture.createNestApplication({ logger: false });
        app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
        await app.init();
    });

    beforeEach(() => {
        jest.resetAllMocks();
        mockPrismaService.contact_messages.create.mockResolvedValue(mockCreatedRecord);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Success ────────────────────────────────────────────────────────────────

    describe('POST /contact', () => {
        it('201 — creates a contact message with all fields', async () => {
            const res = await request(app.getHttpServer())
                .post('/contact')
                .send(validPayload)
                .expect(201);

            expect(res.body).toMatchObject({
                id: mockCreatedRecord.id,
                email: validPayload.email.toLowerCase(),
                name: validPayload.name,
                phone: validPayload.phone,
                subject: validPayload.subject,
                message: validPayload.message,
            });
            expect(res.body.created_at).toBeDefined();

            expect(mockPrismaService.contact_messages.create).toHaveBeenCalledWith({
                data: {
                    email: validPayload.email.toLowerCase(),
                    name: validPayload.name,
                    phone: validPayload.phone,
                    subject: validPayload.subject,
                    message: validPayload.message,
                },
            });
            expect(mockPrismaService.contact_messages.create).toHaveBeenCalledTimes(1);
        });

        it('201 — creates a contact message without optional phone', async () => {
            const { phone: _, ...payloadWithoutPhone } = validPayload;
            mockPrismaService.contact_messages.create.mockResolvedValueOnce({
                ...mockCreatedRecord,
                phone: null,
            });

            const res = await request(app.getHttpServer())
                .post('/contact')
                .send(payloadWithoutPhone)
                .expect(201);

            expect(res.body.phone).toBeNull();
            expect(mockPrismaService.contact_messages.create).toHaveBeenCalledWith({
                data: expect.objectContaining({ phone: undefined }),
            });
        });

        it('201 — trims whitespace from all fields before saving', async () => {
            mockPrismaService.contact_messages.create.mockResolvedValueOnce({
                ...mockCreatedRecord,
                email: 'trimmed@example.com',
                name: 'Jane Doe',
                subject: 'support',
                message: 'Please help me.',
                phone: null,
            });

            await request(app.getHttpServer())
                .post('/contact')
                .send({
                    email: '  trimmed@example.com  ',
                    name: '  Jane Doe  ',
                    subject: '  support  ',
                    message: '  Please help me.  ',
                })
                .expect(201);

            expect(mockPrismaService.contact_messages.create).toHaveBeenCalledWith({
                data: expect.objectContaining({
                    email: 'trimmed@example.com',
                    name: 'Jane Doe',
                    subject: 'support',
                    message: 'Please help me.',
                }),
            });
        });

        it('201 — lowercases email before saving', async () => {
            mockPrismaService.contact_messages.create.mockResolvedValueOnce({
                ...mockCreatedRecord,
                email: 'upper@example.com',
            });

            const res = await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, email: 'UPPER@EXAMPLE.COM' })
                .expect(201);

            expect(res.body.email).toBe('upper@example.com');
            expect(mockPrismaService.contact_messages.create).toHaveBeenCalledWith({
                data: expect.objectContaining({ email: 'upper@example.com' }),
            });
        });
    });

    // ─── Missing Required Fields ─────────────────────────────────────────────────

    describe('POST /contact — missing required fields', () => {
        const requiredFields = ['email', 'name', 'subject', 'message'] as const;

        requiredFields.forEach((field) => {
            it(`400 — missing ${field}`, async () => {
                const payload = { ...validPayload };
                delete (payload as Record<string, unknown>)[field];

                const res = await request(app.getHttpServer())
                    .post('/contact')
                    .send(payload)
                    .expect(400);

                expect(res.body.message).toBeDefined();
                expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
            });
        });

        it('400 — empty string for required field', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, message: '' })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — whitespace-only required field', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, name: '   ' })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — empty body', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({})
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });
    });

    // ─── Email Validation ────────────────────────────────────────────────────────

    describe('POST /contact — email validation', () => {
        const invalidEmails = [
            'notanemail',
            'missing@',
            '@nodomain.com',
            'spaces in@email.com',
            'double@@email.com',
            '',
        ];

        invalidEmails.forEach((email) => {
            it(`400 — invalid email: "${email}"`, async () => {
                const res = await request(app.getHttpServer())
                    .post('/contact')
                    .send({ ...validPayload, email })
                    .expect(400);

                expect(res.body.message).toBeDefined();
                expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
            });
        });
    });

    // ─── Field Length Limits ─────────────────────────────────────────────────────

    describe('POST /contact — field length limits', () => {
        it('400 — name over 100 characters', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, name: 'a'.repeat(101) })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — email over 254 characters', async () => {
            const longEmail = 'a'.repeat(244) + '@example.com'; // 256 chars
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, email: longEmail })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — subject over 200 characters', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, subject: 'a'.repeat(201) })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — message over 5000 characters', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, message: 'a'.repeat(5001) })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('400 — phone over 20 characters', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .send({ ...validPayload, phone: '1'.repeat(21) })
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });

        it('201 — fields at exact length limits are accepted', async () => {
            const boundaryPayload = {
                email: 'a'.repeat(60) + '@' + 'b'.repeat(50) + '.com',
                name: 'a'.repeat(100),
                subject: 'a'.repeat(200),
                message: 'a'.repeat(5000),
                phone: '1'.repeat(20),
            };

            mockPrismaService.contact_messages.create.mockResolvedValueOnce({
                id: 2,
                ...boundaryPayload,
                created_at: new Date().toISOString(),
            });

            await request(app.getHttpServer())
                .post('/contact')
                .send(boundaryPayload)
                .expect(201);

            expect(mockPrismaService.contact_messages.create).toHaveBeenCalled();
        });
    });

    // ─── Content-Type ────────────────────────────────────────────────────────────

    describe('POST /contact — content type', () => {
        it('400 — non-JSON content type is rejected', async () => {
            await request(app.getHttpServer())
                .post('/contact')
                .set('Content-Type', 'text/plain')
                .send('plain text body')
                .expect(400);

            expect(mockPrismaService.contact_messages.create).not.toHaveBeenCalled();
        });
    });

    // ─── Database Error ───────────────────────────────────────────────────────────

    describe('POST /contact — database errors', () => {
        it('500 — returns 500 with correct message when Prisma throws', async () => {
            mockPrismaService.contact_messages.create.mockRejectedValueOnce(
                new Error('DB connection lost'),
            );

            const res = await request(app.getHttpServer())
                .post('/contact')
                .send(validPayload)
                .expect(500);

            expect(res.body.message).toBe('Failed to submit contact message. Please try again.');
        });
    });
});