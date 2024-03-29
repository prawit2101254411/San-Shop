import { PrismaClient } from "@prisma/client";
import "server-only"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
globalForPrisma.prisma ?? 
new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],  
})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

prisma.$connect()
.catch((error) => {
    console.log(error)
    return
});

export default prisma;