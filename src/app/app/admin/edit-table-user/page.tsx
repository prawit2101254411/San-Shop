import React from 'react'
import { PrismaClient } from '@prisma/client'

export default async function page() {
const prisma = new PrismaClient();
const user = await prisma.user.findMany();
// console.log(user)
  return (
    <div>
        {/* การ loop ข้อมูล */}
        {user.slice(0).map((item:any,index:number) => 
        <h1>{item.name}</h1>)}
    </div>
  )
}
