# Typography tokens

This package defines typography primitives as Chakra system tokens (in `rem`).

## Font sizes

Use `getThemedFontSize(token)` where `token` is one of:

- `200` `300` `400` `500` `600` `700` `800` `900` `1000` `1100`

```ts
import { getThemedFontSize } from '@worldresources/wri-design-systems'

const titleSize = getThemedFontSize(700) // "1.5rem"
```

## Line heights

Use `getThemedLineHeight(token)` where `token` is one of:

- `300` `400` `500` `600` `700` `800` `900` `1000` `1100` `1200`

```ts
import { getThemedLineHeight } from '@worldresources/wri-design-systems'

const tight = getThemedLineHeight(400) // "1rem"
```
