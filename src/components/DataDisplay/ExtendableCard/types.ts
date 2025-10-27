import React, { ReactElement } from 'react'

export interface ExtendableCardProps {
  children: React.ReactNode
  header: React.ReactNode
  footer?: React.ReactNode
}
