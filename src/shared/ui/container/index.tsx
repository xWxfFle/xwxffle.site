import clsx from 'clsx'
import { CSSProperties, forwardRef, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: 'section' | 'header' | 'div'
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export const Container = forwardRef<HTMLDivElement, Props>(
  ({ as: Element = 'div', className, style, children, ...rest }, outerRef) => {
    return (
      <Element
        ref={outerRef}
        className={clsx(
          'mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row',
          className,
        )}
        style={style}
        {...rest}
      >
        {children}
      </Element>
    )
  },
)
