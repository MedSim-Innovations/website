import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

// Subscriptions
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

// Contact
import { ContactMessagesModule } from './contact/contact_messages.module';

@Module({
  imports: [SubscriptionsModule, ContactMessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}