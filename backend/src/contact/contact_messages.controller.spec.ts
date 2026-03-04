import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ContactMessagesController } from './contact_messages.controller';
import { ContactMessagesService } from './contact_messages.service';

jest.mock('../prisma.service', () => ({
  PrismaService: jest.fn().mockImplementation(() => ({
    contact_messages: {
      create: jest.fn(),
    },
  })),
}));

const mockContactMessagesService = {
    contact: jest.fn(),
};

describe('ContactMessagesController', () => {
    let controller: ContactMessagesController;

    const validBody = {
        email: 'john@example.com',
        name: 'John Doe',
        phone: '+1 234 567 8900',
        subject: 'product-inquiry',
        message: 'I am interested in your medical simulation products.',
    };

    const mockCreatedRecord = {
        id: 1,
        ...validBody,
        created_at: new Date().toISOString(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ContactMessagesController],
            providers: [
                { provide: ContactMessagesService, useValue: mockContactMessagesService },
            ],
        }).compile();

        controller = module.get<ContactMessagesController>(ContactMessagesController);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('contact', () => {

        // Happy path — all fields
        it('should return the created record and call service with correct args', async () => {
            mockContactMessagesService.contact.mockResolvedValue(mockCreatedRecord);

            const response = await controller.contact(validBody);

            expect(response).toEqual(mockCreatedRecord);
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('created_at');
            expect(mockContactMessagesService.contact).toHaveBeenCalledWith(
                validBody.email,
                validBody.name,
                validBody.phone,
                validBody.subject,
                validBody.message,
            );
            expect(mockContactMessagesService.contact).toHaveBeenCalledTimes(1);
        });

        // Happy path — without optional phone
        it('should call service with undefined phone when phone is omitted', async () => {
            const { phone: _, ...bodyWithoutPhone } = validBody;
            const recordWithoutPhone = { ...mockCreatedRecord, phone: null };

            mockContactMessagesService.contact.mockResolvedValue(recordWithoutPhone);

            const response = await controller.contact(bodyWithoutPhone as typeof validBody);

            expect(response.phone).toBeNull();
            expect(mockContactMessagesService.contact).toHaveBeenCalledWith(
                validBody.email,
                validBody.name,
                undefined,
                validBody.subject,
                validBody.message,
            );
        });

        // Missing required fields
        it('should propagate BadRequestException when required fields are missing', async () => {
            mockContactMessagesService.contact.mockRejectedValue(
                new BadRequestException('Email, name, subject, and message are required.'),
            );

            await expect(controller.contact({ ...validBody, email: '' })).rejects.toThrow(BadRequestException);
            await expect(controller.contact({ ...validBody, email: '' })).rejects.toThrow(
                'Email, name, subject, and message are required.',
            );
        });

        // Invalid email
        it('should propagate BadRequestException for invalid email', async () => {
            mockContactMessagesService.contact.mockRejectedValue(
                new BadRequestException('Invalid email address.'),
            );

            await expect(controller.contact({ ...validBody, email: 'not-an-email' })).rejects.toThrow(
                BadRequestException,
            );
            await expect(controller.contact({ ...validBody, email: 'not-an-email' })).rejects.toThrow(
                'Invalid email address.',
            );
        });

        // Unexpected/database error
        it('should propagate InternalServerErrorException on unexpected error', async () => {
            mockContactMessagesService.contact.mockRejectedValue(
                new InternalServerErrorException('Failed to submit contact message. Please try again.'),
            );

            await expect(controller.contact(validBody)).rejects.toThrow(InternalServerErrorException);
            await expect(controller.contact(validBody)).rejects.toThrow(
                'Failed to submit contact message. Please try again.',
            );
        });

    });
});