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

// motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 2, type: 'spring' }}

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <>
      <h2 className='my-8 text-lg font-bold uppercase text-black/75'>Skills</h2>
      <motion.div
        className='flex w-full flex-wrap items-center gap-2'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2, type: 'spring' }}
      >
        {skills.map(skill => (
          <SkillItem
            skill={skill}
            className='rounded-xl border-2 border-black/75 bg-white p-1 text-center text-[1.0rem] font-light text-black transition-all duration-300 ease-in-out hover:border-black/75 hover:bg-white hover:text-black 
            '
            key={skill.id}
          />
        ))}
      </motion.div>
    </>
  )
}

// bg-black text-white text-4xl font-light border-2 border-black/75 rounded-md w-64 text-center p-6
export default SkillsList
