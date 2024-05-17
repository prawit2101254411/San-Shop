import React from 'react'
import Slideshow from '@/compronent/slideshow/SlideShowForm'
import NavBar from '@/compronent/nevigation/NavBar'
import { getSession } from '@/utils/auth'
import FormProduct from '@/compronent/motion/product/FormProduct';
import Statistics from '@/compronent/motion/homepage/Statistics'
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getSession();
  return (
    <div className="flex flex-col w-full border ">
      <NavBar session={session} />
      <Slideshow />
      <div className=' flex items-center justify-center border border-green-500 h-[200px]'>
        <Statistics />
      </div>
      <div className=' w-full h-full bg-gray-200 p-5 grid grid-cols-2 xl:grid-cols-6'>
        <FormProduct />
      </div>
    </div>
    // <div className="w-full h-[1024px] relative bg-white">
    //   {/* <img className="w-[1440px] h-[1025px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x1025" /> */}
    //   <div className="w-[1174px] h-[89px] left-[133px] top-[57px] absolute bg-white/opacity-90 rounded-[80px]">
    //     <div className="w-28 px-[3px] py-0.5 left-[19px] top-[34px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="w-6 h-6 relative" />
    //       <div className="text-black text-[15px] font-normal font-['TharLon']">Search</div>
    //     </div>
    //     <div className="w-28 h-[29px] left-[147px] top-[34px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-black text-[15px] font-normal font-['TharLon']">For individuals
    //       </div>
    //     </div>
    //     <div className="w-[101px] h-[30px] left-[270px] top-[33px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-black text-[15px] font-normal font-['TharLon']">For charities</div>
    //     </div>
    //     <div className="px-3.5 left-[537px] top-[18px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-teal-500 text-[32px] font-normal font-['TharLon']">Logo</div>
    //     </div>
    //     <div className="left-[753px] top-[37px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-black text-[15px] font-normal font-['TharLon']">How it works </div>
    //     </div>
    //     <div className="left-[872px] top-[38px] absolute justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-black text-[15px] font-normal font-['TharLon']">Sign in</div>
    //     </div>
    //     <div className="w-[198px] h-[39px] left-[952px] top-[25px] absolute rounded-[33px] border border-teal-500/opacity-60 justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-teal-500 text-xl font-normal font-['TharLon']">Start a Gofundme</div>
    //     </div>
    //   </div>
    //   <div className="w-[205px] h-[51px] left-[635px] top-[512px] absolute">
    //     <div className="w-[205px] h-[51px] px-[76px] py-3.5 left-0 top-0 absolute bg-white/opacity-90 rounded-[34px] justify-center items-center gap-2.5 inline-flex">
    //       <div className="text-teal-500 text-2xl font-normal font-['TharLon']">Start</div>
    //     </div>
    //   </div>
    // </div>
  )
}
