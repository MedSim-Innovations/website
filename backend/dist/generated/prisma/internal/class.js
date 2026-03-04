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
    "previewFeatures": [],
    "clientVersion": "7.4.2",
    "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"commonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel subscriptions {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  name  String\n}\n\nmodel contact_messages {\n  id      Int     @id @default(autoincrement())\n  name    String\n  email   String\n  phone   String?\n  subject String\n  message String\n}\n",
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
config.runtimeDataModel = JSON.parse("{\"models\":{\"subscriptions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"contact_messages\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"subject\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"subscriptions.findUnique\",\"subscriptions.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"subscriptions.findFirst\",\"subscriptions.findFirstOrThrow\",\"subscriptions.findMany\",\"data\",\"subscriptions.createOne\",\"subscriptions.createMany\",\"subscriptions.createManyAndReturn\",\"subscriptions.updateOne\",\"subscriptions.updateMany\",\"subscriptions.updateManyAndReturn\",\"create\",\"update\",\"subscriptions.upsertOne\",\"subscriptions.deleteOne\",\"subscriptions.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"subscriptions.groupBy\",\"subscriptions.aggregate\",\"contact_messages.findUnique\",\"contact_messages.findUniqueOrThrow\",\"contact_messages.findFirst\",\"contact_messages.findFirstOrThrow\",\"contact_messages.findMany\",\"contact_messages.createOne\",\"contact_messages.createMany\",\"contact_messages.createManyAndReturn\",\"contact_messages.updateOne\",\"contact_messages.updateMany\",\"contact_messages.updateManyAndReturn\",\"contact_messages.upsertOne\",\"contact_messages.deleteOne\",\"contact_messages.deleteMany\",\"contact_messages.groupBy\",\"contact_messages.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"email\",\"phone\",\"subject\",\"message\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "UhUgBiwAAEQAMC0AAAQAEC4AAEQAMC8CAAAAATABAEEAITEBAAAAAQEAAAABACABAAAAAQAgBiwAAEQAMC0AAAQAEC4AAEQAMC8CAEAAITABAEEAITEBAEEAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACADLwIAAAABMAEAAAABMQEAAAABAQgAAAkAIAMvAgAAAAEwAQAAAAExAQAAAAEBCAAACwAwAQgAAAsAMAMvAgBNACEwAQBLACExAQBLACECAAAAAQAgCAAADgAgAy8CAE0AITABAEsAITEBAEsAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAAE4AIBYAAE8AIBcAAFIAIBgAAFEAIBkAAFAAIAYsAABDADAtAAAXABAuAABDADAvAgA0ACEwAQA1ACExAQA1ACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAksAAA_ADAtAAAdABAuAAA_ADAvAgAAAAEwAQBBACExAQBBACEyAQBCACEzAQBBACE0AQBBACEBAAAAGgAgAQAAABoAIAksAAA_ADAtAAAdABAuAAA_ADAvAgBAACEwAQBBACExAQBBACEyAQBCACEzAQBBACE0AQBBACEBMgAARQAgAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgBi8CAAAAATABAAAAATEBAAAAATIBAAAAATMBAAAAATQBAAAAAQEIAAAiACAGLwIAAAABMAEAAAABMQEAAAABMgEAAAABMwEAAAABNAEAAAABAQgAACQAMAEIAAAkADAGLwIATQAhMAEASwAhMQEASwAhMgEATAAhMwEASwAhNAEASwAhAgAAABoAIAgAACcAIAYvAgBNACEwAQBLACExAQBLACEyAQBMACEzAQBLACE0AQBLACECAAAAHQAgCAAAKQAgAgAAAB0AIAgAACkAIAMAAAAaACAPAAAiACAQAAAnACABAAAAGgAgAQAAAB0AIAYVAABGACAWAABHACAXAABKACAYAABJACAZAABIACAyAABFACAJLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANgAhMwEANQAhNAEANQAhAwAAAB0AIAMAAC8AMBQAADAAIAMAAAAdACADAAAeADAEAAAaACAJLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANgAhMwEANQAhNAEANQAhDRUAADsAIBYAAD4AIBcAADsAIBgAADsAIBkAADsAIDUCAAAAATYCAAAABDcCAAAABDgCAAAAATkCAAAAAToCAAAAATsCAAAAAT8CAD0AIQ4VAAA7ACAYAAA8ACAZAAA8ACA1AQAAAAE2AQAAAAQ3AQAAAAQ4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQA6ACEOFQAAOAAgGAAAOQAgGQAAOQAgNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEANwAhDhUAADgAIBgAADkAIBkAADkAIDUBAAAAATYBAAAABTcBAAAABTgBAAAAATkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BADcAIQg1AgAAAAE2AgAAAAU3AgAAAAU4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE_AgA4ACELNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAOQAhDhUAADsAIBgAADwAIBkAADwAIDUBAAAAATYBAAAABDcBAAAABDgBAAAAATkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAAAAAT8BADoAIQg1AgAAAAE2AgAAAAQ3AgAAAAQ4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE_AgA7ACELNQEAAAABNgEAAAAENwEAAAAEOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAPAAhDRUAADsAIBYAAD4AIBcAADsAIBgAADsAIBkAADsAIDUCAAAAATYCAAAABDcCAAAABDgCAAAAATkCAAAAAToCAAAAATsCAAAAAT8CAD0AIQg1CAAAAAE2CAAAAAQ3CAAAAAQ4CAAAAAE5CAAAAAE6CAAAAAE7CAAAAAE_CAA-ACEJLAAAPwAwLQAAHQAQLgAAPwAwLwIAQAAhMAEAQQAhMQEAQQAhMgEAQgAhMwEAQQAhNAEAQQAhCDUCAAAAATYCAAAABDcCAAAABDgCAAAAATkCAAAAAToCAAAAATsCAAAAAT8CADsAIQs1AQAAAAE2AQAAAAQ3AQAAAAQ4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQAAAAE-AQAAAAE_AQA8ACELNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAAAABPwEAOQAhBiwAAEMAMC0AABcAEC4AAEMAMC8CADQAITABADUAITEBADUAIQYsAABEADAtAAAEABAuAABEADAvAgBAACEwAQBBACExAQBBACEAAAAAAAABQAEAAAABAUABAAAAAQVAAgAAAAFBAgAAAAFCAgAAAAFDAgAAAAFEAgAAAAEAAAAAAAAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAAAABRUAEBYAERcAEhgAExkAFAAAAAAABRUAEBYAERcAEhgAExkAFAECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZCxwbDB0cDB4fDB8gDCAhDCEjDCIlAiMmDSQoDCUqAiYrDicsDCgtDCkuAioxDysyFQ"
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