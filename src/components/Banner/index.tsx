// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import Button from '../Buttons/Button'
import { InfoIcon } from '../icons'
import {
  InfoWhiteBanner,
  ErrorBanner,
  InfoGreyBanner,
  SuccessBanner,
  WarningBanner,
  BannerTitle,
  BannerCaption,
  BannerHeader,
} from './styled'
import { BannerProps } from './types'

const Banner = ({
  label,
  caption,
  variant,
  size = 'large',
  icon = <InfoIcon height='16px' width='16px' />,
  onActionClick,
  actionLabel,
  isButtonRight,
}: BannerProps) => {
  let StyledBanner = InfoWhiteBanner
  if (variant === 'info-grey') {
    StyledBanner = InfoGreyBanner
  } else if (variant === 'success') {
    StyledBanner = SuccessBanner
  } else if (variant === 'warning') {
    StyledBanner = WarningBanner
  } else if (variant === 'error') {
    StyledBanner = ErrorBanner
  }

  return (
    <StyledBanner
      isButtonRight={isButtonRight}
      size={size}
      aria-roledescription='Note'
    >
      <div>
        <BannerHeader>
          {icon}
          <BannerTitle size={size}>{label}</BannerTitle>
        </BannerHeader>
        <BannerCaption size={size}>{caption}</BannerCaption>
      </div>
      {actionLabel ? (
        <Button
          label={actionLabel}
          variant={
            variant === 'info-white' || variant === 'info-grey'
              ? 'primary'
              : 'secondary'
          }
          size={size === 'large' ? 'default' : 'small'}
          onClick={onActionClick}
        />
      ) : null}
    </StyledBanner>
  )
}

export default Banner
