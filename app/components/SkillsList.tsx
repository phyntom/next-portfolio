'use client'
import React from 'react'
import type { Skill } from '../data/skills'
import { motion } from 'framer-motion'

const SkillItem = ({ skill, className }: { skill: Skill; className: string }) => {
  return (
    <motion.div className={`${className}`} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
      <div className='flex items-center justify-center gap-3'>
        <span>{skill?.icon}</span>
        <span>{skill.name}</span>
      </div>
    </motion.div>
  )
}

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <>
      <h2 className='my-8 text-lg font-bold uppercase text-black/75'>Skills</h2>
      <div className='flex w-full flex-wrap items-center justify-around gap-4'>
        {skills.map(skill => (
          <SkillItem
            skill={skill}
            className='w-full cursor-pointer rounded-xl border-2 border-black/75 bg-black p-6 text-center text-[1.5rem] font-light text-white transition-all duration-300 ease-in-out hover:border-black/75 hover:bg-white hover:text-black sm:w-1/2 md:w-1/3 lg:w-1/4'
            key={skill.id}
          />
        ))}
      </div>
    </>
  )
}

// bg-black text-white text-4xl font-light border-2 border-black/75 rounded-md w-64 text-center p-6
export default SkillsList
