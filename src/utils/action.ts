"use server";

import { error } from "console";
import prisma from "./prisma";

export async function Register(formData: FormData) {
   const fname =  formData.get('fname') as string;
   const lname = formData.get('lname') as string;
   const username = formData.get('username') as string;
   const password = formData.get('password') as string;
   const password1 = formData.get('password1') as string;
//    console.log(password1)
}

// SearctEngine function การค้นหา แบบชื่อเต็ม
export async function Search(formData:FormData) {
   const search = formData.get('searct') as string


   const searchs = await prisma.user.findMany({
      where:{
         name:{
            search:search
         }
      },
      select:{
         name:true,
         email:true
      }
   })
   console.log(searchs)

   if (searchs.length == 0){
      console.log('ไม่มีข้อมูล')
   }
   
}