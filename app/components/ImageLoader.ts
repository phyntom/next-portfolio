'use client'

import type { ImageLoaderProps } from 'next/image'

const ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const profileId = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/${profileId}/image/upload/v1710275668/${src}?${params.join(',')}}`
}

export default ImageLoader
