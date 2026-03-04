import { ContactMessagesService } from './contact_messages.service';
import { ContactDto } from './dto/contact.dto';
export declare class ContactMessagesController {
    private readonly contactService;
    constructor(contactService: ContactMessagesService);
    contact(dto: ContactDto): Promise<{
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        id: number;
    }>;
}
