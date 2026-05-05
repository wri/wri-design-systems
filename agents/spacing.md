# Spacing tokens

This package defines spacing primitives as Chakra `spacing` tokens (in `rem`).

Use `getThemedSpacing(token)` where `token` is one of:

- `0` `50` `100` `200` `300` `400` `500` `600` `700` `800` `900`
- `1000` `1100` `1200` `1400` `1600` `2000` `2400` `2800`

```ts
import { getThemedSpacing } from '@worldresources/wri-design-systems'

const pad = getThemedSpacing(400) // "1rem"
```
