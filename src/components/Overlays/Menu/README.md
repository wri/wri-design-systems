# Menu

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/overlays-menu--docs)

[MenuDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Overlays/Menu/MenuDemo.tsx)

## Import

```tsx
import { Menu } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      value: 'label-1-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      value: 'label-1-2',
    },
  ]}
  onSelect={(value) => console.log('onSelect', value)}
/>
```

## Props

### Menu

| Prop                    | Type                                          | Default | Description                                                                                                                                                                                                  |
| ----------------------- | --------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                | `boolean`                                     | `false` | Highlights the trigger as the current section (e.g. when the current route matches one of the menu items), like the active Navbar link. Applies to the `'navbarItem'` trigger and sets `aria-current='true'` |
| `customTrigger`         | `React.ReactNode`                             | —       | Custom trigger element that replaces the default button trigger                                                                                                                                              |
| `defaultSelectedValues` | `string[]`                                    | `[]`    | Values that are checked by default on first render                                                                                                                                                           |
| `groups`                | `{ title: string; items: MenuItemProps[] }[]` | —       | Items rendered as titled groups, separated by dividers                                                                                                                                                       |

| `items` | `MenuItemProps[]` | — | Flat list of menu items rendered before any groups |
| `label` | `string` | — | Text of the default trigger button; also the fallback aria-label of the menu content |
| `labels` | `Partial<MenuLabels>` | — | Override internal UI labels for internationalization support |
| `menuWidth` | `string \| 'content'` | `'14rem'` | Width of the menu content |
| `onSelect` | `(value: string) => void` | — | Called with the value of the selected item |
| `selectionMode` | `'multiple' \| 'radio'` | — | When set, enables checkable items. 'multiple' allows many items checked at once; 'radio' allows only one. Omit for a non-selectable menu |
| `size` | `'default' \| 'small'` | `'default'` | Size of the default trigger button; also controls its font size |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme of the trigger button; use `'dark'` when the Menu sits on a dark background (e.g. a dark Navbar). Applies to the `'navbarItem'` trigger |
| `triggerLeftIcon` | `React.ReactNode` | — | Icon rendered before the default trigger label; the right chevron is fixed |
| `triggerVariant` | `'primary' \| 'secondary' \| 'borderless' \| 'navbarItem'` | `'secondary'` | Visual style of the default trigger button. 'primary', 'secondary', and 'borderless' delegate to the existing Button variants; 'navbarItem' renders the legacy navigation trigger |

### MenuItem

| Prop        | Type                  | Default   | Description                                                                             |
| ----------- | --------------------- | --------- | --------------------------------------------------------------------------------------- |
| `caption`   | `string`              | —         | Secondary text shown under the label                                                    |
| `children`  | `React.ReactNode`     | —         | Custom item content; replaces the default label, caption, and icons layout              |
| `command`   | `string`              | —         | Keyboard shortcut shown next to the label                                               |
| `disabled`  | `boolean`             | —         | Disables the item                                                                       |
| `endIcon`   | `React.ReactNode`     | —         | Icon rendered at the end of the item; replaced by a check icon when the item is checked |
| `label`     | `string`              | —         | Primary text of the item                                                                |
| `link`      | `string`              | —         | URL that turns the item into a link                                                     |
| `menuWidth` | `string \| 'content'` | `'14rem'` | Width of the submenu opened from this item                                              |
| `onClick`   | `() => void`          | —         | Called when the item is selected                                                        |
| `startIcon` | `React.ReactNode`     | —         | Icon rendered before the item label                                                     |
| `submenu`   | `MenuItemProps[]`     | —         | Nested items rendered in a submenu                                                      |
| `value`     | `string`              | `label`   | Value passed to `onSelect` when the item is selected                                    |

### Supporting types

