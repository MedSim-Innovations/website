import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';

jest.mock('../prisma.service', () => ({
  PrismaService: jest.fn().mockImplementation(() => ({
    subscriptions: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  })),
}));

const mockSubscriptionsService = {
  subscribe: jest.fn(),
};

describe('SubscriptionsController', () => {
  let controller: SubscriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionsController],
      providers: [
        { provide: SubscriptionsService, useValue: mockSubscriptionsService },
      ],
    }).compile();

    controller = module.get<SubscriptionsController>(SubscriptionsController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('subscribe', () => {

    // Happy path
    it('should successfully subscribe a new user', async () => {
      const body = { email: 'test@example.com', name: 'John Doe' };
      const result = { id: 1, ...body };

      mockSubscriptionsService.subscribe.mockResolvedValue(result);

      expect(await controller.subscribe(body)).toEqual(result);
      expect(mockSubscriptionsService.subscribe).toHaveBeenCalledWith(body.email, body.name);
    });

    // Duplicate email
    it('should throw ConflictException if email already exists', async () => {
      const body = { email: 'existing@example.com', name: 'Jane Doe' };

      mockSubscriptionsService.subscribe.mockRejectedValue(new ConflictException('This email is already subscribed.'));

      await expect(controller.subscribe(body)).rejects.toThrow(ConflictException);
      expect(mockSubscriptionsService.subscribe).toHaveBeenCalledWith(body.email, body.name);
    });

    // Missing email
    it('should throw an error if email is missing', async () => {
      const body = { email: '', name: 'John Doe' };

      mockSubscriptionsService.subscribe.mockRejectedValue(new Error('Email is required.'));

      await expect(controller.subscribe(body)).rejects.toThrow('Email is required.');
    });

    // Missing name
    it('should throw an error if name is missing', async () => {
      const body = { email: 'test@example.com', name: '' };

      mockSubscriptionsService.subscribe.mockRejectedValue(new Error('Name is required.'));

      await expect(controller.subscribe(body)).rejects.toThrow('Name is required.');
    });

    // Verify return value contains correct shape
    it('should return the created subscription with id, email and name', async () => {
      const body = { email: 'test@example.com', name: 'John Doe' };
      const result = { id: 1, email: body.email, name: body.name };

      mockSubscriptionsService.subscribe.mockResolvedValue(result);

      const response = await controller.subscribe(body);
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('email', body.email);
      expect(response).toHaveProperty('name', body.name);
    });

    // Service called exactly once
    it('should call subscribe service exactly once', async () => {
      const body = { email: 'test@example.com', name: 'John Doe' };

      mockSubscriptionsService.subscribe.mockResolvedValue({ id: 1, ...body });

      await controller.subscribe(body);
      expect(mockSubscriptionsService.subscribe).toHaveBeenCalledTimes(1);
    });

    // Unexpected/database error
    it('should throw InternalServerErrorException on unexpected error', async () => {
      const body = { email: 'test@example.com', name: 'John Doe' };

      mockSubscriptionsService.subscribe.mockRejectedValue(new InternalServerErrorException('Unexpected error.'));

      await expect(controller.subscribe(body)).rejects.toThrow(InternalServerErrorException);
    });

    // Conflict exception message accuracy
    it('should throw ConflictException with correct message', async () => {
      const body = { email: 'existing@example.com', name: 'Jane Doe' };

      mockSubscriptionsService.subscribe.mockRejectedValue(new ConflictException('This email is already subscribed.'));

      await expect(controller.subscribe(body)).rejects.toThrow('This email is already subscribed.');
    });

  });
});