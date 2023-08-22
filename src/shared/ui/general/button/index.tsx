import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface SharedProps {
  size?: ButtonSize
  variant?: ButtonVariant
  color?: ButtonColor
  fluid?: boolean
  disabled?: boolean
  loadingText?: ReactNode
  icon?: ReactNode
}

const createDataset = ({
  disabled = false,
  size = 'md',
  variant = 'solid',
  color = 'primary',
  fluid = false,
}: SharedProps) => ({
  'data-disabled': disabled,
  'data-size': size,
  'data-color': color,
  'data-variant': variant,
  'data-fluid': fluid,
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, children, icon, fluid, variant, size, color, ...rest } =
      props

    const dataset = createDataset(props)

    return (
      <button
        ref={forwardedRef}
        className={clsx('p-4', className)}
        {...dataset}
        {...rest}
      />
    )
  },
)