```ts
type MenuLabels = {
  /** Fallback aria-label for the menu content when no trigger label is provided. Default: "Menu" */
  menuAriaLabel: string
  /** Builds aria-label for submenu content. Default: (label) => `${label} submenu` */
  submenuAriaLabel: (label: string) => string
  /** Prefix used for command aria-label text. Default: "Shortcut" */
  shortcutPrefix: string
}
```

## Commands

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      command: '⌘E',
      value: 'value-2-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      command: '⌘E',
      value: 'value-2-2',
    },
  ]}
/>
```

## WithIcons

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      startIcon: <PlaceholderIcon />,
      value: 'value-3-1',
    },
    {
      label: 'Label',
      caption: 'Caption',
      startIcon: <PlaceholderIcon />,
      value: 'value-3-2',
    },
    {
      label: 'Label',
      caption: 'Caption',
      endIcon: <PlaceholderIcon />,
      value: 'value-3-3',
    },
  ]}
/>
```

## WithGroups

```tsx
<Menu
  label='Open Menu'
  groups={[
    {
      title: 'Group 1',
      items: [
        {
          label: 'Label',
          value: 'value-4-1',
        },
        {
          label: 'Label',
          value: 'value-4-2',
        },
      ],
    },
    {
      title: 'Group 2',
      items: [
        {
          label: 'Label',
          value: 'value-4-3',
        },
        {
          label: 'Label',
          value: 'value-4-4',
        },
        {
          label: 'Label',
          value: 'value-4-5',
        },
      ],
    },
  ]}
/>
```

## WithSubmenu

```tsx
<Menu
  label='Open Menu'
  items={[
    {
      label: 'Label',
      value: 'label-5-1',
    },
    {
      label: 'Label',
      value: 'value-5-2',
      submenu: [
        {
          label: 'Label',
          value: 'value-5-2-1',
        },
        {
          label: 'Label',
          caption: 'Caption',
          value: 'value-5-2-2',
        },
      ],
    },
  ]}
/>
```

## Custom Trigger

The default trigger is the menu button (`triggerVariant` defaults to `'secondary'`). Any element can replace it via `customTrigger` — for example a fully custom pill trigger:

```tsx
<Menu
  label='With Custom Trigger'
  items={[
    {
      label: 'Label',
      value: 'label-4-1',
    },
    {
      label: 'Label',
      value: 'label-4-2',
      submenu: [
        {
          label: 'Label',
          value: 'label-4-2-1',
        },
        {
          label: 'Label',
          value: 'label-4-2-2',
        },
      ],
    },
    {
      label: 'Label',
      value: 'label-4-3',
    },
  ]}
  onSelect={(value) => console.log('onSelect', value)}
  customTrigger={
    <button
      type='button'
      aria-label='Open custom trigger menu'
      css={pillTriggerStyles}
    >
      <PlaceholderIcon />
      Open Menu
    </button>
  }
/>
```

## Trigger Variants

```tsx
<Menu label='Open Menu' triggerVariant='primary' items={items} />
<Menu label='Open Menu' triggerVariant='secondary' items={items} />
<Menu label='Open Menu' triggerVariant='borderless' items={items} />
<Menu label='Open Menu' triggerVariant='navbarItem' items={items} />
<Menu label='Open Menu' size='small' items={items} />
<Menu label='Open Menu' triggerLeftIcon={<PlaceholderIcon />} items={items} />
```

### Navbar Item

`triggerVariant='navbarItem'` renders the legacy navigation trigger: the transparent plain button with a hover background and a rotating chevron that used to be the Menu's built-in trigger. It is intended for navigation bars where a bordered button is too heavy. Set `theme='dark'` when the trigger sits on a dark background so the label and chevron render in a light color. Set `active` to highlight the trigger as the current section when the current route matches one of the menu items — the Navbar does this automatically.

```tsx
<Menu label='Open Menu' triggerVariant='navbarItem' items={items} />
<Menu label='Open Menu' triggerVariant='navbarItem' theme='dark' items={items} />
<Menu label='Open Menu' triggerVariant='navbarItem' active items={items} />
```
