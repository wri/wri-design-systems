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

| Prop                    | Type                                          | Default   | Description                                                                                                                              |
| ----------------------- | --------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `customTrigger`         | `React.ReactNode`                             | —         | Custom trigger element that replaces the default button trigger                                                                          |
| `defaultSelectedValues` | `string[]`                                    | `[]`      | Values that are checked by default on first render                                                                                       |
| `fontSize`              | `string`                                      | `'1rem'`  | Font size of the trigger label                                                                                                           |
| `groups`                | `{ title: string; items: MenuItemProps[] }[]` | —         | Items rendered as titled groups, separated by dividers                                                                                   |
| `hideArrow`             | `boolean`                                     | `false`   | Hides the decorative arrow on the menu content                                                                                           |
| `items`                 | `MenuItemProps[]`                             | —         | Flat list of menu items rendered before any groups                                                                                       |
| `label`                 | `string`                                      | —         | Text of the default trigger button; also the fallback aria-label of the menu content                                                     |
| `labels`                | `Partial<MenuLabels>`                         | —         | Override internal UI labels for internationalization support                                                                             |
| `menuWidth`             | `string \| 'content'`                         | `'14rem'` | Width of the menu content                                                                                                                |
| `onSelect`              | `(value: string) => void`                     | —         | Called with the value of the selected item                                                                                               |
| `selectionMode`         | `'multiple' \| 'radio'`                       | —         | When set, enables checkable items. 'multiple' allows many items checked at once; 'radio' allows only one. Omit for a non-selectable menu |
| `theme`                 | `'light' \| 'dark'`                           | `'light'` | Color theme of the trigger button                                                                                                        |

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
  customTrigger={<Button label='Open Menu' variant='secondary' />}
/>
```

## Hide Arrow

```tsx
<Menu
  label='Formatting menu'
  hideArrow
  items={[
    { label: 'Heading 1', value: 'h1' },
    { label: 'Heading 2', value: 'h2' },
    { label: 'Paragraph', value: 'p' },
  ]}
/>
```
