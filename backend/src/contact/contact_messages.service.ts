import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContactMessagesService {
    constructor(private prisma: PrismaService) {}

    async contact(
        email: string,
        name: string,
        phone: string | undefined,
        subject: string,
        message: string,
    ) {
        // DTO + ValidationPipe handles validation upstream.
        // These are a safety net in case the service is called directly.
        if (!email || !name || !subject || !message) {
            throw new BadRequestException('Email, name, subject, and message are required.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new BadRequestException('Invalid email address.');
        }

        try {
            return await this.prisma.contact_messages.create({
                data: {
                    email,
                    name,
                    phone: phone ?? undefined,
                    subject,
                    message,
                },
            });
        } catch {
            throw new InternalServerErrorException('Failed to submit contact message. Please try again.');
        }
    }
}