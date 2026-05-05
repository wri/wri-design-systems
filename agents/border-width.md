# Border width tokens

This package defines border width primitives as Chakra `borderWidths` tokens.

Use `getThemedBorderWidth(token)` where `token` is one of:

- `100` `200` `300` `400`

```ts
import { getThemedBorderWidth } from '@worldresources/wri-design-systems'

const thin = getThemedBorderWidth(100) // "0.0625rem"
```
