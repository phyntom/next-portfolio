'use client'
import Grid from '@/components/Grid'
import React, { FormEvent, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import avatar from '../../public/avatar.png'
import Image from 'next/image'
import { MdEmail, MdLocationPin, MdPermPhoneMsg } from 'react-icons/md'
import * as v from 'valibot'
import EmailMessage from '@/components/EmailMessage'
import { render } from '@react-email/render'
import { EmailOptions } from 'utils/sendEmail'
import toast, { Toaster } from 'react-hot-toast'
import CustomToaster from '@/components/CustomToaster'

const MessageSchema = v.object({
  names: v.string('Names must be a text', [v.minLength(1, 'Please enter your names.')]),
  email: v.string('Your email must be a text', [v.email('The email address is badly formatted')]),
  subject: v.string('Your subject must be a text', [v.minLength(1, 'Please enter a subject')]),
  message: v.string('Message must be a text', [v.minLength(10, 'Your message must have 10 characters or more')]),
})

type MessageType = v.Input<typeof MessageSchema>

const initialError: Record<keyof MessageType, string> = {
  names: '',
  email: '',
  message: '',
  subject: '',
}

const Contact = () => {
  const [formData, setFormData] = useState<MessageType>({
    names: '',
    email: '',
    message: '',
    subject: '',
  })
  const [errors, setErrors] = useState<Record<keyof MessageType, string>>(initialError)

  const onSendEmail = async (e: FormEvent) => {
    e.preventDefault()
    const result = v.safeParse(MessageSchema, formData)
    if (result.success) {
      const options: EmailOptions = {
        from: formData.email,
        subject: formData.subject,
        html: render(<EmailMessage names={formData.names} senderEmail={formData.email} message={formData.message} />),
      }
      setFormData({ ...formData, names: '', email: '', subject: '', message: '' })
      setErrors(initialError)
      const res = await fetch(`/api`, {
        method: 'POST',
        body: JSON.stringify(options),
      })

      if (res.ok) {
        toast.success('Your message has been sent successfully')
      } else {
        toast.error('Your message has not been sent successfully')
      }
    } else {
      const validationErrors: Record<string, string> = {}
      result.issues.map((issue: v.SchemaIssue) => {
        if (issue?.path) {
          const key = issue?.path[0].key as string
          validationErrors[key] = issue.message
        }
      })
      toast.error('You have supplied one or more wrong information')
      setErrors(validationErrors)
    }
  }
  return (
    <main>
      <Grid variant='inline' className='pt-4 text-red'>
        <CustomToaster />
        {/* <AnimatedText text='Reach Me Out' className='!text-7xl !text-center m-8' /> */}
        <div className='grid grid-cols-8 gap-2 my-12'>
          <div className='w-3/4 relative col-start-3 col-span-4 rounded-xl border shadow p-8 mx-auto mt-4 bg-white'>
            <div className='absolute top-0 -right-3 -z-50 w-[102%] h-[102%] rounded-2xl bg-black' />
            <div className='flex items-center py-2 gap-8'>
              <Image className='left-0 size-16 border-2 rounded-full shadow-sm' src={avatar} alt='avatar' />
              <div className='right-8 flex flex-col items-start justify-center gap-2 text-black/80'>
                <div className='flex items-center text-pretty text-sm font-medium'>
                  <span className='mr-2'>
                    <MdPermPhoneMsg />
                  </span>
                  <span>(581) 663-9937</span>
                </div>
                <div className='flex items-center text-pretty text-sm font-medium'>
                  <span className='mr-2'>
                    <MdEmail />
                  </span>
                  <span>phyntom@gmail.com</span>
                </div>
                <div className='flex items-center text-pretty text-sm font-medium'>
                  <span className='mr-2'>
                    <MdLocationPin />
                  </span>
                  <a href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538' className=''>
                    QC, Canada
                  </a>
                </div>
              </div>
            </div>
            <form className='w-full relative' onSubmit={onSendEmail}>
              <div className='mb-2 text-sm font-medium'>
                <label htmlFor='names' className='block  text-slate-600'>
                  Names
                </label>
                <input
                  type='text'
                  name='names'
                  id='names'
                  placeholder='Enter your names'
                  className='mt-1 p-2 block w-full border border-black/10 rounded-md'
                  value={formData.names}
                  onChange={e => setFormData({ ...formData, names: e.target.value })}
                />
                {errors?.names && <span className='text-red-500 text-xs'>{errors.names}</span>}
              </div>
              <div className='mb-2 text-sm font-medium'>
                <label htmlFor='email' className='block  text-slate-600'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='mt-1 p-2 block w-full border border-black/10 rounded-md'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                {errors?.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
              </div>
              <div className='mb-2 text-sm font-medium'>
                <label htmlFor='subject' className='block  text-slate-600'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  className='mt-1 p-2 block w-full border border-black/10 rounded-md'
                  placeholder='Enter your subject'
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors?.subject && <span className='text-red-500 text-xs'>{errors.subject}</span>}
              </div>
              <div className='mb-2 text-sm font-medium'>
                <label htmlFor='message' className='block  text-slate-600'>
                  Message
                </label>
                <textarea
                  rows={5}
                  cols={10}
                  id='message'
                  className='mt-1 p-2 flex min-h-[60px] w-full rounded-md border border-black/10'
                  placeholder='Please include all information relevant to your issue.'
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
                {errors?.message && <span className='text-red-500 text-xs'>{errors.message}</span>}
              </div>
              <div className='my-2'>
                <button className='mt-1 p-2 block w-1/3 bg-black text-white rounded-xl' type='submit'>
                  <div className='flex items-center justify-center gap-2 text-base font-medium'>
                    <AiOutlineMail />
                    <span>Send message</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </main>
  )
}

export default Contact
