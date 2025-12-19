import Grid from '@/components/Grid'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-6 md:py-8 border-t-2 border-solid border-dark font-medium text-sm md:text-base dark:text-light dark:border-light mt-auto'>
      <Grid variant='flex' className='flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0'>
        <span className='text-center'>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div className='flex items-center justify-center'>
          <span>Build With</span>
          <span className='px-2 text-red-500'>
            <Heart className='w-4 h-4 md:w-5 md:h-5' fill='currentColor' />
          </span>
          <Link
            href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538/'
            className='underline underline-offset-4 hover:text-pink-800 transition-colors'
            target={'_blank'}
          >
            Phyntom
          </Link>
        </div>
        <Link href='/contact' className='hover:text-pink-800 transition-colors'>Say Hello</Link>
      </Grid>
    </footer>
  )
}

export default Footer
