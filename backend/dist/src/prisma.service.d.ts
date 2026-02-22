import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
}
export declare const prisma: import("@prisma/client/runtime/client").DynamicClientExtensionThis<import("../generated/prisma/internal/prismaNamespace").TypeMap<import("@prisma/client/runtime/client").InternalArgs & {
    result: {};
    model: {
        $allModels: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        subscriptions: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
    };
    query: {};
    client: {
        $accelerate: () => {
            invalidate: (input: import("@prisma/extension-accelerate").AccelerateInvalidateInput) => Promise<{
                requestId: string;
            }>;
            invalidateAll: () => Promise<{
                requestId: string;
            }>;
        };
    };
}, import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined>, import("../generated/prisma/internal/prismaNamespace").TypeMapCb<import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined>, {
    result: {};
    model: {
        $allModels: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        subscriptions: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
    };
    query: {};
    client: {
        $accelerate: () => {
            invalidate: (input: import("@prisma/extension-accelerate").AccelerateInvalidateInput) => Promise<{
                requestId: string;
            }>;
            invalidateAll: () => Promise<{
                requestId: string;
            }>;
        };
    };
}>;
