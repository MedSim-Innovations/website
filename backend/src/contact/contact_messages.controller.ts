import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactMessagesService } from './contact_messages.service';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactMessagesController {
    constructor(private readonly contactService: ContactMessagesService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async contact(@Body() dto: ContactDto) {
        return this.contactService.contact(
            dto.email,
            dto.name,
            dto.phone,
            dto.subject,
            dto.message,
        );
    }
}