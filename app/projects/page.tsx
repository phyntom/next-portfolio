import AnimatedText from '@/components/AnimatedText'
import Grid from '@/components/Grid'
import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectImg from '../../public/gamehub.png'
import { TbBrandGithub } from 'react-icons/tb'

export const metadata: Metadata = {
  title: 'Portfolio | Projects',
  description: "This is the home page for Aimable's portfolio",
}

type ProjectProps = {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  githubLink: string
}

const FeaturedProject = ({ type, title, summary, img, link, githubLink }: ProjectProps) => {
  return (
    <article className='w-full flex items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl'>
      <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto p-2' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-pink-900 font-medium text-xl'>{type}</span>
        <Link href={link}>
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
      </div>
      <Link href={githubLink} className='text-[64px]'>
        <TbBrandGithub />
      </Link>
      <Link href={link}>Visit Project</Link>
    </article>
  )
}

const Projects = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <Grid variant='block' className='pt-16'>
        <AnimatedText text='Dream. Create. Achieve.' className='m-8 !text-center !text-7xl' />
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-12'>
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
            <FeaturedProject
              type='Web App'
              title='Project 1'
              summary='This is a summary of the project'
              img={projectImg}
              link='/project1'
              githubLink=''
            />
          </div>
          <div className='col-span-6'>
            <FeaturedProject
              type='Web App'
              title='Project 1'
              summary='This is a summary of the project'
              img={projectImg}
              link='/project1'
              githubLink=''
            />
          </div>
        </div>
      </Grid>
    </main>
  )
}

export default Projects
