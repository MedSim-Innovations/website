import { PrismaService } from '../prisma.service';
export declare class SubscriptionsService {
    private prisma;
    constructor(prisma: PrismaService);
    subscribe(email: string, name: string): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
