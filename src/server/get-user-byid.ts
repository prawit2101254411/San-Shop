import { cache } from "react";
import "server-only"
import prisma from "@/utils/prisma";

export const revalidate = 1_800

export const getUserById = cache(async (id:string) => {
    return await prisma.user.findUnique({
        where: {
            id : id,
        },
    }).catch((err) => {
        return err
    })
})