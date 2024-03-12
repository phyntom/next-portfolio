'use client'
import { useScroll, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Progress from '@/components/Progress'

type ExperienceProps = {
  experiences: Experience[]
}

type Experience = {
  position: string
  company: string
  companyLink: string
  time: string
  location: string
  work: string
}

const WorkDetails = ({ position, company, companyLink, time, location, work }: Experience) => {
  const targetRef = useRef(null)
  return (
    <li
      ref={targetRef}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <Progress targetRef={targetRef} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 2, type: 'spring' }}>
        <h3 className='text-2xl font-bold capitalize'>
          {position}&nbsp;
          <a href={companyLink} className='capitalize text-pink-800' target='_blank'>
            @{company}
          </a>
        </h3>
        <span className='font-medium capitalize text-black/75'>
          {time} | {location}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const divRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'center center'],
  })

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold'>Experience</h2>
      <div className='relative h-full mx-auto w-[75%%]' ref={divRef}>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className='fixed bottom-1 left-1/3 right-1/3 h-[10px] bg-pink-900/80'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <WorkDetails
            position={'Senior Software Engineer'}
            company='Microsoft'
            companyLink='https://microsoft.com'
            time={'2021-Present'}
            location={'Nairobi, Kenya'}
            work={
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <WorkDetails
            position={'Software Engineer'}
            company='Comzafrica LTD'
            companyLink='http://comzafrica.com/'
            time={'2013-2021'}
            location={'Kigali, Rwanda'}
            work={
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <WorkDetails
            position={'Software Developer'}
            company='SONARWA Life Ltd'
            companyLink='https://sonarwalife.co.rw/'
            time={'2011-2013'}
            location={'Kigali, Rwanda'}
            work={
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <WorkDetails
            position={'Senior Software Engineer'}
            company='Microsoft'
            companyLink='https://microsoft.com'
            time={'2021-Present'}
            location={'Nairobi, Kenya'}
            work={
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
