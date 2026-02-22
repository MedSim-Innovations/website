import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
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
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // <-- this is what was missing
    await app.init();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  describe('POST /subscriptions', () => {

    it('should successfully subscribe a new user', async () => {
      const body = { email: 'test@example.com', name: 'John Doe' };

      mockPrismaService.subscriptions.findUnique.mockResolvedValue(null);
      mockPrismaService.subscriptions.create.mockResolvedValue({ id: 1, ...body });

      return request(app.getHttpServer())
        .post('/subscriptions')
        .send(body)
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.email).toBe(body.email);
          expect(res.body.name).toBe(body.name);
        });
    });

    it('should return 409 if email already exists', async () => {
      const body = { email: 'existing@example.com', name: 'Jane Doe' };

      mockPrismaService.subscriptions.findUnique.mockResolvedValue({ id: 1, ...body });

      return request(app.getHttpServer())
        .post('/subscriptions')
        .send(body)
        .expect(409)
        .expect((res) => {
          expect(res.body.message).toBe('This email is already subscribed.');
        });
    });

    it('should return 400 if email is missing', async () => {
      return request(app.getHttpServer())
        .post('/subscriptions')
        .send({ name: 'John Doe' })
        .expect(400);
    });

    it('should return 400 if name is missing', async () => {
      return request(app.getHttpServer())
        .post('/subscriptions')
        .send({ email: 'test@example.com' })
        .expect(400);
    });

    it('should return 400 if body is empty', async () => {
      return request(app.getHttpServer())
        .post('/subscriptions')
        .send({})
        .expect(400);
    });

  });
});