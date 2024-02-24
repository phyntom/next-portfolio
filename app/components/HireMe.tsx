'use client'
import React from 'react'
import hireme from '../../public/animated-canvas-transformed.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-end overflow-hidden'>
      <motion.div className='w-48 h-auto flex items-center justify-center relative' variants={spin} animate='animate'>
        <Image src={hireme} alt='hireme' />
      </motion.div>
    </div>
  )
}

export default HireMe
