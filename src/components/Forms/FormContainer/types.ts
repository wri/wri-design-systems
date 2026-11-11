import { ReactNode } from 'react'

export type FormContainerProps = {
  /** Label text rendered above the children */
  label?: ReactNode
  /** Error message rendered above the children with an error bar on the left */
  error?: string
  /** Form controls rendered inside the container */
  children: ReactNode
}
