import React from 'react'

const allowedProps = new Set([
  'aria-label',
  'aria-labelledby',
  'aria-describedby',
  'aria-disabled',
  'aria-expanded',
  'aria-haspopup',
  'aria-controls',
  'aria-pressed',
  'aria-invalid',
  'aria-required',
  'aria-live',
  'aria-current',
  'aria-selected',
  'aria-modal',
  'aria-roledescription',
  'role',
  'id',
  'type',
  'disabled',
  'tabIndex',
  'className',
  'alt',
  'name',
  'value',
  'onChange',
  'checked',
  'defaultChecked',
  'placeholder',
  'multiple',
  'min',
  'max',
  'step',
  'minLength',
  'maxLength',
  'size',
  'htmlFor',
  'data-group-item',
  'data-last',
  'data-has-mark-label',
  'style',
])

const cleanProps = (props: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => allowedProps.has(key) || key.startsWith('data-'),
    ),
  )

const el = (
  tag: keyof JSX.IntrinsicElements,
  extraProps: Record<string, unknown> = {},
) =>
  function create({ children, ...rest }: any, ref?: any) {
    return React.createElement(
      tag,
      { ref, ...extraProps, ...cleanProps(rest) },
      children,
    )
  }

export const createChakraMock = () => {
  const { Fragment } = React

  return {
    createSystem: () => ({ tokens: { getVar: () => '' } }),
    defaultConfig: {},
    Box: React.forwardRef(el('div')),
    Group: React.forwardRef(el('div', { role: 'group' })),
    Stack: React.forwardRef(el('div')),
    HStack: React.forwardRef(el('div')),
    Portal: ({ children }: any) => React.createElement(Fragment, {}, children),
    Spinner: el('span', { role: 'status' }),
    Button: React.forwardRef(el('button', { type: 'button' })),
    CloseButton: React.forwardRef(el('button', { type: 'button' })),
    Icon: React.forwardRef(el('span', { 'aria-hidden': true })),
    Tag: {
      Root: React.forwardRef(el('span')),
      Label: el('span'),
      StartElement: el('span'),
      EndElement: el('span'),
    },
    Input: React.forwardRef(el('input', { type: 'text' })),
    Avatar: {
      Root: React.forwardRef(el('div')),
      Image: React.forwardRef(el('img')),
      Fallback: el('span'),
    },
    Alert: {
      Root: React.forwardRef(el('div')),
      Indicator: el('span', { 'aria-hidden': true }),
      Content: el('div'),
      Title: el('p'),
      Description: el('div'),
    },
    Textarea: React.forwardRef(el('textarea')),
    Field: {
      Root: el('fieldset'),
      Label: el('label'),
      RequiredIndicator: el('span', { 'aria-hidden': true }),
      HelperText: el('div'),
      ErrorText: el('div', { role: 'status', 'aria-live': 'polite' }),
    },
    Checkbox: {
      Root: el('label'),
      HiddenInput: el('input', { type: 'checkbox' }),
      Control: el('span'),
      Label: el('span'),
    },
    CheckboxCard: {
      Root: el('label'),
      HiddenInput: el('input', { type: 'checkbox' }),
      Control: el('span'),
      Content: el('div'),
      Label: el('span'),
      Description: el('div'),
      Indicator: el('span', { 'aria-hidden': true }),
      Addon: el('div'),
    },
    CheckboxGroup: el('div', { role: 'group' }),
    RadioGroup: {
      Root: el('div', { role: 'radiogroup' }),
      Item: el('label'),
      ItemHiddenInput: el('input', { type: 'radio' }),
      ItemIndicator: el('span', { 'aria-hidden': true }),
      ItemText: el('span'),
    },
    RadioCard: {
      Root: el('div'),
      Item: el('label'),
      ItemHiddenInput: el('input', { type: 'radio' }),
      ItemControl: el('span'),
      ItemIndicator: el('span', { 'aria-hidden': true }),
      ItemAddon: el('div'),
    },
    Slider: {
      Root: React.forwardRef(el('div', { role: 'group' })),
      Control: el('div'),
      Track: el('div'),
      Range: el('div'),
      Thumb: el('div'),
      HiddenInput: el('input', { type: 'range', 'aria-hidden': true }),
      MarkerGroup: el('div'),
      Marker: el('div'),
      MarkerIndicator: el('span', { 'aria-hidden': true }),
    },
    Switch: {
      Root: el('label'),
      HiddenInput: el('input', { type: 'checkbox' }),
      Label: el('span'),
      Control: el('span'),
      Thumb: el('span'),
      ThumbIndicator: el('span', { 'aria-hidden': true }),
    },
    Combobox: {
      Root: el('div'),
      Control: el('div'),
      Input: React.forwardRef(el('input', { type: 'text' })),
      IndicatorGroup: el('div'),
      ClearTrigger: el('button', { type: 'button' }),
      Trigger: el('button', { type: 'button' }),
      Positioner: el('div'),
      Content: el('div'),
      Empty: el('div'),
      Item: el('div'),
      ItemIndicator: el('span', { 'aria-hidden': true }),
    },
    Menu: {
      Root: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Trigger: React.forwardRef(
        ({ children, asChild, ...rest }: any, ref: any) =>
          asChild
            ? React.createElement(React.Fragment, {}, children)
            : React.createElement(
                'button',
                { ref, type: 'button', ...cleanProps(rest) },
                children,
              ),
      ),
      Positioner: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Content: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement(
          'div',
          { ref, role: 'menu', ...cleanProps(rest) },
          children,
        ),
      ),
      Item: ({ children, ...rest }: any) =>
        React.createElement(
          'div',
          { role: 'menuitem', ...cleanProps(rest) },
          children,
        ),
      ItemCommand: ({ children, ...rest }: any) =>
        React.createElement('span', cleanProps(rest), children),
      ItemText: ({ children, ...rest }: any) =>
        React.createElement('span', cleanProps(rest), children),
      ItemGroupLabel: ({ children, ...rest }: any) =>
        React.createElement('div', cleanProps(rest), children),
      ItemGroup: ({ children, ...rest }: any) =>
        React.createElement('div', cleanProps(rest), children),
      Separator: () => React.createElement('div', { role: 'separator' }),
      Arrow: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      ArrowTip: () => null,
      TriggerItem: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement(
          'button',
          { ref, type: 'button', ...cleanProps(rest) },
          children,
        ),
      ),
    },
    Tooltip: {
      Root: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Trigger: React.forwardRef(({ children, ...rest }: any, ref: any) =>
        React.createElement('span', { ref, ...cleanProps(rest) }, children),
      ),
      Content: ({ children, ...rest }: any) =>
        React.createElement(
          'div',
          { role: 'tooltip', ...cleanProps(rest) },
          children,
        ),
      Positioner: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      Arrow: ({ children }: any) =>
        React.createElement(React.Fragment, {}, children),
      ArrowTip: () => null,
    },
    Select: {
      Root: el('div'),
      Label: el('label'),
      Trigger: React.forwardRef(el('button', { type: 'button' })),
      HiddenSelect: el('select', { 'aria-hidden': true }),
      ValueText: ({ children, placeholder }: any) =>
        React.createElement(
          'span',
          null,
          typeof children === 'function'
            ? children([])
            : children || placeholder,
        ),
      Context: ({ children }: any) =>
        typeof children === 'function'
          ? children({
              selectedItems: [],
              collection: { stringifyItem: (item: any) => item.label },
            })
          : children,
      Content: el('div'),
      Item: el('div'),
      ItemText: el('span'),
      ItemIndicator: el('span', { 'aria-hidden': true }),
      Positioner: el('div'),
      Separator: el('div', { role: 'separator' }),
      ItemGroup: el('div'),
      ItemGroupLabel: el('div'),
      ItemCommand: el('span'),
      ClearTrigger: el('button', { type: 'button' }),
      Indicator: el('span', { 'aria-hidden': true }),
      IndicatorGroup: el('div'),
      Control: el('div'),
    },
    For: ({ each, children }: any) =>
      React.createElement(
        React.Fragment,
        {},
        (each || []).map((item: any, index: number) => children(item, index)),
      ),
    createListCollection: ({ items }: any) => ({ items }),
    useFilter: () => ({ contains: () => true }),
    useListCollection: ({ initialItems }: any) => ({
      collection: { items: initialItems },
      filter: () => undefined,
    }),
  }
}
