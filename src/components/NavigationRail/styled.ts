import styled from '@emotion/styled'
import { Tabs, Button } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'

export const NavigationRailContainer = styled.div`
  width: 64px;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavigationRailTab = styled(Tabs.Trigger)`
  width: 64px;
  height: 64px;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 1px 1px 0px 0px;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 2px solid transparent;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 200)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: none;
  }

  .tab-label p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: ${getThemedColor('neutral', 600)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border-left: 2px solid ${getThemedColor('secondary', 500)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
      box-shadow: none;
    }

    .tab-label {
      p {
        font-weight: 700;
        color: ${getThemedColor('neutral', 700)};
      }

      svg {
        path {
          fill: ${getThemedColor('neutral', 700)};
        }
      }
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)} !important;

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)} !important;
    }

    .tab-label {
      p {
        color: ${getThemedColor('neutral', 400)};
      }

      svg {
        path {
          fill: ${getThemedColor('neutral', 400)};
        }
      }
    }
  }
`

export const NavigationRailTabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${getThemedColor('neutral', 600)};
    }
  }
`

export const NavigationRailToggle = styled(Button)`
  width: 64px;
  height: 64px;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 1px 1px 0px 0px;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 2px solid transparent;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: none;
  }

  .tab-label p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: ${getThemedColor('neutral', 600)};
  }
`
