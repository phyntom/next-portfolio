'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

const FramerImage = motion(Image)

type AnimateImageProps = {
  src: string | StaticImageData
  title: string
  className?: string
  sizes?: string
}

const AnimatedImage = (props: AnimateImageProps) => {
  const { src, title, className, ...rest } = props
  return <FramerImage src={src} alt={title} {...rest} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
}

export default AnimatedImage
