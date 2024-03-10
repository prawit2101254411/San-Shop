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
        <div className=' flex justify-center w-full h-screen border '>
           <SildebarForm session={session}/>
            <div className=' flex w-1/2 h-1/2 shadow-lg mt-10'>
                <div className='flex flex-col items-center justify-center h-full w-1/2 border-r'>
                    <img src={session?.user.image} alt="" className=' rounded-full w-36 h-36' />
                    <input type="file" />
                </div>
                <div className='flex flex-col h-full w-1/2 '>
                    <div className='flex justify-end '>
                        <a onClick={() => modal?.show(<EditProfileForm session={session} />)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6 mt-5 mr-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </a>
                    </div>
                    <div className='flex flex-col justify-center mt-16'>
                        <div className=' w-72 ml-20'>
                            <label htmlFor="" className=' font-bold'>ที่อยู่ปัจจุบัน</label>
                            <h1 className=' text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi labore, amet laudantium illo quia, corrupti nihil nam atque perferendis </h1>
                        </div>
                        <div className=' w-72 ml-20 mt-5'>
                            <label htmlFor="" className=' font-bold'>ข้อมูลส่วนตัว</label>
                            <h1 className=' text-gray-400'>ชื่อ : {session?.user.name}</h1>
                            <h1 className=' text-gray-400'>Email : {session?.user.email}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}