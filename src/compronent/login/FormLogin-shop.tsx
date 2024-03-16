'use client'
import React from 'react'
import { useState } from 'react'
import { signIn } from "next-auth/react";
import { redirect } from 'next/navigation';
import { FormButton } from '../FormButton';

type Props = {}

export default function FormLoginShop({ }: Props) {
  const [errorMessage, setError] = useState<string | null>(null)
  // console.log(errorMessage)

  const handleSubmit = async (formData: FormData) => {
    const usernameShop = formData.get("UserName") as string;
    const passwordShop = formData.get("Password") as string;
    // console.log(usernameShop, passwordShop)

    const { error, status, ok, url }: any = await signIn('shop-login', {
      username: usernameShop,
      password: passwordShop,
      redirect: false,
      callbackUrl: '/app/shop/homepage-shop',
    });
    if (error) {
      setError("Username or Password is incorrect")
      console.error(error)
    }
    if (status == 200 && ok) {
      redirect(url)
    }
  }
    return (
        <div
            className="max-w-md mx-auto relative overflow-hidden z-10
                         bg-white p-20 rounded-lg border hover:shadow-2xl  
                         hover:scale-110 ease-in-out transition duration-700 delay-100
                         
                         before:w-24 before:h-24 before:absolute before:bg-teal-500 
                         before:rounded-full before:-z-10 before:blur-2xl 

                         after:w-32 after:h-32 after:absolute after:bg-teal-300 after:rounded-full 
                         after:-z-10 after:blur-xl after:top-24 after:-right-12 
                         
                         "
        >
            <h2 className="text-2xl text-sky-900 font-bold mb-6">Go To My Shop</h2>

            <form method="post" action={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600" form="name"
                    >UserName</label>
                    <input
                        id='UserName'
                        type='email'
                        name='UserName'
                        className="mt-1 p-2 w-full border rounded-md" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600" form="email"
                    >Password</label>
                    <input
                        className="mt-1 p-2 w-full border rounded-md"
                        name="Password"
                        id="Password"
                        type="Password"
                    />
                </div>
                 {errorMessage && <p className=' text-sm text-red-400'>ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง<a href="" className=' underline'>โปรดลองใหม่อีกครั้ง</a></p>}
                <div className="flex mt-5 justify-end">
                    <button
                        className=" transition hover:-translate-y-1 delay-150 hover:scale-110 ease-in-out duration-500 [background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
                <div className='flex mt-6 w-full'>
                 <h1 className=' text-sm font-sans text-gray-500'>สมัครเพื่อเป็นสมาชิกร้านค้ากับเรา<a href='http://localhost:3000/app/shop/register-shop' className='text-blue-500 underline'>คลิกเลย</a></h1>
                </div>
            </form>
        </div>
    )
}