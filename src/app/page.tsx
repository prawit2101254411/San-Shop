import React from 'react'
import Slideshow from '@/compronent/slideshow/SlideShowForm'
import NavBar from '@/compronent/nevigation/NavBar'
import { getSession } from '@/utils/auth'
import FormProduct from '@/compronent/motion/product/FormProduct';
import Statistics from '@/compronent/motion/homepage/Statistics'


export default async function page() {
  const session = await getSession();
  return (
    <div>
      <NavBar session={session} />
      <Slideshow />
      <div className=' flex items-center justify-center border border-green-500 h-[200px]'>
        <Statistics />
      </div>
      <div className=' w-full h-full bg-gray-200 p-5 grid grid-cols-2 xl:grid-cols-6'>
        <FormProduct />
      </div>
    </div>
  )
}
