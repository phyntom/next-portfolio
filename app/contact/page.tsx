import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <main>
      <Grid variant='inline' className='pt-4'>
        <AnimatedText text='Reach Me Out' className='!text-7xl !text-center m-8' />
        <div className='flex flex-col items-center'>
          <form className='w-1/2 relative border-2 border-solid border-black p-12 rounded-lg bg-white'>
            <div className='absolute top-0 -right-4 -z-50 w-[102%] h-[103%] rounded-2xl bg-black' />
            <div className='mb-4'>
              <label htmlFor='name' className='block text-xl font-medium text-black'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='mt-1 p-2 block w-full border border-black rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-xl font-medium text-black'>
                E-mail
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='mt-1 p-2 block w-full border border-black rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-xl font-medium text-black'>
                Message
              </label>
              <textarea
                rows={10}
                cols={30}
                id='message'
                className='mt-1 p-2 block w-full border border-black rounded-md'
              />
            </div>
            <div className='mb-4'>
              <button className='mt-1 p-2 block w-full bg-black text-white rounded-md'>
                <div className='flex items-center justify-center gap-2 text-xl'>
                  <AiOutlineMail />
                  <span>Submit</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </Grid>
    </main>
  )
}

export default Contact
