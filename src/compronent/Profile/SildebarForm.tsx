'use client'
import React from 'react'
import TestMotion from './TestMotion'
import { motion } from 'framer-motion'

type Props = {
    session: any,
}

export default function SildebarForm({ session }: Props) {
    return (
        <div className='flex flex-col mr-2 border mt-10 '>
            <div className='flex  mt-3 '>
                {session && <img src={session.user.image} alt="" className=' rounded-full w-14' />}
                <div className=' '>
                    {session && <h1 className='flex  ml-1 font-bold text-sm'>{session.user.name}</h1>}
                    <a href='' className='flex  ml-1 text-gray-400 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        แก้ไขข้อมูลส่วนตัว
                    </a>
                </div>
            </div><br />
            <hr className=' w-full mt-4' />
            <div className=' flex flex-col mt-4 '>
                <TestMotion />
                <motion.a
                   href='http://localhost:3000/app/profile/mypurchase'
                    whileTap={{ scale: 0.90 }}
                    className='flex font-semibold ml-5 text-sm mt-2' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    การซื้อของฉัน
                </motion.a>
                <motion.button
                    whileTap={{ scale: 0.90 }}
                    className='flex font-semibold ml-6 mt-3 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell mr-2" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg>
                    แจ้งเตือน
                </motion.button>
            </div>
        </div>
    )
}