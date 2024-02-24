'use client'
import React from 'react'
import { motion } from 'framer-motion'

type SocialLinkProps = {
  href: string
  target: string
  className?: string
  children: React.ReactNode
}

const SocialLink = ({ href, target, className, children }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target={target}
      className={`${className} `}
      initial={true}
      whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}

export default SocialLink
