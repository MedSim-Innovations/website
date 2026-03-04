import { Controller, Post, Body } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscribeDto } from './dto/subscribe.dto';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  async subscribe(@Body() body: SubscribeDto) {
    return this.subscriptionsService.subscribe(body.email, body.name);
  }
}