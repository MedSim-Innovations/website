import { ContactMessagesService } from './contact_messages.service';
import { ContactDto } from './dto/contact.dto';
export declare class ContactMessagesController {
    private readonly contactService;
    constructor(contactService: ContactMessagesService);
    contact(dto: ContactDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string | null;
        subject: string;
        message: string;
    }>;
}
