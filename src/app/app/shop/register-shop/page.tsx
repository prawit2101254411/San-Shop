import React from 'react'
import { Search } from '@/utils/action'

export default function page() {
    return (
        <div className='flex'>
            <div className='xl:flex hidden items-center justify-center w-1/2 h-screen border border-red-500 '>
                <h1 className=' text-5xl'>ใส่ไรดี</h1>
            </div>
            <div className='flex items-center justify-center w-full xl:w-1/2 h-screen border border-blue-500 '>
                <div className='flex flex-col justify-center items-center p-20 border rounded-lg'>
                    <div>
                    <h1 className='text-2xl font-medium' >สมัครเป็นผู้ขายกับเรา</h1>
                    <p className='mb-7 text-sm text-gray-400'>ง่ายๆ เพียง2 ขั้นตอนเท่านั้น</p>
                    </div>
                    <form className=''>
                        {/* <div className=' max-w-[200px] '>
                            <label htmlFor="" className='block text-sm font-medium mb-1'>ชื่อร้าน</label>
                            <input
                                className='w-full border rounded-lg p-2 '
                                id='nameshop'
                                name='nameshop'
                                type="text"
                            />
                        </div> */}
                        <div className='mt-3 max-w-[200px] '>
                            <label htmlFor="" className='block text-sm font-medium mb-1'>เบอร์โทร</label>
                            <input
                                className='w-full border rounded-lg p-2 '
                                type='tel'
                                id='tel'
                                name='tel'
                            />
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}
