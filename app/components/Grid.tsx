import React from 'react'
import clsx from 'clsx'

type Variants = 'inline' | 'block' | 'flex' | 'grid'
type GridProps = {
  variant: Variants
  className?: string
  children: React.ReactNode
}
const variantStyles: { [key in Variants]: string } = {
  inline: 'inline-block',
  block: 'block',
  flex: 'flex',
  grid: 'grid',
}

const Grid = ({ variant, className, children }: GridProps) => {
  return (
    <div className={clsx('w-full h-full z-0 p-8 md:p-16 lg:p-32', variantStyles[variant], className)}>{children}</div>
  )
}

export default Grid
