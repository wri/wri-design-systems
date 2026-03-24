# i18n Rollout Plan — WRI Design Systems

> Phases 1 & 2 are **done** (branch `DS-273`).
> This document tracks the remaining work for phases 3 & 4.

---

## Background

The design system uses a **library-agnostic, props-based** approach:

- Each component exposes an optional `labels?: Partial<XxxLabels>` prop.
- App-wide defaults are set via `DesignSystemLocaleProvider` (wraps all children).
- English strings are always the fallback; no breaking changes.
- Resolution order: **component `labels` prop → context → defaults**

See the reference implementation in `CheckboxList` and the infrastructure in `src/lib/i18n/`.

---

## How to migrate a component (checklist per component)

1. **Define `<ComponentName>Labels` type** in `src/lib/i18n/types.ts` — one key per hardcoded string.
2. **Add to `DesignSystemLabels`** in the same file: `ComponentName?: Partial<ComponentNameLabels>`.
3. **Add defaults** in `src/lib/i18n/defaultLabels.ts` under the matching component key.
4. **Add `labels?: Partial<ComponentNameLabels>`** to the component's `Props` type.
5. **Call `useLabels`** at the top of the component: `const l = useLabels('ComponentName', labels)`.
6. **Replace hardcoded strings** with `l.keyName` throughout the component.
7. **Add an i18n story** (see `CheckboxList.stories.tsx` `WithI18nLabels` / `WithI18nContext`).
8. **Update the component README** — add a `## Internationalization (i18n)` section.

---

## Phase 3 — Remaining Components

Components are grouped by implementation complexity.
Run parallel PRs within each tier; each tier can start once the previous is merged.

### Tier A — Simple (1–2 strings, low risk)

| Component | File | Hardcoded strings |
|---|---|---|
| `CloseButton` | `Forms/Actions/CloseButton/index.tsx` | `'Close'` (aria-label fallback) |
| `Toast` | `Status/Toast/index.tsx` | `'Dismiss'` (dismiss button aria-label) |
| `InlineMessage` | `Status/InlineMessage/index.tsx` | `'Note'` (aria-roledescription) |
| `MapPopUp` | `Geospatial/MapPopUp/index.tsx` | `'Close'` (aria-label) |
| `AnalysisWidget` | `DataDisplay/AnalysisWidget/index.tsx` | `'Toggle section'` (aria-label) |
| `Table` | `DataDisplay/Table/index.tsx` | `'Ascending'`, `'Descending'` (sort icon aria-labels) |
| `Button` | `Forms/Actions/Button/index.tsx` | `'Loading'` (aria-label when loading) |

**New label types to add to `src/lib/i18n/types.ts`:**

```ts
export type CloseButtonLabels   = { closeLabel: string }
export type ToastLabels         = { dismissLabel: string }
export type InlineMessageLabels = { roleDescription: string }
export type MapPopUpLabels      = { closeLabel: string }
export type AnalysisWidgetLabels= { toggleSectionLabel: string }
export type TableLabels         = { ascendingLabel: string; descendingLabel: string }
export type ButtonLabels        = { loadingLabel: string }
```

---

### Tier B — Medium (3–5 strings)

| Component | File | Hardcoded strings |
|---|---|---|
| `RadioList` | `Forms/Inputs/RadioList/index.tsx` | `'Required.'`, `'Optional.'`, `'Error: ...'`, `'required'` |
| `Select` | `Forms/Inputs/Select/index.tsx` | `'Select input'`, `' required.'`, `' Disabled.'` |
| `TextInput` | `Forms/Inputs/TextInput/index.tsx` | `'required'`, `' (Optional)'` |
| `NavigationRail` | `Navigation/NavigationRail/index.tsx` | `'Show'`, `'Hide'`, `'Sidebar'` |
| `Navbar` | `Navigation/Navbar/index.tsx` + `NavbarMobile.tsx` | `'Open menu'`, `'Close'`, `'Menu'`, `'Go back'`, `'Close menu'` |
| `LegendItem` | `Geospatial/Legends/LegendItem/index.tsx` | `'Drag and drop'`, `'Up'`, `'Down'`, `'Remove'`, `'About data'` |
| `QualitativeAttribute` | `Geospatial/Legends/QualitativeAttribute/index.tsx` | `'Hide'`, `'Show'` |
| `Toolbar` | `Forms/Actions/Toolbar/index.tsx` | `'Collapse'`, `'Expand'` |

**New label types to add to `src/lib/i18n/types.ts`:**

```ts
export type RadioListLabels        = { requiredLabel: string; optionalLabel: string; errorPrefix: string; requiredSymbolLabel: string }
export type SelectLabels           = { defaultAriaLabel: string; requiredSuffix: string; disabledSuffix: string }
export type TextInputLabels        = { requiredSymbolLabel: string; optionalSuffix: string }
export type NavigationRailLabels   = { showLabel: string; hideLabel: string; sidebarLabel: string }
export type NavbarLabels           = { openMenuLabel: string; closeLabel: string; menuLabel: string; goBackLabel: string; closeMenuLabel: string }
export type LegendItemLabels       = { dragAndDropLabel: string; upLabel: string; downLabel: string; removeLabel: string; aboutDataLabel: string }
export type QualitativeAttrLabels  = { hideLabel: string; showLabel: string }
export type ToolbarLabels          = { collapseLabel: string; expandLabel: string }
```

---

### Tier C — Complex (6+ strings or dynamic/interpolated)

