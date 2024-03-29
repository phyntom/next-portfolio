import profile from '../public/developer-pic-2.png'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Grid from './components/Grid'
import { ArrowUpRightFromSquare } from 'lucide-react'
import HireMe from './components/HireMe'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio | Home',
  description: "This is the home page for Aimable's portfolio",
}
export default function Home() {
  return (
    <main>
      <Grid variant='inline' className='pt-4'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='md:w-1/2 w-full'>
            <Image
              src={profile}
              width={500}
              height={500}
              quality={85}
              alt='profile picture'
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
              loading='lazy'
              className='w-full h-auto top-0'
              priority={false}
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <AnimatedText
              text='Turning Vision Into Reality With Code And Design'
              className='text-2xl md:text-3xl xl:text-7xl'
            />
            <p className='my-4 text-pretty text-xs md:text-base font-medium'>
              Passionate Software Engineer with 14+ years of experience in developing large scale web applications and
              backend systems. Skilled at writing clear, concise code that is easy to maintain and troubleshoot.
              Experienced in working with both small and large teams across multiple projects and companies. Able to
              work independently, in a hybrid, or remote settings.
            </p>
            <div className='flex items-center self-start mt-4 gap-2'>
              <Link
                href='/Resume.pdf'
                target={'_blank'}
                className='flex items-center gap-2 bg-black text-white p-2 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 border border-solid border-black'
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
        </div>
      </Grid>
      <HireMe />
    </main>
  )
}
