import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  title: string
  subtitle: string
  className?: string
  children: ReactNode
  scene?: ReactNode
}

export const ContentBlock = ({
  title,
  children,
  scene,
  subtitle,
  className,
}: Props) => (
  <>
    <div
      className={clsx(
        'h-full w-full p-6 text-xl md:my-12 md:mb-40 lg:w-2/6',
        className,
      )}
    >
      <p className="mb-4 font-rammeto text-xl uppercase">{subtitle}</p>
      <h2 className="mb-4 text-4xl font-bold leading-tight">{title}</h2>
      {children}
    </div>
    {scene && (
      <div className="h-96 w-full px-6 md:my-12  lg:w-2/6">{scene}</div>
    )}
  </>
)
