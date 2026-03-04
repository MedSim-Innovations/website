import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';

const mockPrismaService = {
    subscriptions: {
        findUnique: jest.fn(),
        create: jest.fn(),
    },
    $connect: jest.fn(),
    $disconnect: jest.fn(),
};

describe('SubscriptionsController (e2e)', () => {
    let app: INestApplication;

    const validPayload = {
        email: 'john@example.com',
        name: 'John Doe',
    };

    const mockCreatedRecord = {
        id: 1,
        email: validPayload.email,
        name: validPayload.name,
        created_at: new Date().toISOString(),
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideProvider(PrismaService)
            .useValue(mockPrismaService)
            .compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
        await app.init();
    });

    beforeEach(() => {
        // Reset all mocks between tests — clears calls, return values, and rejections
        jest.resetAllMocks();
        // Default: no existing subscription, create succeeds
        mockPrismaService.subscriptions.findUnique.mockResolvedValue(null);
        mockPrismaService.subscriptions.create.mockResolvedValue(mockCreatedRecord);
    });

    afterAll(async () => {
        await app.close();
    });

    // ─── Success ────────────────────────────────────────────────────────────────

    describe('POST /subscriptions', () => {
        it('201 — subscribes a new user and returns the created record', async () => {
            const res = await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(201);

            expect(res.body).toMatchObject({
                id: mockCreatedRecord.id,
                email: validPayload.email,
                name: validPayload.name,
            });
            expect(res.body.created_at).toBeDefined();

            expect(mockPrismaService.subscriptions.findUnique).toHaveBeenCalledWith({
                where: { email: validPayload.email },
            });
            expect(mockPrismaService.subscriptions.create).toHaveBeenCalledWith({
                data: { email: validPayload.email, name: validPayload.name },
            });
        });

        it('201 — findUnique is always checked before create', async () => {
            await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(201);

            const findOrder = mockPrismaService.subscriptions.findUnique.mock.invocationCallOrder[0];
            const createOrder = mockPrismaService.subscriptions.create.mock.invocationCallOrder[0];
            expect(findOrder).toBeLessThan(createOrder);
        });
    });

    // ─── Conflict ───────────────────────────────────────────────────────────────

    describe('POST /subscriptions — duplicate email', () => {
        it('409 — returns ConflictException when email is already subscribed', async () => {
            mockPrismaService.subscriptions.findUnique.mockResolvedValueOnce(mockCreatedRecord);

            const res = await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(409);

            expect(res.body.message).toBe('This email is already subscribed.');
            expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
        });

        it('409 — create is never called when duplicate is detected', async () => {
            mockPrismaService.subscriptions.findUnique.mockResolvedValueOnce(mockCreatedRecord);

            await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(409);

            expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
        });
    });

    // ─── Missing Required Fields ─────────────────────────────────────────────────

    describe('POST /subscriptions — missing required fields', () => {
        const requiredFields = ['email', 'name'] as const;

        requiredFields.forEach((field) => {
            it(`400 — missing ${field}`, async () => {
                const payload = { ...validPayload };
                delete (payload as Record<string, unknown>)[field];

                const res = await request(app.getHttpServer())
                    .post('/subscriptions')
                    .send(payload)
                    .expect(400);

                expect(res.body.message).toBeDefined();
                expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
                expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
            });
        });

        it('400 — empty string for email', async () => {
            await request(app.getHttpServer())
                .post('/subscriptions')
                .send({ ...validPayload, email: '' })
                .expect(400);

            expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
        });

        it('400 — empty string for name', async () => {
            await request(app.getHttpServer())
                .post('/subscriptions')
                .send({ ...validPayload, name: '' })
                .expect(400);

            expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
        });

        it('400 — empty body', async () => {
            await request(app.getHttpServer())
                .post('/subscriptions')
                .send({})
                .expect(400);

            expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
        });
    });

    // ─── Email Validation ────────────────────────────────────────────────────────

    describe('POST /subscriptions — email validation', () => {
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
                    .post('/subscriptions')
                    .send({ ...validPayload, email })
                    .expect(400);

                expect(res.body.message).toBeDefined();
                expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
                expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
            });
        });
    });

    // ─── Content-Type ────────────────────────────────────────────────────────────

    describe('POST /subscriptions — content type', () => {
        it('400 — non-JSON content type is rejected', async () => {
            await request(app.getHttpServer())
                .post('/subscriptions')
                .set('Content-Type', 'text/plain')
                .send('plain text body')
                .expect(400);

            expect(mockPrismaService.subscriptions.findUnique).not.toHaveBeenCalled();
            expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
        });
    });

    // ─── Database Error ───────────────────────────────────────────────────────────

    describe('POST /subscriptions — database errors', () => {
        it('500 — returns 500 when findUnique throws', async () => {
            mockPrismaService.subscriptions.findUnique.mockRejectedValueOnce(
                new Error('DB connection lost'),
            );

            await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(500);

            expect(mockPrismaService.subscriptions.create).not.toHaveBeenCalled();
        });

        it('500 — returns 500 when create throws', async () => {
            mockPrismaService.subscriptions.create.mockRejectedValueOnce(
                new Error('DB write failed'),
            );

            await request(app.getHttpServer())
                .post('/subscriptions')
                .send(validPayload)
                .expect(500);
        });
    });
});