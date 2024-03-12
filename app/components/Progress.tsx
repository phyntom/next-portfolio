import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

type ProgressProps = {
  targetRef: React.MutableRefObject<null>
}

const Progress = ({ targetRef }: ProgressProps) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  })
  return (
    <figure className='absolute left-10 stroke-black'>
      <svg width='100' height='100' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='30' className='stroke-pink-900 stroke-2 fill-none' />
        <motion.circle
          cx='50'
          cy='50'
          r='30'
          className='stroke-[10px] fill-white'
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx='50' cy='50' r='20' className='stroke-1 fill-pink-900' />
      </svg>
    </figure>
  )
}

export default Progress
