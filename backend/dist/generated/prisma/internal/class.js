"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [
        "driverAdapters"
    ],
    "clientVersion": "7.4.1",
    "engineVersion": "55ae170b1ced7fc6ed07a15f110549408c501bb3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n  moduleFormat    = \"commonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel subscriptions {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  name  String\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"subscriptions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"subscriptions.findUnique\",\"subscriptions.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"subscriptions.findFirst\",\"subscriptions.findFirstOrThrow\",\"subscriptions.findMany\",\"data\",\"subscriptions.createOne\",\"subscriptions.createMany\",\"subscriptions.createManyAndReturn\",\"subscriptions.updateOne\",\"subscriptions.updateMany\",\"subscriptions.updateManyAndReturn\",\"create\",\"update\",\"subscriptions.upsertOne\",\"subscriptions.deleteOne\",\"subscriptions.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"subscriptions.groupBy\",\"subscriptions.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"email\",\"name\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "KwsQBhwAACIAMB0AAAQAEB4AACIAMB8CAAAAASABAAAAASEBACQAIQEAAAABACABAAAAAQAgBhwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACADHwIAAAABIAEAAAABIQEAAAABAQgAAAkAIAMfAgAAAAEgAQAAAAEhAQAAAAEBCAAACwAwAQgAAAsAMAMfAgArACEgAQAqACEhAQAqACECAAAAAQAgCAAADgAgAx8CACsAISABACoAISEBACoAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACUAIBYAACYAIBcAACkAIBgAACgAIBkAACcAIAYcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAYcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACENFQAAHgAgFgAAIQAgFwAAHgAgGAAAHgAgGQAAHgAgIgIAAAABIwIAAAAEJAIAAAAEJQIAAAABJgIAAAABJwIAAAABKAIAAAABLAIAIAAhDhUAAB4AIBgAAB8AIBkAAB8AICIBAAAAASMBAAAABCQBAAAABCUBAAAAASYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAB0AIQ4VAAAeACAYAAAfACAZAAAfACAiAQAAAAEjAQAAAAQkAQAAAAQlAQAAAAEmAQAAAAEnAQAAAAEoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAdACEIIgIAAAABIwIAAAAEJAIAAAAEJQIAAAABJgIAAAABJwIAAAABKAIAAAABLAIAHgAhCyIBAAAAASMBAAAABCQBAAAABCUBAAAAASYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAB8AIQ0VAAAeACAWAAAhACAXAAAeACAYAAAeACAZAAAeACAiAgAAAAEjAgAAAAQkAgAAAAQlAgAAAAEmAgAAAAEnAgAAAAEoAgAAAAEsAgAgACEIIggAAAABIwgAAAAEJAgAAAAEJQgAAAABJggAAAABJwgAAAABKAgAAAABLAgAIQAhBhwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAIQgiAgAAAAEjAgAAAAQkAgAAAAQlAgAAAAEmAgAAAAEnAgAAAAEoAgAAAAEsAgAeACELIgEAAAABIwEAAAAEJAEAAAAEJQEAAAABJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAHwAhAAAAAAABLQEAAAABBS0CAAAAAS4CAAAAAS8CAAAAATACAAAAATECAAAAAQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAQIBAgMBBQYBBgcBBwgBCQoBCgwCCw0DDA8BDRECDhIEERMBEhQBExUCGhgFGxkL"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map