'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

type Props = { session: any, }

export default function SildeBarShopForm({ session }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 }, }
  };

  // console.log(session)
  return (
    <div className='flex flex-col w-full bg-gray-50 rounded-xl'>
      <div id='user' className='flex  mt-5 '>
        <img src='/Logo/user.webp' alt="" className='w-20 h-12 rounded-full drop-shadow-lg' />
        <p className=' text-sm text-gray-400'>ผู้ใช้:{session?.user?.username}</p>
      </div>
      <div className='flex items-center bg-white  rounded-lg justify-center mt-2 '>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className='flex flex-col '
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center mt-2 w-full justify-center text-sm text-black rounded-lg drop-shadow-2xl " aria-controls="navbar-default" aria-expanded="false"
          >
            จัดการสินค้า
            <motion.div
              className=' ml-5 hover:text-blue-400  '
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </motion.div>
          </motion.button>
          <motion.ul
            className='flex flex-col bg-white w-full pl-5 pt-1  rounded-lg py-2'
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                  delayChildren: 0.2,
                  staggerChildren: 0.05
                },
                height: 65
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
                height: 0
              },

            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.a className='text-sm text-gray-400' id='a1' variants={itemVariants} href=''>จัดการสินค้า </motion.a>
            <motion.a className='text-sm text-gray-400 mt-1' id='a2' variants={itemVariants} href=''>เพิ่มสินค้า</motion.a>
          </motion.ul>
        </motion.nav>
      </div>
      <div className='flex items-center bg-white  rounded-lg justify-center '>
        <motion.nav
          initial={false}
          animate={isOpen1 ? "open" : "closed"}
          className='flex flex-col '
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen1(!isOpen1)}
            className="flex items-center mt-2 w-full justify-center text-sm text-black rounded-lg " aria-controls="navbar-default" aria-expanded="false"
          >
            คำสั่งซื้อ
            <motion.div
              className=' ml-10 hover:text-blue-400'
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </motion.div>
          </motion.button>
          <motion.ul
            className='flex flex-col bg-white w-full pl-5 pt-1  rounded-lg py-2'
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                  delayChildren: 0.2,
                  staggerChildren: 0.05
                },
                height: 65
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
                height: 0
              },

            }}
            style={{ pointerEvents: isOpen1 ? "auto" : "none" }}
          >
            <motion.a className='text-sm text-gray-400' id='a1' variants={itemVariants} href=''>คำสั่งซื้อ </motion.a>
            <motion.a className='text-sm text-gray-400 mt-1' id='a2' variants={itemVariants} href=''>การจดัส่งสินค้า</motion.a>
          </motion.ul>
        </motion.nav>
      </div>
      <div className='flex items-center bg-white  rounded-lg justify-center '>
        <motion.nav
          initial={false}
          animate={isOpen2 ? "open" : "closed"}
          className='flex flex-col '
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen2(!isOpen2)}
            className="flex items-center mt-2 w-full justify-center text-sm text-black rounded-lg " aria-controls="navbar-default" aria-expanded="false"
          >
            บัญชีผู้ใช้
            <motion.div
              className=' ml-9 hover:text-blue-400'
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </motion.div>
          </motion.button>
          <motion.ul
            className='flex flex-col bg-white w-full pl-5 pt-1  rounded-lg py-2'
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                  delayChildren: 0.2,
                  staggerChildren: 0.05
                },
                height: 65
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
                height: 0
              },

            }}
            style={{ pointerEvents: isOpen2 ? "auto" : "none" }}
          >
            <motion.a className='text-sm text-gray-400' id='a1' variants={itemVariants} href=''>จัดการบัญชี</motion.a>
            <motion.a className='text-sm text-gray-400 mt-1' id='a2' variants={itemVariants} href=''>เปลี่ยนรหัสผ่าน</motion.a>
          </motion.ul>
        </motion.nav>
      </div>
      <div className='flex items-center justify-center p-4 mt-auto border' onClick={() => signOut()}>Log Out</div>
    </div>
  )
}