// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import Button from '../..'
import { GoogleIcon, FacebookIcon, XIcon, MicrosoftIcon } from '../../../../../icons'

type GenericSSOButtonsProps = {
  ariaLabel?: string
  size?: 'default' | 'small'
  onClick?: () => void
}

const Google = ({
  ariaLabel,
  size = 'default',
  onClick,
}: GenericSSOButtonsProps) => (
  <Button
    label='Google'
    leftIcon={<GoogleIcon />}
    aria-label={ariaLabel || 'Google Login'}
    variant='secondary'
    size={size}
    onClick={onClick}
  />
)

const Facebook = ({
  ariaLabel,
  size = 'default',
  onClick,
}: GenericSSOButtonsProps) => (
  <Button
    label='Facebook'
    leftIcon={<FacebookIcon />}
    aria-label={ariaLabel || 'Facebook Login'}
    variant='secondary'
    size={size}
    onClick={onClick}
  />
)

const X = ({
  ariaLabel,
  size = 'default',
  onClick,
}: GenericSSOButtonsProps) => (
  <Button
    label='X'
    leftIcon={<XIcon />}
    aria-label={ariaLabel || 'X Login'}
    variant='secondary'
    size={size}
    onClick={onClick}
  />
)
const Microsoft = ({
  ariaLabel,
  size = 'default',
  onClick,
}: GenericSSOButtonsProps) => (
  <Button
    label='Microsoft'
    leftIcon={<MicrosoftIcon />}
    aria-label={ariaLabel || 'Microsoft Login'}
    variant='secondary'
    size={size}
    onClick={onClick}
  />
)

export const SSOButtons = {
  Google,
  Facebook,
  X,
  Microsoft,
}
