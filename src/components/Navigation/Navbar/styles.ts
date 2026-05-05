import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'
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
    border-bottom: ${getThemedBorderWidth(100)} solid
      ${getThemedColor('neutral', 400)};
  `
}
export const navbarSecondBarStyles = (
  theme?: NavbarProps['theme'],
  isCondensed?: boolean,
) => css`
  height: ${isCondensed ? getThemedSpacing(700) : getThemedSpacing(1200)};
  width: 100%;
  background-color: ${theme === 'dark'
    ? getThemedColor('neutral', 800)
    : getThemedColor('neutral', 100)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${theme === 'dark'
      ? getThemedColor('neutral', 800)
      : getThemedColor('neutral', 400)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  padding: ${isCondensed
    ? 0
    : `${getThemedSpacing(200)} ${getThemedSpacing(400)}`};
`

export const navbarContainerStyles = (
  isBlack: boolean,
  maxWidth?: NavbarProps['maxWidth'],
  isCondensed?: boolean,
) => css`
  height: ${isCondensed ? getThemedSpacing(700) : getThemedSpacing(1200)};
  width: 100%;
  max-width: ${maxWidth ? resolveSizeValue(maxWidth) : '100%'};
  background-color: ${isBlack ? getThemedColor('neutral', 800) : 'transparent'};
  display: flex;
  align-items: ${isCondensed ? 'start' : 'center'};

  justify-content: space-between;
  margin: 0 auto;
  padding: ${isCondensed
    ? 0
    : `${getThemedSpacing(200)} ${getThemedSpacing(400)}`};
`

export const navbarLeftContainerStyles = (
  isBlackBackground: boolean,
  isCondensed: boolean,
) => css`
  display: flex;
  margin: ${isCondensed ? '-0.0625rem' : '0rem'};
  justify-content: flex-start;
  gap: ${getThemedSpacing(300)};
  color: ${getThemedColor('neutral', isBlackBackground ? 100 : 900)};
`

export const navbarLogoContainerStyles = css`
  outline: none;

  a {
    &:focus-visible {
      border-radius: 0rem;
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: ${getThemedSpacing(100)};
      outline-style: solid;
      outline-width: ${getThemedSpacing(50)};
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
  font-size: ${isCondensed ? getThemedFontSize(300) : getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${theme === 'dark'
    ? getThemedColor('neutral', 200)
    : getThemedColor('neutral', 900)};
  padding: ${getThemedSpacing(50)} ${getThemedSpacing(300)};

  &:hover {
    background-color: ${theme === 'dark'
      ? 'default'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
  }

  ${active
    ? css`
        font-weight: 700;
        color: ${getThemedColor('accessible', 'controls-on-neutral-lights')};
      `
    : ''}
`

export const navbarRightContainerStyles = (isCondensed?: boolean) => css`
  height: ${isCondensed ? getThemedSpacing(700) : getThemedSpacing(1200)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const navbarRightItemStyles = (divsCollided?: boolean) => css`
  height: 100%;
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', divsCollided ? 100 : 900)};
  border-left: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', divsCollided ? 700 : 300)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${getThemedSpacing(300)};

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
  gap: ${getThemedSpacing(500)};
  padding-left: ${getThemedSpacing(400)};
  border-left: ${getThemedBorderWidth(100)} solid
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
  font-size: ${isCondensed ? getThemedFontSize(300) : getThemedFontSize(400)};
  color: ${getThemedColor('neutral', theme === 'dark' ? 100 : 800)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getThemedSpacing(200)};

  &:hover {
    background-color: ${theme === 'dark'
      ? 'default'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(100)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileStyles = (
  isOpen?: boolean,
  isCondensed?: boolean,
) => css`
  position: absolute;
  top: ${isCondensed ? getThemedSpacing(700) : getThemedSpacing(1200)};
  right: 0;
  height: calc(
    100vh - ${isCondensed ? getThemedSpacing(700) : getThemedSpacing(1200)}
  );
  width: ${isOpen ? '100%' : '0rem'};
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${getThemedSpacing(400)};
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
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};

  .ds-utility-item {
    padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
    width: 100%;
    height: ${getThemedSpacing(1200)};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      height: ${getThemedSpacing(1200)};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: -${getThemedSpacing(300)};
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
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
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
    width: calc(100% - ${getThemedSpacing(100)});
    padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileNavigationMenuStyles = css`
  width: 100%;
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    width: calc(100% - ${getThemedSpacing(100)});
    padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
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
  height: ${getThemedSpacing(1200)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${getThemedSpacing(400)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 400)};
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
  gap: ${getThemedSpacing(300)};

  button {
    width: calc(48% - 1.5rem);
  }
`
