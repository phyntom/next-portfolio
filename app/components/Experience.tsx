'use client'
import { useScroll, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Progress from '@/components/Progress'
import { VscDebugBreakpointConditional, VscDebugBreakpointData, VscDebugBreakpointLog } from 'react-icons/vsc'

type ExperienceProps = {
  experiences: Experience[]
}

type Experience = {
  position: string
  company: string
  companyLink: string
  time: string
  location: string
  work: string[]
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
        <div className='w-full font-medium mt-2'>
          <Description descriptions={work} />
        </div>
      </motion.div>
    </li>
  )
}

const Description = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <div className='flex flex-col items-start justify-between'>
      {descriptions.map((description, index) => (
        <div key={index} className='flex items-baseline'>
          <span className='mr-2'>
            <VscDebugBreakpointData />
          </span>
          <span className='font-medium text-black/80'>{description}</span>
        </div>
      ))}
    </div>
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
            company='MICROSOFT'
            companyLink='https://microsoft.com'
            time={'2021-Present'}
            location={'Nairobi, Kenya'}
            work={[
              'Developed and deployed features and fixes for FX Search (FX) group, improving customer satisfaction and engagement and enabling new capabilities unavailable',
              'Led a team of 5 engineers to implement Overview features for Office.com and SharePoint.com, enhancing search experience by 30%',
              'Maintained code quality by conducting constructive code reviews and guiding best practices, fostering a collaborative environment',
              'Designed specifications document for the overview feature, streamlining development and ensuring accurate feature delivery',
            ]}
          />
          <WorkDetails
            position={'Software Engineer'}
            company='COMZAFRICA LTD'
            companyLink='http://comzafrica.com/'
            time={'2013-2021'}
            location={'Kigali, Rwanda'}
            work={[
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization",
              'Developed web app for loan protection, streamlining processes and enhancing efficiency by 25%',
              'Delivered REST and GraphQL APIs, enhancing third-party integration and connectivity',
              'Implemented performance tuning techniques on the back-end queries which resulted in 35% improvement in application performance',
              'Spearheaded tech stack revamp to Spring Framework, boosting productivity by 25% and enhancing system scalability',
            ]}
          />
          <WorkDetails
            position={'Software Developer'}
            company='SONARWA LIFE LTD'
            companyLink='https://sonarwalife.co.rw/'
            time={'2011-2013'}
            location={'Kigali, Rwanda'}
            work={[
              "Worked on a team responsible for developing new features for Google's search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization",
              'Automated brokers and agent payments, improving efficiency by 15%.',
              'Led technology selection, applications rollout, and monitoring, optimizing resource allocation and aligning with organizational objectives',
            ]}
          />
          <WorkDetails
            position={'Software Developer'}
            company='RITC/KIST'
            companyLink=''
            time={'2009-2011'}
            location={'Kigali, Rwanda'}
            work={[
              'Designed and developed internal applications, including a student registration web app and an OLPC project inventory system',
              'Led a team of 5 people covering every new innovative product of the organization',
              'Supervised and assigned work to technical personnel while mentoring junior developers and engineers',
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
