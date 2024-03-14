'use client'
import React from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type Props = {}

export default function Statistics({ }: Props) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 10 });
        return animation.stop;
    }, []);

    return (
        <motion.h1
        className='text-7xl font-semibold text-blue-500 drop-shadow-md '
        >
           {rounded}

        </motion.h1>
    )
}