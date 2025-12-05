/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  navbarStyles,
  navbarContainerStyles,
  navbarLeftContainerStyles,
  navbarRightContainerStyles,
  navbarLeftLinkStyles,
  navbarRightItemStyles,
  navbarActionsContainerStyles,
  navbarLeftItemsContainerStyles,
  navbarSecondBarStyles,
  navbarMenuActionStyles,
  navbarLogoContainerStyles,
} from './styles'
import { NavbarProps } from './types'
import NavbarMobile from './NavbarMobile'
import { CloseIcon, MenuIcon } from '../../icons'
import Button from '../../Forms/Actions/Button'
import Menu from '../../Forms/Actions/Menu'

const MIN_INNER_WIDTH = 1023 // 1080 // 1180
const MAX_INNER_WIDTH = 1440 // 1250
const NAVBAR_PADDING = 32
const NAVBAR_MIN_HEIGHT = 48
const NAVBAR_MAX_HEIGHT = 96

const Navbar = ({
  logo,
  linkRouter,
  pathname,
  navigationSection,
  utilitySection,
  actionsSection,
  maxWidth,
  fixed,
  onNavbarHeightChange,
  backgroundColor,
}: NavbarProps) => {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [divsCollided, setDivsCollided] = useState(false)
  const [divsCollidedAt, setDivsCollidedAt] = useState(-1)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window?.innerWidth <= MIN_INNER_WIDTH,
  )
  const [isOpen, setIsOpen] = useState(false)

  const Link = linkRouter

  const onResize = useCallback(() => {
    if (rightRef.current && leftRef.current && logoRef.current) {
      const leftRect = leftRef.current.getBoundingClientRect()
      const rightRect = rightRef.current.getBoundingClientRect()
      const logoRect = logoRef.current.getBoundingClientRect()
      const divsWidth = rightRect.width + leftRect.width + NAVBAR_PADDING

      if (
        window.innerWidth <= MIN_INNER_WIDTH ||
        window.innerWidth <= divsCollidedAt
      ) {
        onNavbarHeightChange?.(NAVBAR_MAX_HEIGHT)
        setDivsCollided(true)
      } else if (
        window.innerWidth > MIN_INNER_WIDTH &&
        window.innerWidth <= MAX_INNER_WIDTH
      ) {
        if (leftRect.right >= rightRect.left) {
          onNavbarHeightChange?.(NAVBAR_MAX_HEIGHT)
          setDivsCollided(true)
          setDivsCollidedAt(window.innerWidth)
        } else if (window.innerWidth > divsCollidedAt) {
          onNavbarHeightChange?.(NAVBAR_MIN_HEIGHT)
          setDivsCollided(false)
          setDivsCollidedAt(-1)
        }
      } else {
        onNavbarHeightChange?.(NAVBAR_MIN_HEIGHT)
        setDivsCollided(false)
        setDivsCollidedAt(-1)
      }

      if (divsCollided) {
        if (
          window.innerWidth <= MIN_INNER_WIDTH ||
          logoRect.right >= rightRect.left
        ) {
          setIsMobile(true)
          onNavbarHeightChange?.(NAVBAR_MIN_HEIGHT)
        } else {
          setIsMobile(false)
          onNavbarHeightChange?.(NAVBAR_MAX_HEIGHT)
        }
      }
    }
  }, [divsCollidedAt, divsCollided])

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    <nav css={navbarStyles(divsCollided && !isMobile, fixed, backgroundColor)}>
      <div css={navbarContainerStyles(divsCollided && !isMobile, maxWidth)}>
        <div
          css={navbarLeftContainerStyles(divsCollided && !isMobile)}
          ref={leftRef}
        >
          {logo ? (
            <div ref={logoRef} css={navbarLogoContainerStyles}>
              {logo}
            </div>
          ) : null}
          <div css={navbarLeftItemsContainerStyles(divsCollided)}>
            {navigationSection?.map((item) => {
              if (item.link) {
                return (
                  <Link
                    key={item.label}
                    to={item.link}
                    href={item.link}
                    css={navbarLeftLinkStyles(pathname === item.link)}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <Menu
                  key={item.label}
                  label={item.label}
                  items={item.items || []}
                />
              )
            })}
          </div>
        </div>
        <div css={navbarRightContainerStyles} ref={rightRef}>
          {!isMobile ? (
            <>
              <div css={navbarRightContainerStyles}>
                {utilitySection?.map((utilityChild, idx) => (
                  <div css={navbarRightItemStyles(divsCollided)} key={idx}>
                    {utilityChild}
                  </div>
                ))}
              </div>
              {actionsSection ? (
                <div css={navbarActionsContainerStyles(divsCollided)}>
                  {actionsSection.map((action) => (
                    <Button key={action.ariaLabel} {...action} />
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Open menu'
              css={navbarMenuActionStyles}
            >
              {isOpen ? 'Close' : 'Menu'}
              {isOpen ? (
                <CloseIcon height='16px' width='16px' />
              ) : (
                <MenuIcon height='16px' width='16px' />
              )}
            </button>
          )}
        </div>
      </div>

      {divsCollided && !isMobile ? (
        <div css={navbarSecondBarStyles}>
          {navigationSection?.map((item) => {
            if (item.link) {
              return (
                <Link
                  key={item.label}
                  to={item.link}
                  href={item.link}
                  css={navbarLeftLinkStyles(pathname === item.link)}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <Menu
                key={item.label}
                label={item.label}
                items={item.items || []}
              />
            )
          })}
        </div>
      ) : null}

      {isMobile ? (
        <NavbarMobile
          navigationSection={navigationSection}
          utilitySection={utilitySection}
          actionsSection={actionsSection}
          linkRouter={linkRouter}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pathname={pathname}
        />
      ) : null}
    </nav>
  )
}

export default Navbar
