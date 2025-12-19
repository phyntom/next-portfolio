'use client'
import React from 'react'
import { motion } from 'framer-motion'

type SocialLinkProps = {
  href: string
  target: string
  className?: string
  arialLabel?: string
  children: React.ReactNode
}

const SocialLink = ({ href, target, className, arialLabel, children }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target={target}
      className={`${className} `}
      whileHover={{ rotate: 180, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      aria-label={arialLabel}
    >
      {children}
    </motion.a>
  )
}

export default SocialLink
