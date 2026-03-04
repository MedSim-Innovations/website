import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubscriptionsService {
    constructor(private prisma: PrismaService) {}

    async subscribe(email: string, name: string) {
        const existing = await this.prisma.subscriptions.findUnique({
            where: { email },
        });

        if (existing) {
            throw new ConflictException('This email is already subscribed.');
        }

        return await this.prisma.subscriptions.create({
            data: { email, name },
        });
    }
}