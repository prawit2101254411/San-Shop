'use client'
import React, { useEffect } from 'react'
import { FormButton } from '../FormButton'
import { Register } from '@/utils/action'
import { useState } from 'react'

type Props = {}

export default function FormRegister({ }: Props) {
    return (
        <form action={Register} className='flex justify-center border w-full h-screen'>
            <div className='flex flex-col items-center w-[500px] h-[600px] border '>
                <h1 className=' text-4xl font-medium mt-10'>สมัครสมาชิก</h1>
                <div className=' flex border'>
                    <div className='flex flex-col  w-[150px] mt-5'>
                        <label htmlFor="fname">ชื่อ</label>
                        <input
                            type="fname"
                            name='fname'
                            id='fname'
                            className=' pl-3 border-2 h-10 rounded-md'
                        />
                    </div>
                    <div className='flex flex-col  w-[150px] mt-5 ml-3'>
                        <label htmlFor="lname">นามสกุล</label>
                        <input
                            type="lname"
                            name='lname'
                            id='lname'
                            className=' pl-3 border-2 h-10 rounded-md'
                        />
                    </div>
                </div>
                <div className='flex flex-col  w-[300px] mt-5'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        className=' pl-3 border-2 h-10 rounded-md '
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                </div>
                <div className='flex flex-col  w-[300px] mt-5'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        className=' pl-3 border-2 h-10 rounded-md'
                    />
                </div>
                <div className='flex flex-col  w-[300px] mt-5'>
                    <label htmlFor="password1">Password</label>
                    <input
                        type="password"
                        name='password1'
                        id='password1'
                        className=' pl-3 border-2 h-10 rounded-md'
                    />
                </div>
                <div className=" py-5 mt-4 rounded-lg">
                    <FormButton>
                        <a className=" border-2 py-3 rounded-lg px-9 hover:bg-blue-500 hover:text-white hover:shadow-lg ">
                            เข้าสู่ระบบ
                        </a>
                    </FormButton>
                </div>
            </div>
        </form>
    )
}