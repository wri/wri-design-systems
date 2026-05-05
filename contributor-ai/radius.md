# Radius tokens

This package defines border radius primitives as Chakra `radii` tokens.

Use `getThemedRadius(token)` where `token` is one of:

- `100` `200` `300` `400` `500` `600` `700` `800` `900`

```ts
import { getThemedRadius } from '@worldresources/wri-design-systems'

const cardRadius = getThemedRadius(500) // "0.5rem"
const pillRadius = getThemedRadius(900) // "9999px"
```
