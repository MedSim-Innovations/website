import { PrismaService } from '../prisma.service';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    contact(email: string, name: string, phone: string | undefined, subject: string, message: string): Promise<{
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        id: number;
    }>;
}
