import { ContactService } from './contact_messages.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    contact(dto: CreateContactDto): Promise<{
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        id: number;
    }>;
}
