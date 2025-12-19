import Grid from '@/components/Grid'
import profile from '../../public/developer-pic-4.webp'
import Image from 'next/image'
import { skills } from '../data/skills'
import { Metadata } from 'next'
import { ExperienceSection } from '@/components/ExperienceSection'
import dynamic from 'next/dynamic'
import AnimatedText from '@/components/AnimatedText'

const AnimatedNumber = dynamic(() => import('@/components/AnimatedNumber'), { ssr: false })
const SkillsList = dynamic(() => import('@/components/SkillsList'), { ssr: false })

export const metadata: Metadata = {
  title: 'Portfolio | About',
  description: "This is the about page for Aimable's portfolio",
}

export default function About() {
  return (
    <main>
      <Grid variant='block' className='pt-4'>
        <AnimatedText text='Passion Ignites Purpose' className='!m-4 md:!m-8 !text-center text-2xl md:text-3xl xl:text-7xl' />
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 lg:gap-16 mb-16'>
          <div className='order-2 lg:order-1 col-span-1 md:col-span-4 lg:col-span-3 flex flex-col items-center lg:items-start justify-start text-center lg:text-left'>
            <h2 className='mb-4 p-2 text-lg font-bold uppercase text-black/75'>Biography</h2>
            <p className='mb-4 p-2 font-medium'>
              Hi, I&rsquo;m <i className='font-bold'>Aimable</i>, a seasoned software engineer with over 14 years of
              experience in the software development sector, currently based in Nairobi, Kenya. My journey in technology
              has been defined by a passion for crafting high-performance, secure, data-driven applications that push
              boundaries and deliver exceptional results
            </p>

            <p className='mb-4 p-2 font-medium'>
              I take pride in my ability to collaborate effectively with diverse teams and clients, ensuring that
              projects are not only technically sound but also align with business goals and user needs. Whether I'm
              leading a team of engineers or working on a solo project, I bring a commitment to excellence and a drive
              to innovate to everything I do
            </p>

            <p className='mb-4 p-2 font-medium'>
              I&rsquo;m excited about the opportunity to leverage my skills and experience to help drive your next
              project to success. Let&rsquo;s connect and discuss how we can turn your vision into a reality through
              quality code and collaboration
            </p>
          </div>

          {/* Profile Image */}
          <div className='order-1 lg:order-2 col-span-1 md:col-span-4 lg:col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-4 md:p-8 shadow-custShadow'>
            <Image src={profile} alt='profile' className='h-auto w-full rounded-2xl shadow-md' />
          </div>

          {/* Stats */}
          <div className='order-3 col-span-1 md:col-span-4 lg:col-span-2 flex flex-row flex-wrap lg:flex-col items-center lg:items-end justify-center lg:justify-between gap-6 lg:gap-0'>
            <div className='flex flex-col items-center lg:items-end justify-center text-center lg:text-right'>
              <span className='inline-block text-4xl md:text-5xl lg:text-7xl font-bold'>
                <AnimatedNumber target={25} />+
              </span>
              <h2 className='text-sm md:text-base lg:text-xl font-medium capitalize text-black/75'>github project repos</h2>
            </div>
            <div className='flex flex-col items-center lg:items-end justify-center text-center lg:text-right'>
              <span className='inline-block text-4xl md:text-5xl lg:text-7xl font-bold'>
                <AnimatedNumber target={20} />+
              </span>
              <h2 className='text-sm md:text-base lg:text-xl font-medium capitalize text-black/75'>projects completed</h2>
            </div>
            <div className='flex flex-col items-center lg:items-end justify-center text-center lg:text-right'>
              <span className='inline-block text-4xl md:text-5xl lg:text-7xl font-bold'>
                <AnimatedNumber target={14} />+
              </span>
              <h2 className='text-sm md:text-base lg:text-xl font-medium capitalize text-black/75'>years of experience</h2>
            </div>
          </div>
        </div>
        <SkillsList skills={skills} />
        <ExperienceSection />
      </Grid>
    </main>
  )
}