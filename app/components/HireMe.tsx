'use client'
import React from 'react'
import hireme from '../../public/animated-canvas-transformed.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const spin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

const CircularText = () => {
  return (
    <motion.div className='w-48 h-auto flex items-center justify-center relative' variants={spin} animate='animate'>
      <Image src={hireme} alt='hireme' priority={false} />
    </motion.div>
  )
}

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-end overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText />
        <Link
          href='mailto:phyntom@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md 
          border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black'
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
