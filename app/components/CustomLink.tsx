'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type CustomLinkProps = {
  href: string
  target?: string
  className?: string
  title: string
  children?: React.ReactNode
}

function CustomLink({ href, target, className, title, children }: CustomLinkProps) {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <Link href={href} target={target} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block ${
          isActive ? 'w-full' : 'w-0'
        } bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-500`}
      >
        &nbsp;
      </span>
      {children}
    </Link>
  )
}

export default CustomLink
