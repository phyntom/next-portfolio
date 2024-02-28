'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type AnimatedNumberProps = {
  value: number
  className?: string
}

const AnimatedNumber = ({ value, className }: AnimatedNumberProps) => {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber(prev => {
        if (prev < value) {
          return prev + 1
        }
        return prev
      })
    }, 100)
    return () => clearInterval(interval)
  }, [value])
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={` ${className} `}>
      {currentNumber}
    </motion.span>
  )
}

export default AnimatedNumber

// TODO: refactor this component to use some hooks like useMotionValue, useAnimate,useSpring
