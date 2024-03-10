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

export default function TestMotion({}: Props) {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    className="border"
  >
    <motion.button
    className=' bg-white flex justify-between w-full pl-5 text-sm'
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      ข้อมูลส่วนตัว
      <motion.div
      className=' flex items-center mr-2 '
        variants={{
          open: { rotate: 180 },
          closed: { rotate: 0 }
        }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
      >
        <svg width="15" height="15" viewBox="0 0 20 20" className=' '>
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </motion.div>
    </motion.button>
    {isOpen == true && <motion.ul
    className=' mt-1 bg-white flex flex-col'
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
          }
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
          }
        }
      }}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <a className='pl-2 text-sm w-full py-1 hover:bg-gray-100 text-gray-400' >Item 1 </a>
      <a className='pl-2 mt-1 text-sm w-full py-1 hover:bg-gray-100 text-gray-400' >Item 2 </a>
      <a className='pl-2 mt-1 text-sm w-full py-1 hover:bg-gray-100 text-gray-400' >Item 3 </a>
    </motion.ul>}
  </motion.nav>
  )
}