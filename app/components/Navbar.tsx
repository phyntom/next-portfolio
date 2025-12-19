'use client'
import { useState } from 'react'
import Logo from '@/components/Logo'
import CustomLink from '@/components/CustomLink'
import { Github, Linkedin, X, Menu } from 'lucide-react'
import SocialLink from './SocialLink'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='w-full px-4 md:px-12 lg:px-32 py-4 md:py-8 font-medium flex items-center justify-between relative'>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={toggleMenu}
        className='md:hidden flex flex-col justify-center items-center z-30'
        aria-label='Toggle menu'
      >
        <Menu className='w-6 h-6' />
      </button>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex'>
        <CustomLink title='Home' href='/' className='mr-4' />
        <CustomLink title='About' href='/about' className='mx-4' />
        <CustomLink title='Projects' href='/projects' className='mx-4' />
        <CustomLink title='Contact' href='/contact' className='ml-4' />
      </nav>

      {/* Social Links */}
      <nav className='flex items-center justify-center flex-wrap gap-2'>
        <SocialLink
          href='https://twitter.com/phyntom'
          target={'_blank'}
          className='mr-1 md:mr-3'
          arial-label='Link to X account'
        >
          <X className='w-5 h-5 md:w-6 md:h-6' />
        </SocialLink>
        <SocialLink
          href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538/'
          arial-label='Link to LinkedIn account'
          target={'_blank'}
          className='mr-1 md:mr-3'
        >
          <Linkedin className='w-5 h-5 md:w-6 md:h-6' />
        </SocialLink>
        <SocialLink
          href='https://github.com/phyntom'
          arial-label='Link to Github account'
          target={'_blank'}
          className='mr-1 md:mr-3'
        >
          <Github className='w-5 h-5 md:w-6 md:h-6' />
        </SocialLink>
      </nav>

      {/* Logo */}
      <div className='absolute top-2 left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className='fixed inset-0 bg-black/50 z-20 md:hidden'
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className='fixed left-0 right-0 bottom-0 bg-white z-30 flex flex-col items-center p-8 pt-6 gap-4 shadow-xl rounded-t-3xl md:hidden'
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className='absolute top-4 right-4'
                aria-label='Close menu'
              >
                <X className='w-6 h-6' />
              </button>

              {/* Handle bar indicator */}
              <div className='w-12 h-1 bg-gray-300 rounded-full mb-4' />

              <CustomLink title='Home' href='/' className='text-lg py-2' onClick={toggleMenu} />
              <CustomLink title='About' href='/about' className='text-lg py-2' onClick={toggleMenu} />
              <CustomLink title='Projects' href='/projects' className='text-lg py-2' onClick={toggleMenu} />
              <CustomLink title='Contact' href='/contact' className='text-lg py-2' onClick={toggleMenu} />

              {/* Social Links in Mobile Menu */}
              <div className='flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200 w-full'>
                <SocialLink href='https://twitter.com/phyntom' target='_blank' arial-label='X'>
                  <X className='w-5 h-5' />
                </SocialLink>
                <SocialLink href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538/' target='_blank' arial-label='LinkedIn'>
                  <Linkedin className='w-5 h-5' />
                </SocialLink>
                <SocialLink href='https://github.com/phyntom' target='_blank' arial-label='Github'>
                  <Github className='w-5 h-5' />
                </SocialLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
