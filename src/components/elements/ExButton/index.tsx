import Link from 'next/link'

interface ExButtonProps {
  children: React.ReactNode
  type: 'action' | 'link'
  size?: string
  href?: string // Make href optional
  leftIcon?: any
  rightIcon?: any
  isGradient?: boolean
  isSubmit?: boolean
  onClick?: () => void
  className?: string
}

// Define a conditional type to make href compulsory only when type is 'link'
type ConditionalExButtonProps<T extends 'action' | 'link'> = T extends 'link'
  ? Required<Pick<ExButtonProps, 'href'>>
  : Partial<Pick<ExButtonProps, 'href'>>

const ExButton = ({
  children,
  type,
  href,
  leftIcon,
  className,
  onClick,
  rightIcon,
  isGradient,
  isSubmit,
}: ExButtonProps & ConditionalExButtonProps<ExButtonProps['type']>) => {
  return (
    <>
      {type === 'link' ? (
        <Link href={href!}>
          <button
            className={`ex-button flex gap-2 ${className} ${
              isGradient ? 'gradient-button' : ''
            }`}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </button>
        </Link>
      ) : (
        <button
          type={isSubmit ? 'submit' : 'button'}
          onClick={onClick}
          className={`ex-button flex gap-2 ${className} ${
            isGradient ? 'gradient-button' : ''
          }`}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </button>
      )}
    </>
  )
}

export default ExButton
