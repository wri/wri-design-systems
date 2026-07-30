import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { ToolbarExpandSide } from './types'

const COLLAPSED_SIZE = getThemedSpacing(1200)
export const TOOLBAR_GROUP_GAP = getThemedSpacing(400)
const LABEL_MAX_WIDTH = '20rem'
const EXPAND_DURATION = '0.3s'
const EXPAND_EASING = 'ease'

const reducedMotion = `
  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`

export const toolbarContainerStyles = (
  expandSide: ToolbarExpandSide = 'right',
  autoCollapse = false,
  vertical = false,
) => css`
  position: relative;
  width: ${autoCollapse && !vertical ? '100%' : 'max-content'};
  height: ${autoCollapse && vertical ? '100%' : 'auto'};
  max-width: 100%;
  max-height: 100%;
  overflow: visible;
  ${expandSide === 'left' && !autoCollapse ? 'margin-left: auto;' : ''}
`

export const toolbarGroupsStyles = (
  vertical: boolean,
  expandSide: ToolbarExpandSide = 'right',
  autoCollapse = false,
) => css`
  display: inline-flex;
  flex-direction: ${vertical ? 'column' : 'row'};
  align-items: stretch;
  width: ${autoCollapse && !vertical ? '100%' : 'max-content'};
  height: ${autoCollapse && vertical ? '100%' : 'auto'};
  max-width: 100%;
  max-height: 100%;
  gap: ${TOOLBAR_GROUP_GAP};
  ${expandSide === 'left' && !autoCollapse ? 'margin-left: auto;' : ''}
`

export const toolbarMeasureStyles = (vertical: boolean) => css`
  position: absolute;
  inset: 0 auto auto 0;
  visibility: hidden;
  pointer-events: none;
  display: inline-flex;
  flex-direction: ${vertical ? 'column' : 'row'};
  align-items: stretch;
  gap: ${TOOLBAR_GROUP_GAP};
  width: max-content;
  height: max-content;
  max-width: none;
  max-height: none;
  z-index: -1;

  .toolbar-item-button {
    max-width: none !important;
  }

  .toolbar-item-label {
    overflow: visible !important;
    text-overflow: clip !important;
  }

  .toolbar-item-label-text {
    min-width: max-content;
  }
`

