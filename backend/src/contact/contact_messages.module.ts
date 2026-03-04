import { Module } from '@nestjs/common';
import { ContactMessagesController } from './contact_messages.controller';
import { ContactMessagesService } from './contact_messages.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ContactMessagesController],
  providers: [ContactMessagesService, PrismaService],
})
export class ContactMessagesModule {}