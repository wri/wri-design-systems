import styled from '@emotion/styled'
import { Tabs } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'

export const TabBarContainer = styled.div<{
  variant: string
}>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;

  ${({ variant }) =>
    variant === 'view' &&
    `
    border: 1px solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 200)};
    border-radius: 2px;
    padding: 4px;
  `}
`

export const DefaultTab = styled(Tabs.Trigger)`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  &:focus-visible {
    box-shadow: none;
  }
`

export const TabBarItemPanel = styled(DefaultTab)`
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 600)};

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 300)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    color: ${getThemedColor('neutral', 400)};

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;
    }
  }
`

export const TabBarItemView = styled(DefaultTab)`
  height: 32px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 600)};

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0px 1px 2px 0px #0000000d;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border: 1px solid ${getThemedColor('neutral', 300)};
    box-shadow: 0px 1px 2px 0px #0000000d;
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
      border: 1px solid ${getThemedColor('neutral', 300)};
      box-shadow: 0px 2px 4px -2px #0000001a;
      box-shadow: 0px 4px 6px -1px #0000001a;
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
      border: 1px solid ${getThemedColor('neutral', 300)};
      box-shadow: 0px 2px 4px -2px #0000001a;
      box-shadow: 0px 4px 6px -1px #0000001a;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    color: ${getThemedColor('neutral', 400)};
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;
    }
  }
`
