import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import profile from '../../public/developer-pic-4.png'
import Image from 'next/image'
import AnimatedNumber from '@/components/AnimatedNumber'

export default function About() {
  return (
    <main>
      <Grid variant='inline' className='pt-4'>
        <AnimatedText text='Driving Innovation Through Expertise and Collaboration' className='!text-left mb-4' />
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
          <div className='col-span-3 relative h-full border-2 border-solid border-black rounded-2xl p-8 bg-white'>
            <div className='absolute top-0 -right-6 -z-50 w-[102%] h-[103%] rounded-2xl bg-black' />
            <Image src={profile} alt='profile' className='w-full h-auto rounded-2xl shadow-md' objectFit='cover' />
          </div>
          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <AnimatedNumber value={5} className='inline-block text-7xl font-bold' />
              <h2 className='text-xl font-medium capitalize text-black/75'>satisfied clients</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <AnimatedNumber value={15} className='inline-block text-7xl font-bold' />
              <h2 className='text-xl font-medium capitalize text-black/75'>projects completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <AnimatedNumber value={14} className='inline-block text-7xl font-bold' />
              <h2 className='text-xl font-medium capitalize text-black/75'>years of experiences</h2>
            </div>
          </div>
        </div>
      </Grid>
    </main>
  )
}
