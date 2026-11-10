# Blockquote

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-blockquote--docs)

[BlockquoteDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/Blockquote/BlockquoteDemo.tsx)

## Import

```tsx
import { Blockquote } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Blockquote>
  Quoted content rendered inside a semantic blockquote element.
</Blockquote>
```

## Props

| Prop      | Type                           | Default         | Description                                         |
| --------- | ------------------------------ | --------------- | --------------------------------------------------- |
| children  | React.ReactNode                | —               | Quote content                                       |
| cite      | React.ReactNode                | —               | Optional citation source rendered below the quote   |
| className | string                         | —               | Additional className applied to the blockquote root |
| color     | string                         | `secondary/300` | Quote bar color                                     |
| icon      | React.ReactNode                | —               | Icon rendered instead of the quote bar              |
| justify   | `'start' \| 'center' \| 'end'` | `'start'`       | Aligns the blockquote content                       |


## With citation

```tsx
<Blockquote cite='Author Name'>
  Quoted content rendered inside a semantic blockquote element.
</Blockquote>
```

## Custom bar color

```tsx
<Blockquote color='red'>
  Quoted content rendered inside a semantic blockquote element.
</Blockquote>
```

## With icon

Renders an icon instead of the quote bar.

```tsx
<Blockquote icon={<InfoIcon />}>
  Quoted content rendered inside a semantic blockquote element.
</Blockquote>
```

## Justify

```tsx
<Blockquote justify='center'>
  Quoted content rendered inside a semantic blockquote element.
</Blockquote>
```
