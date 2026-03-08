"use server";

// Libraries
import prisma from "@/lib/prisma";

export async function subscribeUser(email: string, name: string) {
    const existing = await prisma.subscriptions.findUnique({ where: { email } });

    if (existing) {
        return { status: 409, error: "This email is already subscribed!" };
    }

    await prisma.subscriptions.create({ data: { email, name } });
    return { status: 201 };
}