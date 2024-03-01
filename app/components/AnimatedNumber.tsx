'use client'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedNumberProps = {
  target: number
  className?: string
  duration?: number
}

const AnimatedNumber = ({ target = 5, className, duration = 1000 }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration })
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, target, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0)) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, target])

  return <span ref={ref} className={`${className}`}></span>
}

export default AnimatedNumber

// TODO: refactor this component to use some hooks like useMotionValue, useAnimate,useSpring
