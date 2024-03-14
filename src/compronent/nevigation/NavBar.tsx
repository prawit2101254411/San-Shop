'use client'
import page from '@/app/page'
import React from 'react'
import { useScroll, useMotionValueEvent, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import Setting from './Setting'
import SideBar from './SideBar'

type Props = {
  session: any,
}
export default function NavBar({ session }: Props) {

  const { scrollY } = useScroll();
  var [hidden, setHiden] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    const previous = scrollY.getVelocity()
    if (previous > 0) {
      setHiden(true)
    } else {
      setHiden(false)
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut", }}
      className="flex flex-col sticky top-0 border p-3 z-40 w-full bg-white ">
       <SideBar/>
      <div className='flex justify-between border border-red-600'>
        <a className="border flex items-center font-bold ml-5 text-3xl hover:text-blue-500 drop-shadow-lg " href="http://localhost:3000/">San Wit</a>
        <div className='border flex items-center justify-center '>
          <ul className='hidden md:block border'>
            <li>San</li>
          </ul>
        </div>

        {/* ควบคุม */}
        <Setting session={session} />
      </div>
      <div className='flex justify-center border p-2 bg-white'>
        <input type="text" className='border rounded-lg pl-1' />
        <button className=' p-1 ml-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg></button>
        <a href="http://localhost:3000/app/trolley" className='p-1 ml-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg></a>
      </div>
    </motion.nav>
  )
}
