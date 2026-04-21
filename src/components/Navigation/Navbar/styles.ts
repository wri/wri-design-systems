import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { resolveSizeValue } from '../../../lib/sizing'
import { NavbarProps } from './types'

export const navbarStyles = (
  isFullHeight?: boolean,
  fixed?: NavbarProps['fixed'],
  backgroundColor?: NavbarProps['backgroundColor'],
  theme?: NavbarProps['theme'],
  isCondensed?: boolean,
) => {
  let maxHeight = '3rem'
  if (isFullHeight) {
    maxHeight = '6rem'
  } else if (isCondensed) {
    maxHeight = '1.75rem'
  }

  return css`
    max-height: ${maxHeight};
    width: 100%;
    background-color: ${backgroundColor ??
    (theme === 'dark'
      ? getThemedColor('neutral', 800)
      : getThemedColor('neutral', 100))};
    position: ${fixed ? 'sticky' : 'absolute'};
    top: 0;
    left: 0;
    z-index: 102;
    border-bottom: 0.0625rem solid ${getThemedColor('neutral', 400)};
  `
}
export const navbarSecondBarStyles = (
  theme?: NavbarProps['theme'],
  isCondensed?: boolean,
) => css`
  height: ${isCondensed ? '1.75rem' : '3rem'};
  width: 100%;
  background-color: ${theme === 'dark'
    ? getThemedColor('neutral', 800)
    : getThemedColor('neutral', 100)};
  border-bottom: 0.0625rem solid
    ${theme === 'dark'
      ? getThemedColor('neutral', 800)
      : getThemedColor('neutral', 400)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem;
  padding: ${isCondensed ? '0rem' : '0.5rem 1rem'};
`

export const navbarContainerStyles = (
  isBlack: boolean,
  maxWidth?: NavbarProps['maxWidth'],
  isCondensed?: boolean,
) => css`
  height: ${isCondensed ? '1.75rem' : '3rem'};
  width: 100%;
  max-width: ${maxWidth ? resolveSizeValue(maxWidth) : '100%'};
  background-color: ${isBlack ? getThemedColor('neutral', 800) : 'transparent'};
  display: flex;
  align-items: ${isCondensed ? 'start' : 'center'};

  justify-content: space-between;
  margin: 0 auto;
  padding: ${isCondensed ? '0rem' : '0.5rem 1rem'};
`

export const navbarLeftContainerStyles = (
  isBlackBackground: boolean,
  isCondensed: boolean,
) => css`
  display: flex;
  margin: ${isCondensed ? '-0.0625rem' : '0rem'};
  justify-content: flex-start;
  gap: 0.75rem;
  color: ${getThemedColor('neutral', isBlackBackground ? 100 : 900)};
`

export const navbarLogoContainerStyles = css`
  outline: none;

  a {
    &:focus-visible {
      border-radius: 0rem;
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 0.25rem;
      outline-style: solid;
      outline-width: 0.125rem;
    }
  }
`

export const navbarLeftItemsContainerStyles = (divsCollided: boolean) => css`
  display: ${divsCollided ? 'none' : 'flex'};
  align-items: center;
  justify-content: flex-start;
  gap: 0rem;
`

export const navbarLeftLinkStyles = (
  active?: boolean,
  theme?: NavbarProps['theme'],
  isCondensed?: boolean,
) => css`
  font-size: ${isCondensed ? '0.875rem' : '1rem'};
  line-height: 1.5rem;
  font-weight: 400;
  color: ${theme === 'dark'
    ? getThemedColor('neutral', 200)
    : getThemedColor('neutral', 900)};
  padding: 0.125rem 0.75rem;

  &:hover {
    background-color: ${theme === 'dark'
      ? 'default'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    outline-style: solid;
    outline-width: 0.125rem;
  }

  ${active
    ? css`
        font-weight: 700;
        color: ${getThemedColor('accessible', 'controls-on-neutral-lights')};
      `
    : ''}
`

export const navbarRightContainerStyles = (isCondensed?: boolean) => css`
  height: ${isCondensed ? '1.75rem' : '3rem'};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const navbarRightItemStyles = (divsCollided?: boolean) => css`
  height: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', divsCollided ? 100 : 900)};
  border-left: 0.0625rem solid
    ${getThemedColor('neutral', divsCollided ? 700 : 300)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;

  ${divsCollided
    ? css`
        .chakra-menu__trigger {
          &:hover {
            background-color: ${getThemedColor('primary', 700)};
          }
        }
      `
    : ''}
`

export const navbarActionsContainerStyles = (divsCollided: boolean) => css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  padding-left: 1rem;
  border-left: 0.0625rem solid
    ${getThemedColor('neutral', divsCollided ? 700 : 300)};
`

export const navbarMenuActionStyles = (
  theme: NavbarProps['theme'] = 'light',
  isCondensed?: boolean,
) => css`
  background-color: none;
  border: none;
  cursor: pointer;
  padding: 0rem;
  font-size: ${isCondensed ? '0.875rem' : '1rem'};
  color: ${getThemedColor('neutral', theme === 'dark' ? 100 : 800)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${theme === 'dark'
      ? 'default'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.25rem;
    outline-style: solid;
    outline-width: 0.125rem;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileStyles = (
  isOpen?: boolean,
  isCondensed?: boolean,
) => css`
  position: absolute;
  top: ${isCondensed ? '1.75rem' : '3rem'};
  right: 0;
  height: calc(100vh - ${isCondensed ? '1.75rem' : '3rem'});
  width: ${isOpen ? '100%' : '0rem'};
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  transition: width 0.5s ease-in-out;
`

export const navbarMobileContainerStyles = css`
  height: 100%;
  width: 100%;
`

export const navbarMobileUtilityContainerStyles = (
  theme: NavbarProps['theme'],
) => css`
  background-color: ${theme === 'dark'
    ? getThemedColor('neutral', 800)
    : getThemedColor('neutral', 200)};
  border-bottom: 0.0625rem solid ${getThemedColor('neutral', 300)};

  .ds-utility-item {
    padding: 0.75rem 1rem;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: -0.75rem;
    }
  }
`

export const navbarMobileNavigationContainerStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
`

export const navbarMobileNavigationLinksContainerStyles = css`
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
`

export const navbarMobileNavigationLinkItemContainerStyles = css``

export const navbarMobileNavigationLinkItemStyles = (active?: boolean) => css`
  display: inline-block;
  width: 100%;
  padding: 0.75rem 1rem;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;
  cursor: pointer;

  ${active
    ? css`
        font-weight: 700;
        color: ${getThemedColor('accessible', 'controls-on-neutral-lights')};
      `
    : ''}

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    width: calc(100% - 0.25rem);
    padding: 0.75rem 1rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    outline-style: solid;
    outline-width: 0.125rem;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileNavigationMenuStyles = css`
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    width: calc(100% - 0.25rem);
    padding: 0.75rem 1rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    outline-style: solid;
    outline-width: 0.125rem;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileSubmenuStyles = (isOpen?: boolean) => css`
  position: absolute;
  top: 0rem;
  right: 0;
  height: 100vh;
  width: ${isOpen ? '100%' : '0rem'};
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: width 0.5s ease-in-out;
`

export const navbarMobileSubmenuHeaderStyles = css`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.0625rem solid ${getThemedColor('neutral', 400)};
  position: relative;
  top: 0;
  left: 0;
`

export const navbarMobileActionsContainerStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4.5rem;
  width: 100%;
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  button {
    width: calc(48% - 1.5rem);
  }
`
