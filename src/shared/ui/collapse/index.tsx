import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
}

const Paragraph = ({ className, style, children, ...rest }: ParagraphProps) => {
  return (
    <p className={clsx('mb-4 text-xl', className)} style={style} {...rest}>
      {children}
    </p>
  )
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

const Heading = ({ className, style, children, ...rest }: HeadingProps) => {
  return (
    <h3
      className={clsx('text-2xl font-semibold font-nunito', className)}
      style={style}
      {...rest}
    >
      {children}
    </h3>
  )
}

export const Typography = {
  Paragraph,
  Heading,
}
