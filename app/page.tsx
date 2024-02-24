import Image from 'next/image'
import profile from '../public/developer-pic-1.png'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Grid from './components/Grid'
import { ArrowUpRightFromSquare } from 'lucide-react'
import HireMe from './components/HireMe'

export default function Home() {
  return (
    <main className='flex items-center text-black w-full min-h-screen'>
      <Grid variant='inline' className='bg-white'>
        <div className='flex items-center justify-between'>
          <div className='w-1/2'>
            <Image src={profile} alt='profile' className='w-full h-auto' />
          </div>
          <div className='w-1/2'>
            <AnimatedText text='Turning Vision Into Reality With Code And Design' className='!text-left' />
            <p className='my-4 text-base font-medium'>
              Passionate Software Engineer with 13+ years of experience in developing large scale web applications and
              backend systems. Skilled at writing clear, concise code that is easy to maintain and troubleshoot.
              Experienced in working with both small and large teams across multiple projects and companies. Able to
              work independently, in a hybrid, or remote settings.
            </p>
            <div className='flex items-center self-start mt-2 gap-2'>
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
