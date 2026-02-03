/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react'
import {
  navbarMobileStyles,
  navbarMobileContainerStyles,
  navbarMobileUtilityContainerStyles,
  navbarMobileNavigationContainerStyles,
  navbarMobileActionsContainerStyles,
  navbarMobileNavigationLinkItemStyles,
  navbarMobileNavigationMenuStyles,
  navbarMobileSubmenuStyles,
  navbarMenuActionStyles,
  navbarMobileSubmenuHeaderStyles,
  navbarMobileNavigationLinksContainerStyles,
} from './styles'
import { NavbarNavigationItemsProps, NavbarProps } from './types'
import { ChevronDownIcon, CloseIcon } from '../../icons'
import Button from '../../Forms/Actions/Button'

const NavbarMobile = ({
  theme = 'light',
  navigationSection,
  utilitySection,
  actionsSection,
  linkRouter,
  isOpen,
  setIsOpen,
  pathname,
}: NavbarProps & {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  const [submenu, setSubmenu] = useState<
    NavbarNavigationItemsProps | undefined
  >(undefined)
  const [menuIndex, setMenuIndex] = useState(-1)
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const Link = linkRouter

  return (
    <>
      <div css={navbarMobileStyles(isOpen)}>
        {isOpen && (
          <div css={navbarMobileContainerStyles}>
            <div
              style={{
                overflowY: 'scroll',
                width: '100%',
                height: '100%',
                paddingBottom: '72px',
              }}
            >
              {utilitySection ? (
                <div css={navbarMobileUtilityContainerStyles(theme)}>
                  {utilitySection?.map((utilityChild) => (
                    <div className='ds-utility-item'>{utilityChild}</div>
                  ))}
                </div>
              ) : null}

              {navigationSection ? (
                <div css={navbarMobileNavigationContainerStyles}>
                  {navigationSection.map((item, idx) => {
                    if (item.link) {
                      return (
                        <Link
                          key={item.label}
                          to={item.link}
                          href={item.link}
                          onClick={() => {
                            setSubmenu(undefined)
                            setMenuIndex(-1)
                            setIsOpen(false)
                          }}
                          css={navbarMobileNavigationLinkItemStyles(
                            pathname === item.link,
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    }

                    return (
                      <button
                        key={item.label}
                        css={navbarMobileNavigationMenuStyles}
                        type='button'
                        ref={(el) => {
                          menuButtonRefs.current[idx] = el
                        }}
                        onClick={() => {
                          if (item.items) {
                            setSubmenu(item)
                            setMenuIndex(idx)

                            setTimeout(() => {
                              backButtonRef.current?.focus()
                            }, 100)
                          }
                        }}
                      >
                        {item.label}
                        {item.items ? (
                          <ChevronDownIcon
                            rotate='270'
                            color='var(--chakra-colors-neutral-700)'
                          />
                        ) : null}
                      </button>
                    )
                  })}
                </div>
              ) : null}
            </div>

            {actionsSection ? (
              <div css={navbarMobileActionsContainerStyles}>
                {actionsSection.map((action) => (
                  <Button
                    key={action.ariaLabel}
                    {...action}
                    onClick={(e) => {
                      action?.onClick?.(e)
                      setSubmenu(undefined)
                      setMenuIndex(-1)
                      setIsOpen(false)
                    }}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div css={navbarMobileSubmenuStyles(!!submenu?.items)}>
        {submenu?.items ? (
          <>
            <div css={navbarMobileSubmenuHeaderStyles}>
              <button
                type='button'
                onClick={() => {
                  setSubmenu(undefined)
                  setMenuIndex(-1)
                  menuButtonRefs.current[menuIndex]?.focus()
                }}
                aria-label='Go back'
                css={navbarMenuActionStyles(theme)}
                ref={backButtonRef}
              >
                <ChevronDownIcon
                  rotate='90'
                  color='var(--chakra-colors-neutral-700)'
                />
                {submenu?.label}
              </button>
              <button
                type='button'
                onClick={() => {
                  setSubmenu(undefined)
                  setMenuIndex(-1)
                  setIsOpen(false)
                }}
                aria-label='Close menu'
                css={navbarMenuActionStyles(theme)}
              >
                Close
                <CloseIcon height='16px' width='16px' />
              </button>
            </div>
            <div css={navbarMobileNavigationLinksContainerStyles}>
              {submenu?.items?.map((item) => (
                <Link
                  key={item.label}
                  to={item.link}
                  href={item.link}
                  css={navbarMobileNavigationLinkItemStyles()}
                  onClick={() => {
                    setSubmenu(undefined)
                    setMenuIndex(-1)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default NavbarMobile
