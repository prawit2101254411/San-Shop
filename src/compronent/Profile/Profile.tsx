'use client'
import React from 'react'
import EditProfileForm from '@/compronent/FormModal/EditProfileForm';
import { useModal } from '@/compronent/model/provider';
import SildebarForm from './SildebarForm';

type Props = {
    session: any,
}

export default function Profile({ session }: Props) {
    const modal = useModal();
    return (
        <div className=' flex  w-full h-full border'>
            <div className='flex flex-col items-center justify-center w-1/3 border bg-white rounded-lg'>
                <img src={session?.user.image} alt="" className=' rounded-full w-20 h-20' />
                <button type='button' className=' border p-1 text-sm rounded-lg mt-2'>Add Image</button>
            </div>
            <div className='flex h-full '>
                <div className='flex justify-center w-full'>
                    <div className=' w-1/2 ml-2 bg-white p-5 border-r'>
                        <label htmlFor="" className=' font-bold'>ข้อมูลส่วนตัว</label>
                        <h1 className=' text-gray-400'>ชื่อ : {session?.user.name}</h1>
                        <h1 className=' text-gray-400'>Email : {session?.user.email}</h1>
                    </div>
                    <div className=' w-1/2 bg-white p-5 '>
                        <label htmlFor="" className=' font-bold'>ที่อยู่ปัจจุบัน</label>
                        <h1 className=' text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi labore, amet laudantium illo quia, corrupti nihil nam atque perferendis </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}