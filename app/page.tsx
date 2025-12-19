import profile from '../public/developer-pic-2.webp'
import Link from 'next/link'
import Grid from './components/Grid'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import AnimatedText from './components/AnimatedText'

const HireMe = dynamic(() => import('./components/HireMe'), { 
  ssr: false,
  loading: () => <div className="w-48 h-48" />
})

export const metadata: Metadata = {
  title: 'Portfolio | Home',
  description: "This is the home page for Aimable's portfolio",
}
export default function Home() {
  return (
    <main>
      <Grid variant='block' className='pt-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
          <div className='w-full height-[70%]'>
            <Image
              src={profile}
              width={500}
              height={500}
              quality={85}
              alt='profile picture'
              sizes='(max-width: 768px) 100vw, 50vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority={true}
              className='w-full h-auto top-0'
            />
          </div>
          <div className='w-full height-[70%]'>
            <AnimatedText
              text='Turning Vision Into Reality With Code And Design'
              className='text-4xl md:text-3xl xl:text-7xl'
            />
            <div className='flex items-center self-start mt-4 gap-2'>
              <Link
                href='/Resume.pdf'
                target={'_blank'}
                className='flex items-center gap-2 bg-customRed border border-customRed focus:outiline-none
                text-white p-2 px-8 rounded-[20px] text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 border border-solid border-black'
                download={true}
              >
                Resume
                <ArrowUpRightFromSquare />
              </Link>
              <Link
                href='mailto:phyntom@gmail.com'
                target={'_blank'}
                className='text-green-900 text-lg font-medium capitalize underline'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='md:col-span-2 mt-8'>
            <div className='relative p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm'>
              <div className='absolute top-0 left-6 md:left-10 w-12 h-1 bg-green-900 rounded-full -translate-y-1/2'></div>
              <p className='text-pretty leading-relaxed text-sm md:text-lg lg:text-xl text-gray-700 font-light tracking-wide'>
                Passionate Software Engineer with <span className='font-semibold text-black'>14+ years</span> of experience in developing large scale web applications and
                backend systems. Skilled at writing clear, concise code that is easy to maintain and troubleshoot.
                Experienced in working with both small and large teams across multiple projects and companies. Able to
                work independently, in a hybrid, or remote settings.
              </p>
            </div>
          </div>
        </div>
      </Grid>
      <HireMe />
    </main>
  )
}
