"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createKunde(kunde) {
    const kunde = await prisma.kunde.create({
        data: kunde
    })
    return kunde
}

