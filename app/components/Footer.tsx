import Grid from '@/components/Grid'
import { Heart, HeartPulse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[128px] border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Grid variant='flex' className='items-center justify-evenly'>
        <span>{new Date().getFullYear()} &copy; All rights reserved </span>
        <div className='flex items-center justify-center'>
          Build With
          <span className='px-2'>
            <Heart />
          </span>
          <Link
            href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538/'
            className='underline underline-offset-4'
            target={'_blank'}
          >
            Phyntom
          </Link>
        </div>
        <Link href={''}>Say Hello</Link>
      </Grid>
    </footer>
  )
}

export default Footer
