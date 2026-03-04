"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMessagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ContactMessagesService = class ContactMessagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async contact(email, name, phone, subject, message) {
        if (!email || !name || !subject || !message) {
            throw new common_1.BadRequestException('Email, name, subject, and message are required.');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new common_1.BadRequestException('Invalid email address.');
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
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to submit contact message. Please try again.');
        }
    }
};
exports.ContactMessagesService = ContactMessagesService;
exports.ContactMessagesService = ContactMessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactMessagesService);
//# sourceMappingURL=contact_messages.service.js.map