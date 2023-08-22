import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
  children: ReactNode
}

const Root = ({ title, children, className, ...rest }: RootProps) => (
  <div
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={0}
    className={clsx(
      'collapse-plus rounded-box collapse my-4 bg-base-100 shadow-xl',
      className,
    )}
    {...rest}
  >
    <div className="collapse-title inline-flex items-center text-xl">
      <h2>{title}</h2>
    </div>
    <div className="collapse-content">{children}</div>
  </div>
)

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

export const Collapse = {
  Root,
  Paragraph,
  Heading,
}
