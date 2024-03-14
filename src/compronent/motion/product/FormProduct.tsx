'use client'
import React from 'react'
import Slideshow from '../../slideshow/SlideShowForm'
import { motion, Variants } from "framer-motion";

type Props = {
}

export default function FormProduct({ }: Props) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className='flex flex-col z-50 border rounded-lg w-[150px] h-[200px] bg-white'>
      <img src="product/short.jpg" alt="short" className=' w-full h-32 rounded-lg' />
      <div className=' w-full h-full'>

      </div>
    </motion.div>
  )
}