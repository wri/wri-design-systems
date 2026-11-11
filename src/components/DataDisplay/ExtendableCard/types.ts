import React, { ReactElement } from 'react'

export interface ExtendableCardProps {
  /** Card content shown when the card is expanded */
  children: React.ReactNode
  /** Clickable header rendered as the card trigger */
  header: React.ReactNode
  /** Optional footer content rendered below the card body */
  footer?: React.ReactNode
}
