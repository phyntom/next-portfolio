import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import { Metadata } from 'next'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectImg from '../../public/gamehub.webp'
import sneakerImg from '../../public/sneaker-city.webp'
import ycDirectory from '../../public/yc-directory.webp'
import { FaGithub } from 'react-icons/fa'
import AnimatedImage from '@/components/AnimatedImage'
export const metadata: Metadata = {
  title: 'Portfolio | Projects',
  description: "This is the home page for Aimable's portfolio",
}

type ProjectProps = {
  type: string
  title: string
  summary?: string
  img: string | StaticImageData
  link: string
  githubLink: string
}

const FeaturedProject = ({ type, title, summary, img, link, githubLink }: ProjectProps) => {
  return (
    <article className='w-full relative flex flex-col lg:flex-row items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl p-6 md:p-8 lg:p-12'>
      <div className='absolute top-0 -right-2 md:-right-3 -z-10 w-[102%] md:w-[101%] h-[102%] md:h-[103%] rounded-[1.5rem] md:rounded-[2.5rem] bg-black rounded-br-3xl' />
      <Link href={link} className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <AnimatedImage
          src={img}
          title={title}
          className='w-full h-auto'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='w-full lg:w-1/2 flex flex-col items-start justify-between mt-6 lg:mt-0 lg:pl-6'>
        <span className='text-pink-900 font-medium text-base md:text-lg lg:text-xl'>{type}</span>
        <Link href={link} className='hover:underline underline-offset-3'>
          <h2 className='my-2 w-full text-left text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-sm md:text-base text-black/80'>{summary}</p>
        <div className='mt-4 flex items-center gap-4'>
          <Link href={githubLink} className='text-3xl md:text-4xl lg:text-[48px]'>
            <FaGithub />
          </Link>
          <Link
            href={link}
            className='rounded-md bg-black text-white p-2 px-4 text-sm md:text-base hover:bg-white hover:border-solid border-2 border-black hover:text-black transition-all duration-300 ease-in-out hover:shadow-2xl'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, summary, img, link, githubLink }: ProjectProps) => {
  return (
    <article className='w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-4 md:p-6'>
      <div className='absolute top-0 -right-2 md:-right-3 -z-10 w-[102%] md:w-[101%] h-[102%] md:h-[103%] rounded-[1.5rem] md:rounded-[2.5rem] bg-black rounded-br-3xl' />
      <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg shadow-md'>
        <AnimatedImage
          src={img}
          title={title}
          className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-pink-900 font-medium text-base md:text-lg lg:text-xl'>{type}</span>
        <Link href={link} className='hover:underline underline-offset-3'>
          <h2 className='my-2 w-full text-left text-xl md:text-2xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-sm md:text-base text-black/80 line-clamp-3'>{summary}</p>
        <div className='w-full mt-4 flex items-center justify-between'>
          <Link href={link} className='rounded-lg text-sm md:text-base lg:text-lg font-semibold hover:underline'>
            Visit Project
          </Link>
          <Link href={githubLink} className='text-3xl md:text-4xl'>
            <FaGithub />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <Grid variant='block' className='pt-4'>
        <AnimatedText text='Dream. Create. Achieve.' className='!mb-8 md:!mb-12 !text-center text-2xl md:text-3xl xl:text-7xl' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
          {/* Featured Project - Full Width */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3'>
            <FeaturedProject
              type='Featured Project'
              title='Gamehub Application'
              summary='Gamehub project is game discovery web app that helps you find new and interesting games that you can play. You can search fir games by platform,genre and more.'
              img={projectImg}
              link='/project1'
              githubLink='https://github.com/phyntom/game-hub'
            />
          </div>
          
          {/* Regular Projects */}
          <div className='col-span-1'>
            <Project
              type='Full Stack MERN'
              title='Sneaker City'
              summary='Sneaker City is a brand new online-only store for sneaker enthusiasts'
              img={sneakerImg}
              link='/project1'
              githubLink=''
            />
          </div>
          <div className='col-span-1'>
            <Project
              type='YC Combinator Startup'
              title='YC Directory'
              summary='A directory listing all companies that have gone through the Y Combinator startup accelerator program.'
              img={ycDirectory}
              link='https://yc-directory-green-alpha.vercel.app/'
              githubLink='https://github.com/phyntom/yc-directory'
            />
          </div>
          <div className='col-span-1'>
            <Project
              type='Featured Project'
              title='Gamehub Application'
              summary='Gamehub project is game discovery web app that helps you find new and interesting games that you can play. You can search fir games by platform,genre and more.'
              img={projectImg}
              link='/project1'
              githubLink='https://github.com/phyntom/game-hub'
            />
          </div>
        </div>
      </Grid>
    </main>
  )
}

export default Projects
