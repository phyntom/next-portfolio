import error from 'next/error'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { size } from 'valibot'

const CustomToaster = () => {
  return (
    <Toaster
      toastOptions={{
        duration: 2000,
        position: 'top-right',
        icon: <IoIosNotificationsOutline className='text-xl' />,
        success: {
          iconTheme: {
            primary: 'white',
            secondary: 'white',
          },
          style: {
            background: 'green',
            color: 'white',
          },
        },
        error: {
          iconTheme: {
            primary: 'white',
            secondary: 'white',
          },
          style: {
            background: 'rgb(220 38 38)',
            color: 'white',
          },
        },
      }}
    />
  )
}

export default CustomToaster
