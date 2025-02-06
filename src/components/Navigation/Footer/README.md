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

```ts
type FooterProps = {
  children: React.ReactNode
  label?: string
  fixed?: boolean
  filled?: boolean
  maxWidth?: number
}
```

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
