'use client'
import React from 'react'
import { useScroll, useMotionValueEvent, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

type Props = {
    session : any,
}

export default function Setting({ session }: Props) {
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
        <div className=" flex items-end ">
            {!session && <a className="border p-3 hover:shadow" href="http://localhost:3000/app/login">เข้าสู่ระบบ</a>}
            {session && <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className=''
            >
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
                >
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                    className=' fixed flex flex-col bg-white w-full pl-5 pt-3 mt-1 border rounded-lg py-2'
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
                    <motion.a className='font-semibold' variants={itemVariants} href='http://localhost:3000/app/user/profile'>Profile </motion.a>
                    <motion.a className='font-semibold mt-1' variants={itemVariants}>Store</motion.a>
                    <motion.a className='font-semibold mt-1' variants={itemVariants} onClick={() => signOut()}>Sign Out</motion.a>
                </motion.ul>
            </motion.nav>}
            {session && <img src={session.user.image} className=' w-20 rounded-full' />}
        </div>

    )
}