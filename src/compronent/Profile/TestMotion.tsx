'use client'
import React from 'react'
import { motion, Variants } from "framer-motion";
import { useState } from 'react';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

type Props = {}

export default function TestMotion({ }: Props) {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className=""
    >
      <motion.button
        className=' font-semibold flex w-full pl-5 text-sm py-1 '
        whileTap={{ scale: 0.90 }}
        onClick={() => setIsOpen(!isOpen)}
      ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person ml-1 mr-2" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
        ข้อมูลส่วนตัว
      </motion.button>
      {isOpen == true && <motion.ul
        className=' mt-1 flex flex-col'
      >
        <a className='pl-10 text-sm w-full py-1 hover:text-blue-500 text-gray-400'>ประวัติ</a>
        <a className='pl-10 mt-1 text-sm w-full py-1 hover:text-blue-500 text-gray-400'>ที่อยู่</a>
        <a className='pl-10 mt-1 text-sm w-full py-1 hover:text-blue-500 text-gray-400'>เปลี่ยนรหัสผ่าน</a>
      </motion.ul>}
    </motion.nav>
  )
}