/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { forwardRef } from 'react'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { AvatarProps } from './types'
import { UserIcon } from '../../icons'
import { getThemedColor } from '../../../lib/theme'
import { avatarContainerStyles, avatarFallbackStyles } from './styled'
import { useLabels } from '../../../lib/i18n/useLabels'
import Badge from '../Badge'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      name,
      ariaLabel,
      size = 'medium',
      customSize,
      src,
      srcSet,
      onClick,
      notificationCount,
      badgeSize = 'large',
      disabled = false,
      customBackgroundColor = '',
      labels,
    },
    ref,
  ) => {
    const l = useLabels('Avatar', labels)
    const handleClick = () => {
      if (!disabled) {
        onClick?.()
      }
    }

    const hasImage = !!src || !!srcSet
    const isClickable = !!onClick && !disabled
    const hasNotification = !!notificationCount && notificationCount > 0

    const avatar = (
      <ChakraAvatar.Root
        aria-label={ariaLabel || name}
        ref={ref}
        css={avatarContainerStyles(
          size,
          customSize,
          disabled,
          customBackgroundColor,
        )}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            handleClick()
          }
        }}
        role={isClickable ? 'button' : 'img'}
        tabIndex={isClickable ? 0 : undefined}
        aria-disabled={onClick ? disabled : undefined}
      >
        {hasImage && (
          <ChakraAvatar.Image
            src={src}
            srcSet={srcSet}
            alt={ariaLabel || name || 'Avatar image'}
          />
        )}
        {!hasImage && name && (
          <ChakraAvatar.Fallback name={name} css={avatarFallbackStyles} />
        )}

        {!hasImage && !name && (
          <UserIcon
            size='100%'
            style={{
              padding: '15%',
              color: disabled
                ? getThemedColor('neutral', 400)
                : getThemedColor('primary', 800),
            }}
          />
        )}
      </ChakraAvatar.Root>
    )

    if (!hasNotification) {
      return avatar
    }

    return (
      <Badge
        notificationCount={notificationCount}
        size={badgeSize}
        labels={{ unreadMessagesLabel: l.unreadMessagesLabel }}
      >
        {avatar}
      </Badge>
    )
  },
)

export default Avatar
