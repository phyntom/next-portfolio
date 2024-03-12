import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import profile from '../../public/developer-pic-4.png'
import Image from 'next/image'
import AnimatedNumber from '@/components/AnimatedNumber'
import SkillsList from '@/components/SkillsList'
import { skills } from '../data/skills'
import Experience from '@/components/Experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | About',
  description: "This is the about page for Aimable's portfolio",
}

export default function About() {
  return (
    <main>
      <Grid variant='inline' className='pt-4'>
        <AnimatedText text='Passion Ignites Purpose' className='m-8 !text-center !text-7xl' />
        <div className='grid grid-cols-8 gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
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
          <div className='shadow-custShadow col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-8'>
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' /> */}
            <Image src={profile} alt='profile' className='h-auto w-full rounded-2xl shadow-md' />
          </div>
          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber target={25} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-black/75'>github project repos</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber target={20} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-black/75'>projects completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber target={14} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-black/75'>years of experiences</h2>
            </div>
          </div>
        </div>
        <SkillsList skills={skills} />
        <Experience />
      </Grid>
    </main>
  )
}
