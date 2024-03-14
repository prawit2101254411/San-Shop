'use client'
import React from 'react'
import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion, Variants } from 'framer-motion'

type Props = {}

export default function SideBar({}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const itemVariants: Variants = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    className='z-50'
  >
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
    >
      <motion.div
        variants={{
          open: { rotate: 180 },
          closed: { rotate: 0 }
        }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>

      </motion.div>
    </motion.button>
    <motion.ul
      className=' fixed bg-white w-full pl-5 pt-3 mt-1 border rounded-lg md:hidden'
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
      <motion.li variants={itemVariants}>Item 1 </motion.li>
      <motion.li variants={itemVariants}>Item 2 </motion.li>
      <motion.li variants={itemVariants}>Item 3 </motion.li>
      <motion.li variants={itemVariants}>Item 4 </motion.li>
      <motion.li variants={itemVariants}>Item 5 </motion.li>
    </motion.ul>
  </motion.nav>
  )
}