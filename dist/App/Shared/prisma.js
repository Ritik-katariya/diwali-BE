"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// BE/src/prismaClient.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