export const toolbarAttachedGroupStyles = (vertical: boolean) => css`
  display: inline-flex;
  flex-direction: ${vertical ? 'column' : 'row'};
  align-items: stretch;
  gap: 0;
  isolation: isolate;
  flex-shrink: 0;
  ${vertical ? 'width: 100%;' : ''}

  ${vertical
    ? `
    & > *:not(:first-child) .toolbar-item-surface {
      margin-top: calc(-1 * ${getThemedBorderWidth(100)});
    }

    & > *:not(:first-child):not(:last-child) .toolbar-item-surface {
      border-radius: 0;
    }

    & > *:first-child:not(:only-child) .toolbar-item-surface {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & > *:last-child:not(:only-child) .toolbar-item-surface {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `
    : `
    & > *:not(:first-child) .toolbar-item-surface {
      margin-left: calc(-1 * ${getThemedBorderWidth(100)});
    }

    & > *:not(:first-child):not(:last-child) .toolbar-item-surface {
      border-radius: 0;
    }

    & > *:first-child:not(:only-child) .toolbar-item-surface {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    & > *:last-child:not(:only-child) .toolbar-item-surface {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `}
`

export const toolbarBaseStyles = (
  showLabel: boolean,
  vertical = false,
  expandSide: ToolbarExpandSide = 'right',
) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  height: ${COLLAPSED_SIZE};
  padding: 0;
  text-align: left;
  color: ${getThemedColor('neutral', 800)};
  position: relative;
  border-radius: ${getThemedRadius(200)};
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  overflow: visible;
  transition: max-width ${EXPAND_DURATION} ${EXPAND_EASING};
  ${reducedMotion}
  width: auto;
  min-width: ${COLLAPSED_SIZE};
  max-width: ${showLabel ? LABEL_MAX_WIDTH : COLLAPSED_SIZE};
  flex-shrink: 0;
  justify-self: stretch;

  ${vertical && !showLabel && expandSide === 'left'
    ? 'align-self: flex-end;'
    : 'align-self: stretch;'}

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &[data-active] {
    color: ${getThemedColor('primary', 700)};
    font-weight: 700;

    svg path {
      fill: ${getThemedColor('primary', 700)};
    }
  }

  &:focus:not(:focus-visible):not([data-focus-visible]) {
    outline: none;
  }

  &:active {
    background-color: transparent !important;
  }

  &:focus-visible,
  &[data-focus-visible] {
    z-index: 3;
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)} !important;
    outline-offset: ${getThemedSpacing(50)};
    background-color: transparent !important;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem !important;
  }

  &:disabled {
    background-color: transparent !important;
    color: ${getThemedColor('neutral', 500)};

    svg path {
      fill: ${getThemedColor('neutral', 500)};
    }

    .toolbar-item-surface {
      background-color: ${getThemedColor('neutral', 300)} !important;
    }
  }
`

export const toolbarItemSurfaceStyles = (
  _showLabel: boolean,
  _vertical = false,
  _expandSide: ToolbarExpandSide = 'right',
) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: ${COLLAPSED_SIZE};
  border-radius: ${getThemedRadius(200)};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  padding: ${getThemedSpacing(200)};
  overflow: hidden;

  .toolbar-item-button:active:not(:disabled) & {
    background-color: ${getThemedColor('neutral', 100)};
  }
`

export const toolbarItemHighlightStyles = (
  showLabel: boolean,
  vertical = false,
  expandSide: ToolbarExpandSide = 'right',
) => css`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: ${getThemedSpacing(800)};
  border-radius: ${getThemedRadius(300)};
  overflow: hidden;
  transition: grid-template-columns ${EXPAND_DURATION} ${EXPAND_EASING};
  ${reducedMotion}

  ${vertical && expandSide === 'left'
    ? `
    grid-template-columns: ${showLabel ? '1fr auto' : '0fr auto'};
    justify-content: end;

    .toolbar-item-icon {
      order: 2;
    }

    .toolbar-item-label {
      order: 1;
    }
  `
    : `
    grid-template-columns: ${showLabel ? 'auto 1fr' : 'auto 0fr'};
  `}

  .toolbar-item-button:hover:not(:disabled) &,
  .toolbar-item-button:active:not(:disabled) & {
    background-color: ${getThemedColor('primary', 300)};
  }
`

export const toolbarItemIconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${getThemedSpacing(800)};
  min-width: ${getThemedSpacing(800)};
  height: ${getThemedSpacing(800)};
  flex-shrink: 0;
`

export const toolbarItemLabelStyles = (
  showLabel: boolean,
  vertical = false,
  expandSide: ToolbarExpandSide = 'right',
) => css`
  display: block;
  min-width: 0;
  overflow: hidden;
  opacity: ${showLabel ? 1 : 0};
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: ${vertical && expandSide === 'left' ? 'right' : 'left'};
  ${vertical && expandSide === 'left'
    ? `padding-left: ${showLabel ? getThemedSpacing(200) : '0'};`
    : `padding-right: ${showLabel ? getThemedSpacing(200) : '0'};`}
  & > .toolbar-item-label-text {
    display: inline-block;
    min-width: min-content;
  }
  transition:
    opacity 0.2s ${EXPAND_EASING} ${showLabel ? '0.05s' : '0s'},
    padding ${EXPAND_DURATION} ${EXPAND_EASING};
  ${reducedMotion}
  pointer-events: ${showLabel ? 'auto' : 'none'};
`

export const toolbarToggleIconStyles = css`
  display: inline-flex;
  transition: transform ${EXPAND_DURATION} ${EXPAND_EASING};
  ${reducedMotion}
`

export const overflowMenuContentStyles = css`
  min-width: 10rem;
  padding: ${getThemedSpacing(100)};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(200)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  overflow: visible !important;
`

export const overflowMenuItemStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(200)};
  width: 100%;
  padding: ${getThemedSpacing(200)};
  border-radius: ${getThemedRadius(200)};
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &[data-active] {
    color: ${getThemedColor('primary', 700)};

    svg path {
      fill: ${getThemedColor('primary', 700)};
    }
  }

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &[data-highlighted] {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );

    &:not(:hover) {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('primary', 700)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }
  }

  &:active,
  &[data-highlighted]:active {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    color: ${getThemedColor('neutral', 600)};

    svg path {
      fill: ${getThemedColor('neutral', 500)};
    }
  }
`
