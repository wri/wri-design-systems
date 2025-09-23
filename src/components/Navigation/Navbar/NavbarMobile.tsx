/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
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
                <div css={navbarMobileUtilityContainerStyles}>
                  {utilitySection?.map((utilityChild) => (
                    <div className='utility-item'>{utilityChild}</div>
                  ))}
                </div>
              ) : null}

              {navigationSection ? (
                <div css={navbarMobileNavigationContainerStyles}>
                  {navigationSection.map((item, idx) => {
                    if (item.link) {
                      return (
                        <button
                          type='button'
                          key={item.label}
                          css={navbarMobileNavigationLinkItemStyles(
                            pathname === item.link,
                          )}
                          onClick={() => {
                            navigate(item.link || '')
                            setSubmenu(undefined)
                            setMenuIndex(-1)
                            setIsOpen(false)
                          }}
                        >
                          {item.label}
                        </button>
                      )
                    }

                    return (
                      <button
                        key={item.label}
                        css={navbarMobileNavigationMenuStyles}
                        type='button'
                        // eslint-disable-next-line no-return-assign
                        ref={(el) => (menuButtonRefs.current[idx] = el)}
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
                    key={action.label}
                    label={action.label}
                    onClick={() => {
                      action?.onClick?.()
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
                css={navbarMenuActionStyles}
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
                css={navbarMenuActionStyles}
              >
                Close
                <CloseIcon height='16px' width='16px' />
              </button>
            </div>
            <div css={navbarMobileNavigationLinksContainerStyles}>
              {submenu?.items?.map((item) => (
                <button
                  type='button'
                  key={item.label}
                  css={navbarMobileNavigationLinkItemStyles()}
                  onClick={() => {
                    navigate(item.link || '')
                    setSubmenu(undefined)
                    setMenuIndex(-1)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default NavbarMobile
