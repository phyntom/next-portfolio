'use client'
import { useScroll, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Progress from '@/components/Progress'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import MarkdownViewer from './MarkdownViewer'

type ExperienceProps = {
  children?: React.ReactNode
}

const WorkDetails = ({ children }: ExperienceProps) => {
  const targetRef = useRef(null)
  return (
    <li
      ref={targetRef}
      className='my-8 mx-auto flex flex-col items-center justify-between'
    >
      <Progress targetRef={targetRef} />
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, type: 'spring' }}>
        {children }
      </motion.div>
    </li>
  )
}

const Experience = ({children}: ExperienceProps) => {
  const divRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'center center'],
  })

  return (
    <div className='my-16 md:my-32'>
      <h2 className='sticky top-0 z-10 bg-white/90 backdrop-blur-sm py-4 mb-8 md:mb-16 w-full text-center text-3xl md:text-5xl lg:text-8xl font-bold'>Experience</h2>
      <div className='relative h-full mx-auto w-full md:w-[85%] lg:w-[75%]' ref={divRef}>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className='fixed bottom-1 left-4 right-4 md:left-1/4 md:right-1/4 lg:left-1/3 lg:right-1/3 h-[6px] md:h-[10px] bg-pink-900/80 rounded-full'
        />
        <WorkDetails>
         {children}
         </WorkDetails>
      </div>
    </div>
  )
}

export default Experience

