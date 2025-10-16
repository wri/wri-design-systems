import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { NavbarProps } from './types'

export const navbarStyles = (
  isFullHeight?: boolean,
  fixed?: NavbarProps['fixed'],
) => css`
  height: ${isFullHeight ? '96px' : '48px'};
  width: 100%;
  background-color: ${getThemedColor('neutral', 100)};
  position: ${fixed ? 'sticky' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 102;
  border-bottom: 1px solid ${getThemedColor('neutral', 400)};
`
export const navbarSecondBarStyles = css`
  height: 48px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 100)};
  border-bottom: 1px solid ${getThemedColor('neutral', 400)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
  padding: 8px 16px;
`

export const navbarContainerStyles = (
  isBlack: boolean,
  maxWidth?: NavbarProps['maxWidth'],
) => css`
  height: 48px;
  width: 100%;
  max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
  background-color: ${isBlack ? getThemedColor('neutral', 800) : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 8px 16px;
`

export const navbarLeftContainerStyles = (isBlackBackground: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  color: ${getThemedColor('neutral', isBlackBackground ? 100 : 900)};
`

export const navbarLogoContainerStyles = css`
  outline: none;
  a {
    &:focus-visible {
      border-radius: 0px;
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 4px;
      outline-style: solid;
      outline-width: 2px;
    }
  }
`

export const navbarLeftItemsContainerStyles = (divsCollided: boolean) => css`
  display: ${divsCollided ? 'none' : 'flex'};
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
`

export const navbarLeftLinkStyles = (active?: boolean) => css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  padding: 2px 12px;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
  }

  ${active
    ? css`
        font-weight: 700;
        color: ${getThemedColor('accessible', 'controls-on-neutral-lights')};
      `
    : ''}
`

export const navbarRightContainerStyles = css`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const navbarRightItemStyles = (divsCollided?: boolean) => css`
  height: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', divsCollided ? 100 : 900)};
  border-left: 1px solid ${getThemedColor('neutral', divsCollided ? 700 : 300)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

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
  gap: 20px;
  padding-left: 16px;
  border-left: 1px solid ${getThemedColor('neutral', divsCollided ? 700 : 300)};
`

export const navbarMenuActionStyles = css`
  background-color: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  color: ${getThemedColor('neutral', 800)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 4px;
    outline-style: solid;
    outline-width: 2px;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileStyles = (isOpen?: boolean) => css`
  position: absolute;
  top: 48px;
  right: 0;
  height: calc(100vh - 48px);
  width: ${isOpen ? '100%' : '0px'};
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  transition: width 0.5s ease-in-out;
`

export const navbarMobileContainerStyles = css`
  height: 100%;
  width: 100%;
`

export const navbarMobileUtilityContainerStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};

  .utility-item {
    padding: 12px 16px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: -12px;
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
  padding: 12px 16px;
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
    width: calc(100% - 4px);
    padding: 12px 16px;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileNavigationMenuStyles = css`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    width: calc(100% - 4px);
    padding: 12px 16px;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const navbarMobileSubmenuStyles = (isOpen?: boolean) => css`
  position: absolute;
  top: 0px;
  right: 0;
  height: 100vh;
  width: ${isOpen ? '100%' : '0px'};
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: width 0.5s ease-in-out;
`

export const navbarMobileSubmenuHeaderStyles = css`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${getThemedColor('neutral', 400)};
  position: relative;
  top: 0;
  left: 0;
`

export const navbarMobileActionsContainerStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 72px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  button {
    width: calc(48% - 24px);
  }
`
