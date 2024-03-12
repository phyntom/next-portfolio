import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <main>
      <Grid variant='inline' className='pt-18'>
        {/* <AnimatedText text='Reach Me Out' className='!text-7xl !text-center m-8' /> */}
        <div className='flex flex-col items-center gap-4 rounded-xl border shadow p-8 w-3/5 mx-auto'>
          <div className='flex flex-col py-4 w-2/3 gap-2'>
            <h3 className='font-semibold tracking-tight text-2xl'>Send me a message</h3>
            <p className='text-md'>Enter your names and email, send me a fantastic message</p>
          </div>
          <form className='w-2/3 relative'>
            {/* <div className='absolute top-0 -right-4 -z-50 w-[102%] h-[103%] rounded-2xl bg-black' /> */}
            <div className='mb-4'>
              <label htmlFor='name' className='block text-lg font-medium text-slate-600'>
                Names
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='mt-1 p-2 block w-full border border-black/10 rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-lg font-medium text-slate-600'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='mt-1 p-2 block w-full border border-black/10 rounded-md'
                placeholder='name@example.com'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-lg font-medium text-slate-600'>
                Message
              </label>
              <textarea
                rows={10}
                cols={30}
                id='message'
                className='mt-1 p-2 flex min-h-[60px] w-full rounded-md border border-black/10'
                placeholder='Please include all information relevant to your issue.'
              />
            </div>
            <div className='mb-4'>
              <button className='mt-1 p-2 block w-full bg-black text-white rounded-md'>
                <div className='flex items-center justify-center gap-2 text-lg '>
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
