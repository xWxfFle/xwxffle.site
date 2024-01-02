import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>

const Paragraph = ({ className, children, ...rest }: ParagraphProps) => {
  return (
    <p className={clsx('mb-4 text-xl', className)} {...rest}>
      {children}
    </p>
  )
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

const Heading = ({ className, children, ...rest }: HeadingProps) => {
  return (
    <h3
      className={clsx('text-2xl font-semibold font-nunito', className)}
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
