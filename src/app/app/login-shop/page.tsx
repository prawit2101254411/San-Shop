import React from 'react'
import FormLoginShop from '@/compronent/login/FormLogin-shop'

export default function page() {
    return (
        <div className=' w-screen h-screen'>
            <div className='flex w-full h-full'>
                <div className='xl:flex hidden items-center justify-center  border border-blue-500 w-1/2 h-full'>
                    <div className='flex items-center justify-center w-32 h-32 rounded-full shadow-lg  hover:animate-fade hover:animate-infinite '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" bi bi-facebook" viewBox=" 0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </div>
                </div>
                <div className=' flex items-center justify-center border border-red-500 xl:w-1/2 h-full'>
                <FormLoginShop/>
                </div>
            </div>
        </div>
    )
}
