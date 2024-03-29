import Logo from '@/components/Logo'
import CustomLink from '@/components/CustomLink'
import { Github, Linkedin, X } from 'lucide-react'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink title='Home' href='/' className='mr-4' />
        <CustomLink title='About' href='/about' className='mx-4' />
        <CustomLink title='Projects' href='/projects' className='mx-4' />
        <CustomLink title='Contact' href='/contact' className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <SocialLink
          href='https://twitter.com/phyntom'
          target={'_blank'}
          className='mr-3'
          arial-label='Link to X account'
        >
          <X />
        </SocialLink>
        <SocialLink
          href='https://www.linkedin.com/in/aimable-ruhumuriza-05492538/'
          arial-label='Link to LinkedIn account'
          target={'_blank'}
          className='mr-3'
        >
          <Linkedin />
        </SocialLink>
        <SocialLink
          href='https://github.com/phyntom'
          arial-label='Link to Github account'
          target={'_blank'}
          className='mr-3'
        >
          <Github />
        </SocialLink>
      </nav>
      <div className='absolute top-2 left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
