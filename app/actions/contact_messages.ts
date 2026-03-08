"use server";

// Libraries
import prisma from "@/lib/prisma";

export async function submitContactMessage(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}) {
    await prisma.contact_messages.create({ data });
    return { status: 201 };
}