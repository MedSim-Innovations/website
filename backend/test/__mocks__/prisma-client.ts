export const PrismaClient = jest.fn().mockImplementation(() => ({
  $connect: jest.fn(),
  $disconnect: jest.fn(),
  $extends: jest.fn().mockReturnThis(),
  subscriptions: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
}));