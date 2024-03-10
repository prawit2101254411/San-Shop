import React from 'react'

type Props = {
    session: any,
}

export default function EditProfileForm({ session }: Props) {
    return (
        <div className='flex flex-col items-center border rounded-xl p-2 bg-white  w-[600px]  overflow-auto'>
            <div className=' mt-2 border'>
                <img className=' rounded-full' src={session.user.image} alt="" />
            </div>
            <div className='mt-2 border w-[350px] h-full'>
            <div className='flex flex-col border '>
                    <label htmlFor="" className=' font-bold'>ที่อยู่</label>
                    <textarea className='pl-2 border rounded-md py-2 h-[150px]'  placeholder="ที่อยู่ปัจจุบัน" />
                </div>
                <div className='flex flex-col border '>
                    <label htmlFor="" className=' font-bold'>ชื่อ</label>
                    <input className='pl-2 border rounded-md py-2' type="text" placeholder="ชื่อ-นามสกุล" />
                </div>
                <div className='flex flex-col border '>
                    <label htmlFor="" className=' font-bold'>Email</label>
                    <input className='pl-2 border rounded-md py-2' type="text" placeholder="Email" />
                </div>

            </div>
        </div>
    )
}