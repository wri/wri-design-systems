# Component README & types.ts Standard

Every component under `src/components/**` documents its props in **two places that must never diverge**:

1. `types.ts` — JSDoc comment on every prop (source of truth for wording)
2. `README.md` — a `## Props` section with markdown table(s), generated from those JSDoc comments

Reference implementation: `src/components/Forms/Inputs/RichTextEditor/README.md` (single-table + supporting types) and `src/components/Forms/Controls/Radio/README.md` (multi-table).

## README structure

````md
# <Component>

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/<category-slug>-<kebab-name>--docs)

[<Component>Demo](https://github.com/wri/wri-design-systems/blob/main/src/components/<Category>/<Name>/<Component>Demo.tsx)

## Import

```tsx
import { X } from '@worldresources/wri-design-systems'
```

## Usage

(minimal, realistic snippet)

```tsx
<X ... />
```

## Props

(see table rules below)

## <Use cases / variations>

(variants, sizes, disabled, presets, … — every example section lives AFTER ## Props)
````

Section order is fixed: **Import → Usage → Props → use cases/variations**. When a component has example/variation sections, they always come AFTER `## Props` — never move `## Props` after them or to the end of the file. The `## Usage` snippet stays minimal; extended examples belong in their own `##` sections after `## Props`.

## Props tables

**Backticked style** (decided): prop names, types, and default values are wrapped in backticks.

```md
## Props

| Prop       | Type                           | Default   | Description                   |
| ---------- | ------------------------------ | --------- | ----------------------------- |
| `children` | `React.ReactNode`              | —         | Quote content                 |
| `justify`  | `'start' \| 'center' \| 'end'` | `'start'` | Aligns the blockquote content |
```

Rules:

- Columns, in order: `Prop | Type | Default | Description`.
- Rows are **alphabetical** by prop name.
- `—` (em dash) in `Default` when the prop has no default.
- Escape pipes inside table cells with `\|`, even inside backticks: `` `'start' \| 'center'` ``.
- Simplify inherited types to their **effective public shape** (e.g. write `string`, not `Omit<ChakraXProps, …>['size']`).
- Descriptions: sentence-case, no trailing period, **verbatim match to the JSDoc comment in `types.ts`**.

### Multi-type components

One table per exported component type, each under its own `###` heading (alphabetical by component name):

```md
## Props

### Radio

| Prop    | Type     | Default | Description         |
| ------- | -------- | ------- | ------------------- |
| `value` | `string` | —       | Value for the radio |

### RadioGroup

| Prop   | Type     | Default | Description              |
| ------ | -------- | ------- | ------------------------ |
| `name` | `string` | —       | Name for the radio group |
```

### Supporting types

Helper types (`ButtonLabels`, `RichTextEditorControlKey`, …) referenced from a Prop cell get a `### Supporting types` subsection at the end of `## Props` — as a list or small table, not a props table. Only include helpers a consumer needs to understand.

## types.ts rules

- Every prop gets a JSDoc comment:
  ```ts
  /** Quote content */
  children: React.ReactNode
  /**
   * Custom minimum height for the editor content area.
   * If omitted, the component size is defined by its container.
   */
  minHeight?: string
  ```
- Single-line `/** … */` for short descriptions; multi-line for longer ones.
- State the default inside the comment when it is non-obvious (e.g. `/** Optional to change the quote bar color */`).
- **Do not change type shapes** when documenting — comments only.

## Scope

- Document custom/public-facing props, plus inherited props the component explicitly relies on or re-exports (e.g. `className`).
- Do not enumerate unrelated inherited Chakra props.
