# Footer

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/story/navigation-footer--footer)

[FooterDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Footer/FooterDemo.tsx)

## Import

```tsx
import { Footer } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Footer>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```

## Props

| Prop              | Type                | Default                          | Description                                                                                                                |
| ----------------- | ------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children`        | `React.ReactNode`   | —                                | Footer content, typically legal links rendered in the center of the footer                                                 |
| `label`           | `string`            | `'© World Resources Institute'` | Copyright label text rendered with the current year appended                                                               |
| `fixed`           | `boolean`           | —                                | Sticks the footer to the bottom of the viewport when true, otherwise it is absolutely positioned at the bottom of the page |
| `filled`          | `boolean`           | —                                | Applies a neutral background color to the footer when true                                                                 |
| `maxWidth`        | `number \| string`  | `'100%'`                         | Maximum width of the footer content container, numbers resolve to spacing-scale rem values                                 |
| `additionalLogos` | `React.ReactNode[]` | —                                | Additional logo nodes displayed next to the WRI logo                                                                       |

## Footer

```tsx
<Footer>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```

## Filled

```tsx
<Footer filled>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```

## Fixed

```tsx
<Footer fixed>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```

## MaxWidth

```tsx
<Footer maxWidth={1440}>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```

## With Additional Logos

```tsx
<Footer
  maxWidth={1440}
  filled
  fixed
  additionalLogos={[
    <img src='/partner-logo-1.svg' alt='Partner Logo 1' height='32px' />,
    <img src='/partner-logo-2.svg' alt='Partner Logo 2' height='32px' />,
  ]}
>
  <a
    href='https://www.wri.org/about/privacy-policy'
    target='_blank'
    rel='noreferrer'
  >
    Privacy policy
  </a>
  <a
    href='https://www.wri.org/about/wri-data-platforms-tos'
    target='_blank'
    rel='noreferrer'
  >
    Terms of service
  </a>
</Footer>
```
