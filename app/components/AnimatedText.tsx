'use client'
import React from 'react'
import { motion } from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-pretty overflow-hidden'>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize ${className}`}
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className='inline-block'>{text}</span>
      </motion.h1>
    </div>
  )
}

export default AnimatedText
