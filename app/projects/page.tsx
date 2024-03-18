import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectImg from '../../public/gamehub.png'
import sneakerImg from '../../public/sneaker-city.png'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
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
    <article className='w-full relative flex items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl p-12'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <AnimatedImage
          src={img}
          title={title}
          className='w-full h-auto'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-pink-900 font-medium text-xl'>{type}</span>
        <Link href={link} className='hover:underline underline-offset-3'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black/80'>{summary}</p>
        <div className='mt-2 flex items-center gap-2'>
          <Link href={githubLink} className='text-[48px]'>
            <FaGithub />
          </Link>
          <Link
            href={link}
            className='ml-2 rounded-md bg-black text-white p-2 hover:bg-white hover:border-solid border-2 border-black hover:text-black transition-all duration-300 ease-in-out hover:shadow-2xl'
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
    <article className='w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg shadow-md'>
        <AnimatedImage
          src={img}
          title={title}
          className='w-full h-auto'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-pink-900 font-medium text-xl'>{type}</span>
        <Link href={link} className='hover:underline underline-offset-3'>
          <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} className='rounded-lg text-lg font-semibold'>
            Visit Project
          </Link>
          <Link href={githubLink} className='text-[48px]'>
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
        <AnimatedText text='Dream. Create. Achieve.' className='!m-8 !text-center text-2xl md:text-3xl xl:text-7xl' />
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-start-2 col-span-10'>
            <FeaturedProject
              type='Featured Project'
              title='Gamehub Application'
              summary='Gamehub project is game discovery web app that helps you find new and interesting games that you can play. You can search fir games by platform,genre and more.'
              img={projectImg}
              link='/project1'
              githubLink='https://github.com/phyntom/game-hub'
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Full Stack MERN'
              title='Sneaker City'
              summary='Sneaker City is a brand new online-only store for sneaker enthusiasts'
              img={sneakerImg}
              link='/project1'
              githubLink=''
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Web App'
              title='Project 1'
              summary='This is a summary of the project'
              img={projectImg}
              link='/project1'
              githubLink=''
            />
          </div>
          <div className='col-start-2 col-span-10'>
            <FeaturedProject
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