| Component | File | Notes |
|---|---|---|
| `Password` | `Forms/Inputs/Password/index.tsx` | 13 strings: strength labels, requirement messages with `minLength` interpolation, show/hide |
| `Textarea` | `Forms/Inputs/Textarea/index.tsx` | 8 strings: character count messages, all with numeric interpolation (`${minLength}`, `${maxLength}`) |
| `Pagination` | `Navigation/Pagination/index.tsx` | 6 strings including `Page ${page.value}` interpolation |
| `ItemCount` | `DataDisplay/ItemCount/index.tsx` | `'Per Page'`, `` `Showing ${startItem}-${endItem} of ${totalItems}` `` |
| `LayerGroup` | `Geospatial/Layers/LayerGroup/index.tsx` | `` `${getActiveCount} Active` `` |
| `BaseMap` | `Geospatial/BaseMap/index.tsx` | `'Active'` |
| `MapControlsToolbar` | `Forms/Actions/Toolbar/presets/MapControl/index.tsx` | 7 button labels + aria-labels |
| `Search` | `Navigation/Search/index.tsx` | `'Filter'`, `'Search filter'` |
| `StepProgressIndicator` | `Status/StepProgressIndicator/index.tsx` | Dynamic `` `Current Step ${idx}...` `` |

**Special consideration for interpolated strings:**

Components with dynamic values (e.g., `Showing ${start}-${end} of ${total}`) should accept
a render function or a format string pattern to let consumers handle pluralization and
number formatting via their own i18n library:

```ts
// Option A — format function (recommended, most flexible)
export type ItemCountLabels = {
  showingLabel: (start: number, end: number, total: number) => string
  perPageLabel: string
}

// Option B — template string (simpler, less flexible)
export type ItemCountLabels = {
  showingLabel: string  // consumer formats externally and passes result
  perPageLabel: string
}
```

Use Option A for any label that involves numeric interpolation or pluralization.

**New label types for Tier C — partial list:**

```ts
export type PasswordLabels = {
  showLabel: string; hideLabel: string
  showPasswordLabel: string; hidePasswordLabel: string
  strengthLabel: string
  strengthValues: { veryWeak: string; weak: string; medium: string; strong: string; veryStrong: string }
  requirementMet: string; requirementNotMet: string
  minLengthRule: (min: number) => string
  uppercaseRule: string; lowercaseRule: string; numberRule: string; specialCharRule: string
}

export type PaginationLabels = {
  previousLabel: string; nextLabel: string
  previousPageLabel: string; nextPageLabel: string
  paginationLabel: string
  pageLabel: (page: number) => string
}

export type ItemCountLabels = {
  perPageLabel: string
  showingLabel: (start: number, end: number, total: number) => string
}
```

---

## Phase 4 — Documentation & Tooling

### 4.1 — Storybook i18n docs page

Create `src/components/docs/i18n.mdx`:

- Explain the props + context pattern with diagrams
- Full catalog of all translatable strings by component (table per component)
- Integration examples for react-intl, react-i18next, and custom solutions
- Context vs per-component trade-offs

### 4.2 — Export all label types from the public API

Update `src/components/index.ts` to export every `XxxLabels` type as it is added,
so consumers can type their own translation maps without deep imports:

```ts
export type { PasswordLabels, PaginationLabels, ... } from '../lib/i18n'
```

### 4.3 — Optional: ESLint rule

Add a custom ESLint rule (or a `eslint-plugin-no-hardcoded-strings` config) that warns
when new JSX text nodes or `aria-label` strings are introduced in `src/components/`.

```json
// .eslintrc extension
{
  "rules": {
    "no-restricted-syntax": [
      "warn",
      {
        "selector": "JSXAttribute[name.name='aria-label'] > Literal",
        "message": "Hardcoded aria-label detected. Prefer a labels prop or useLabels()."
      }
    ]
  }
}
```

### 4.4 — CHANGELOG entry

Add a `BREAKING CHANGES` notice (there are none) and a `Added` entry documenting
`DesignSystemLocaleProvider`, `labels` prop pattern, and the list of migrated components.

---

## Progress tracker

| Component | Tier | Status |
|---|---|---|
| `CheckboxList` | Reference | ✅ Done (DS-273) |
| `CloseButton` | A | ⬜ |
| `Toast` | A | ⬜ |
| `InlineMessage` | A | ⬜ |
| `MapPopUp` | A | ⬜ |
| `AnalysisWidget` | A | ⬜ |
| `Table` | A | ⬜ |
| `Button` | A | ⬜ |
| `RadioList` | B | ⬜ |
| `Select` | B | ⬜ |
| `TextInput` | B | ⬜ |
| `NavigationRail` | B | ⬜ |
| `Navbar` | B | ⬜ |
| `LegendItem` | B | ⬜ |
| `QualitativeAttribute` | B | ⬜ |
| `Toolbar` | B | ⬜ |
| `Password` | C | ⬜ |
| `Textarea` | C | ⬜ |
| `Pagination` | C | ⬜ |
| `ItemCount` | C | ⬜ |
| `LayerGroup` | C | ⬜ |
| `BaseMap` | C | ⬜ |
| `MapControlsToolbar` | C | ⬜ |
| `Search` | C | ⬜ |
| `StepProgressIndicator` | C | ⬜ |
| Storybook docs page | Phase 4 | ⬜ |
| ESLint rule | Phase 4 | ⬜ |
