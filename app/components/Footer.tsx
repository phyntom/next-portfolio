import Grid from '@/components/Grid'
import { Heart, HeartPulse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' w-full border-solid border-t-2 border-black'>
      <Grid variant='flex' className='justify-evenly'>
        <span>{new Date().getFullYear()} &copy; All rights reserved </span>
        <div className='flex items-center'>
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
