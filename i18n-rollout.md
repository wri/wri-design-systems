# i18n Low-Level Design — WRI Design Systems

> **Status:** Phases 1 & 2 complete (branch `DS-273`). Phase 3 in progress (branch `DS-274`).
> **Last updated:** April 9, 2026

---

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Implemented Infrastructure](#3-implemented-infrastructure)
4. [Label Type Classification](#4-label-type-classification)
5. [Migration Procedure](#5-migration-procedure)
6. [Task Definitions — Phase 3](#6-task-definitions--phase-3)
7. [Task Definitions — Phase 4](#7-task-definitions--phase-4)
8. [Progress Tracker](#8-progress-tracker)
9. [Appendix](#9-appendix)

---

## 1. Overview

### 1.1 Problem

The `@worldresources/wri-design-systems` library contains ~80+ hardcoded English strings across 26 components — `aria-label` values, button text, status messages, and interpolated templates. Consumers building multilingual applications cannot translate these internal strings.

### 1.2 Solution

A **library-agnostic, props-based i18n layer** that:

- Exposes an optional `labels?: Partial<XxxLabels>` prop on every component with internal strings.
- Provides a `DesignSystemLocaleProvider` context for app-wide label overrides.
- Ships English defaults — zero config needed for English-only apps.
- **No runtime i18n library dependency.** Consumers pre-translate strings with their own solution (react-intl, react-i18next, custom) and pass them in.

### 1.3 Design Principles

| Principle                 | Detail                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Zero breaking changes** | All labels are optional with English defaults. Existing consumers are unaffected.               |
| **Type safety**           | Every label key is typed — `string` for a11y attributes, `ReactNodeLabel` for visual-only text. |
| **3-tier resolution**     | Component prop → context → default. Most specific wins.                                         |
| **No i18n runtime**       | We don't bundle react-intl, FormatJS, or any ICU runtime. Consumers own their i18n stack.       |
| **Incremental rollout**   | Components are migrated individually; each migration is a self-contained, reviewable unit.      |

### 1.4 Scope

| In Scope                                                       | Out of Scope                                                                            |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| All hardcoded strings in 26 components                         | RTL layout (handled by CSS, not this system)                                            |
| `aria-label`, `aria-roledescription`, `placeholder` attributes | Date/number formatting (consumer responsibility)                                        |
| Visible button text, status messages, headings                 | Pluralization rules (consumers use their own ICU lib)                                   |
| Interpolated templates (character counts, pagination)          | Component prop labels (e.g., `<TextInput label="Email">`) — already consumer-controlled |

---

## 2. Architecture

### 2.1 File Structure

```
src/lib/i18n/
├── types.ts            # All XxxLabels types + DesignSystemLabels aggregate + ReactNodeLabel alias
├── defaultLabels.ts    # English fallback values (one entry per migrated component)
├── LocaleProvider.tsx  # React context provider + internal useLocaleContext hook
├── useLabels.ts        # Internal hook — 3-tier merge logic
└── index.ts            # Barrel exports (public API surface)
```

### 2.2 Resolution Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     Component Render                         │
│                                                              │
│  const l = useLabels('ComponentName', props.labels)          │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                  useLabels() merge                      │ │
│  │                                                         │ │
│  │   defaultLabels['ComponentName']     ← lowest priority  │ │
│  │       ↓ spread                                          │ │
│  │   contextLabels['ComponentName']     ← from Provider    │ │
│  │       ↓ spread                                          │ │
│  │   propsLabels                        ← highest priority │ │
│  │       ↓                                                 │ │
│  │   return merged object (fully resolved, all keys set)   │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  l.expandLabel  ← guaranteed defined, safe to use directly   │
└──────────────────────────────────────────────────────────────┘
```

### 2.3 Public API Surface

Exported from `src/components/index.ts`:

| Export                                                    | Kind      | Consumer Use                                            |
| --------------------------------------------------------- | --------- | ------------------------------------------------------- |
| `DesignSystemLocaleProvider`                              | Component | Wrap app root to provide translations to all components |
| `DesignSystemLabels`                                      | Type      | Type the `labels` prop on the provider                  |
| `CheckboxListLabels`, `PasswordLabels`, `TextInputLabels` | Types     | Type individual component `labels` props                |
| `defaultLabels`                                           | Object    | Reference or extend English defaults                    |

**Not exported** (internal only): `useLabels`, `useLocaleContext`.

### 2.4 Consumer Integration Example

```tsx
import { useIntl } from 'react-intl'
import {
  DesignSystemLocaleProvider,
  DesignSystemLabels,
} from '@worldresources/wri-design-systems'

function App() {
  const intl = useIntl()
  const labels: DesignSystemLabels = {
    CheckboxList: {
      expandLabel: intl.formatMessage({ id: 'ds.checkboxList.expand' }),
      hideLabel: intl.formatMessage({ id: 'ds.checkboxList.hide' }),
    },
    Password: {
      strengthPrefix: intl.formatMessage({ id: 'ds.password.strengthPrefix' }),
      minLengthRule: (min) =>
        intl.formatMessage({ id: 'ds.password.minLength' }, { min }),
    },
  }
  return (
    <DesignSystemLocaleProvider labels={labels}>
      <Routes />
    </DesignSystemLocaleProvider>
  )
}
```

---

## 3. Implemented Infrastructure

### 3.1 Current State (as of April 9, 2026)

| File                              | Status | Content                                                                                                                                   |
| --------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/i18n/types.ts`           | ✅     | `ReactNodeLabel`, `CheckboxListLabels` (6 keys), `PasswordLabels` (17 keys), `TextInputLabels` (2 keys), `DesignSystemLabels` (3 entries) |
| `src/lib/i18n/defaultLabels.ts`   | ✅     | English defaults for 3 components. `DefaultLabels` type derived from `Required<XxxLabels>`                                                |
| `src/lib/i18n/LocaleProvider.tsx` | ✅     | `DesignSystemLocaleProvider` with `useMemo`. Internal `useLocaleContext`                                                                  |
| `src/lib/i18n/useLabels.ts`       | ✅     | Generic hook constrained to `keyof typeof defaultLabels`                                                                                  |
| `src/lib/i18n/index.ts`           | ✅     | Barrel re-exports                                                                                                                         |
| `src/components/index.ts`         | ✅     | Exports provider + all label types                                                                                                        |

### 3.2 Migrated Components

| Component      | Branch   | Label Keys                                       | Stories                             | README          |
| -------------- | -------- | ------------------------------------------------ | ----------------------------------- | --------------- |
| `CheckboxList` | `DS-273` | 6 (2 `ReactNodeLabel`, 4 `string`)               | `WithI18nLabels`, `WithI18nContext` | ✅ i18n section |
| `Password`     | `DS-273` | 17 (6 `ReactNodeLabel`, 10 `string`, 1 function) | `WithI18nLabels`, `WithI18nContext` | ✅ i18n section |
| `TextInput`    | `DS-273` | 2 (1 `ReactNodeLabel`, 1 `string`)               | `WithI18nLabels`, `WithI18nContext` | ✅ i18n section |

---

## 4. Label Type Classification

Every key in a `XxxLabels` type **must** be classified by its actual usage in the component source:

| Category                                                                      | TypeScript Type                                   | Rule                                                     | Examples                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| **Visual-only** — rendered as JSX children                                    | `ReactNodeLabel`                                  | Accepts strings, elements, fragments                     | Button text, visible headings, status text in `<p>`                |
| **A11y-only** — passed to `aria-label`, `aria-roledescription`, `placeholder` | `string`                                          | HTML spec requires plain strings for `aria-*`            | `aria-label="Close"`, `placeholder="Filter"`                       |
| **Dual-use** — both JSX child AND inside an aria template                     | `string`                                          | Stricter constraint wins                                 | Password rules (rendered in `<p>` + used in `aria-label` template) |
| **Interpolated** — contains dynamic values                                    | `(...args) => string` or `(...args) => ReactNode` | Function signature; return type follows visual/a11y rule | `(min) => "Use a minimum of ${min} chars"`                         |

### Constraint: Button.label prop

The existing `Button` component types `label` as `string`. Until that is widened to `ReactNode`, any label key whose value flows into `<Button label={...}>` **must** be typed as `string`, not `ReactNodeLabel`.

Affected keys: `OpacityControlLabels.opacityButtonLabel`, `PasswordLabels.showLabel`, `PasswordLabels.hideLabel`.

---

## 5. Migration Procedure

Each component migration is a self-contained unit. Follow this checklist:

### 5.1 Pre-Implementation

- [ ] Read the component source and identify every hardcoded string
- [ ] Classify each string (Visual / A11y / Dual-use / Interpolated)
- [ ] Check if the component passes strings to sub-components (e.g., `Button.label`) — those constrain the type

### 5.2 Implementation Steps

| Step                         | File(s) to modify                                   | Action                                                                           |
| ---------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| **1. Define types**          | `src/lib/i18n/types.ts`                             | Add `export type XxxLabels = { ... }` with classified keys                       |
| **2. Register in aggregate** | `src/lib/i18n/types.ts`                             | Add `Xxx?: Partial<XxxLabels>` to `DesignSystemLabels`                           |
| **3. Add defaults**          | `src/lib/i18n/defaultLabels.ts`                     | Add component key to `defaultLabels` object and `DefaultLabels` type             |
| **4. Add labels prop**       | `src/components/.../types.ts`                       | Add `labels?: Partial<XxxLabels>` to `XxxProps`. Re-export label type.           |
| **5. Wire useLabels**        | `src/components/.../index.tsx`                      | `const l = useLabels('Xxx', labels)` at top of component                         |
| **6. Replace strings**       | `src/components/.../index.tsx`                      | Replace each hardcoded string with `l.keyName`                                   |
| **7. Add i18n story**        | `src/components/.../Xxx.stories.tsx`                | Add `WithI18nLabels` (prop-level) and `WithI18nContext` (provider-level) stories |
| **8. Update README**         | `src/components/.../README.md`                      | Add `## Internationalization (i18n)` section with labels table                   |
| **9. Export type**           | `src/lib/i18n/index.ts` + `src/components/index.ts` | Add `XxxLabels` to barrel exports                                                |
| **10. Verify**               | Terminal                                            | `npx tsc --noEmit` — zero errors                                                 |

### 5.3 Post-Implementation Verification

- [ ] `npx tsc --noEmit` passes
- [ ] Storybook renders default (English) story unchanged
- [ ] `WithI18nLabels` story shows overridden labels
- [ ] `WithI18nContext` story shows context-provided labels
- [ ] Component `labels` prop is optional — omitting it renders English defaults

---

## 6. Task Definitions — Phase 3

### Legend

- **Complexity:** A (1–2 strings), B (3–5 strings), C (6+ strings or interpolation)
- **Dependencies:** Unless noted, all tasks depend only on the existing i18n infrastructure (Phase 1–2). Tasks within a tier are independent and can be parallelized.
- **Files touched per task:** `types.ts` (i18n), `defaultLabels.ts`, component `types.ts`, component `index.tsx`, component `.stories.tsx`, component `README.md`, `i18n/index.ts`, `components/index.ts`

---

### 6.1 Tier A — Simple Components (9 tasks, ~11 label keys)

Each Tier A task follows the same minimal pattern: one type with 1–2 `string` keys (mostly aria-labels).

---

#### TASK A-1: CloseButton

| Field                 | Value                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Forms/Actions/CloseButton/index.tsx`                                                                                        |
| **Hardcoded strings** | `'Close'` → `aria-label` fallback                                                                                                           |
| **Label type**        | `CloseButtonLabels = { closeLabel: string }`                                                                                                |
| **Default**           | `closeLabel: 'Close'`                                                                                                                       |
| **Classification**    | A11y-only (aria-label)                                                                                                                      |
| **Notes**             | Only applies when no `aria-label` is provided via props. Check if component spreads `...rest` that may include consumer's own `aria-label`. |

---

#### TASK A-2: Toast

| Field                 | Value                                                                  |
| --------------------- | ---------------------------------------------------------------------- |
| **File**              | `src/components/Status/Toast/index.tsx`                                |
| **Hardcoded strings** | `'Dismiss'` → dismiss button `aria-label`                              |
| **Label type**        | `ToastLabels = { dismissLabel: string }`                               |
| **Default**           | `dismissLabel: 'Dismiss'`                                              |
| **Classification**    | A11y-only                                                              |
| **Notes**             | Toast may also use `showToast()` utility — verify labels flow through. |

---

#### TASK A-3: InlineMessage

| Field                 | Value                                               |
| --------------------- | --------------------------------------------------- |
| **File**              | `src/components/Status/InlineMessage/index.tsx`     |
| **Hardcoded strings** | `'Note'` → `aria-roledescription`                   |
| **Label type**        | `InlineMessageLabels = { roleDescription: string }` |
| **Default**           | `roleDescription: 'Note'`                           |
| **Classification**    | A11y-only (aria-roledescription)                    |

---

#### TASK A-4: MapPopUp

| Field                 | Value                                          |
| --------------------- | ---------------------------------------------- |
| **File**              | `src/components/Geospatial/MapPopUp/index.tsx` |
| **Hardcoded strings** | `'Close'` → close button `aria-label`          |
| **Label type**        | `MapPopUpLabels = { closeLabel: string }`      |
| **Default**           | `closeLabel: 'Close'`                          |
| **Classification**    | A11y-only                                      |

---

#### TASK A-5: AnalysisWidget

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **File**              | `src/components/DataDisplay/AnalysisWidget/index.tsx`   |
| **Hardcoded strings** | `'Toggle section'` → collapsible trigger `aria-label`   |
| **Label type**        | `AnalysisWidgetLabels = { toggleSectionLabel: string }` |
| **Default**           | `toggleSectionLabel: 'Toggle section'`                  |
| **Classification**    | A11y-only                                               |

---

#### TASK A-6: Table

| Field                 | Value                                                               |
| --------------------- | ------------------------------------------------------------------- |
| **File**              | `src/components/DataDisplay/Table/index.tsx`                        |
| **Hardcoded strings** | `'Ascending'`, `'Descending'` → sort icon `aria-label`s             |
| **Label type**        | `TableLabels = { ascendingLabel: string; descendingLabel: string }` |
| **Defaults**          | `ascendingLabel: 'Ascending'`, `descendingLabel: 'Descending'`      |
| **Classification**    | A11y-only                                                           |

---

#### TASK A-7: Button

| Field                 | Value                                                   |
| --------------------- | ------------------------------------------------------- |
| **File**              | `src/components/Forms/Actions/Button/index.tsx`         |
| **Hardcoded strings** | `'Loading'` → `aria-label` applied during loading state |
| **Label type**        | `ButtonLabels = { loadingLabel: string }`               |
| **Default**           | `loadingLabel: 'Loading'`                               |
| **Classification**    | A11y-only                                               |
| **Notes**             | Ensure loading state detection logic is not affected.   |

---

#### TASK A-8: BaseMap

| Field                 | Value                                             |
| --------------------- | ------------------------------------------------- |
| **File**              | `src/components/Geospatial/BaseMap/index.tsx`     |
| **Hardcoded strings** | `'Active'` → visible Tag label text               |
| **Label type**        | `BaseMapLabels = { activeLabel: ReactNodeLabel }` |
| **Default**           | `activeLabel: 'Active'`                           |
| **Classification**    | Visual-only (JSX child in `<Tag>`)                |

---

#### TASK A-9: Search

| Field                 | Value                                                                      |
| --------------------- | -------------------------------------------------------------------------- |
| **File**              | `src/components/Navigation/Search/index.tsx`                               |
| **Hardcoded strings** | `'Filter'` → `placeholder`, `'Search filter'` → `aria-label`               |
| **Label type**        | `SearchLabels = { filterPlaceholder: string; filterAriaLabel: string }`    |
| **Defaults**          | `filterPlaceholder: 'Filter'`, `filterAriaLabel: 'Search filter'`          |
| **Classification**    | Both A11y-only (placeholder is a string attribute, aria-label is a string) |

---

#### Tier A — Aggregate Type Definitions

```ts
export type CloseButtonLabels = { closeLabel: string }
export type ToastLabels = { dismissLabel: string }
export type InlineMessageLabels = { roleDescription: string }
export type MapPopUpLabels = { closeLabel: string }
export type AnalysisWidgetLabels = { toggleSectionLabel: string }
export type TableLabels = { ascendingLabel: string; descendingLabel: string }
export type ButtonLabels = { loadingLabel: string }
export type BaseMapLabels = { activeLabel: ReactNodeLabel }
export type SearchLabels = {
  filterPlaceholder: string
  filterAriaLabel: string
}
```

---

### 6.2 Tier B — Medium Components (7 tasks, ~27 label keys)

---

#### TASK B-1: RadioList

| Field                 | Value                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **File**              | `src/components/Forms/Inputs/RadioList/index.tsx`                                                                                                      |
| **Hardcoded strings** | `'Required.'` (aria-label suffix), `'Optional.'` (aria-label suffix), `'Error: ...'` (aria-label prefix), `'required'` (`aria-label` on `*` indicator) |
| **Classification**    | All A11y-only — used in `aria-label` template construction                                                                                             |
| **Notes**             | Same pattern as CheckboxList. Shares `requiredSymbolLabel` / `errorPrefix` key names for consistency.                                                  |

```ts
export type RadioListLabels = {
  requiredLabel: string // " Required." appended to aria-label
  optionalLabel: string // " Optional." appended to aria-label
  errorPrefix: string // "Error: " prepended to error in aria-label
  requiredSymbolLabel: string // aria-label on the (*) indicator
}
```

**Defaults:** `{ requiredLabel: 'Required.', optionalLabel: 'Optional.', errorPrefix: 'Error:', requiredSymbolLabel: 'required' }`

---

#### TASK B-2: Select

| Field                 | Value                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Forms/Inputs/Select/index.tsx`                                                |
| **Hardcoded strings** | `'Select input'` (default `aria-label`), `' required.'` (appended), `' Disabled.'` (appended) |
| **Classification**    | All A11y-only                                                                                 |

```ts
export type SelectLabels = {
  defaultAriaLabel: string // fallback aria-label when no label prop
  requiredSuffix: string // " required." appended to aria-label
  disabledSuffix: string // " Disabled." appended to aria-label
}
```

**Defaults:** `{ defaultAriaLabel: 'Select input', requiredSuffix: ' required.', disabledSuffix: ' Disabled.' }`

---

#### TASK B-3: NavigationRail

| Field                 | Value                                                                      |
| --------------------- | -------------------------------------------------------------------------- |
| **File**              | `src/components/Navigation/NavigationRail/index.tsx`                       |
| **Hardcoded strings** | `'Show'` (button text), `'Hide'` (button text), `'Sidebar'` (visible text) |
| **Classification**    | All Visual-only (JSX children)                                             |

```ts
export type NavigationRailLabels = {
  showLabel: ReactNodeLabel // visible toggle button text
  hideLabel: ReactNodeLabel // visible toggle button text
  sidebarLabel: ReactNodeLabel // visible heading/text
}
```

**Defaults:** `{ showLabel: 'Show', hideLabel: 'Hide', sidebarLabel: 'Sidebar' }`

---

#### TASK B-4: Navbar

| Field                 | Value                                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Files**             | `src/components/Navigation/Navbar/index.tsx`, `NavbarMobile.tsx`                                                                                                                                                                             |
| **Hardcoded strings** | `'Open menu'` (aria-label, desktop), `'Close'` (visible text, desktop toggle), `'Menu'` (visible text, desktop toggle), `'Go back'` (aria-label, mobile), `'Close menu'` (aria-label, mobile), `'Close'` (visible text, mobile close button) |
| **Classification**    | Mixed — see per-key comments                                                                                                                                                                                                                 |
| **Notes**             | Spans two files. `Navbar/index.tsx` must pass resolved labels down to `NavbarMobile` via props. `NavbarMobile` should **not** call `useLabels` independently — it receives the resolved labels subset from its parent.                       |

```ts
export type NavbarLabels = {
  openMenuLabel: string // aria-label on hamburger button (desktop)
  closeLabel: ReactNodeLabel // visible button text — hamburger toggle shows "Close"
  menuLabel: ReactNodeLabel // visible button text — hamburger toggle shows "Menu"
  goBackLabel: string // aria-label on back button (NavbarMobile.tsx)
  closeMenuLabel: string // aria-label on close button (NavbarMobile.tsx)
  closeButtonText: ReactNodeLabel // visible "Close" text inside close button (NavbarMobile.tsx)
}
```

**Defaults:** `{ openMenuLabel: 'Open menu', closeLabel: 'Close', menuLabel: 'Menu', goBackLabel: 'Go back', closeMenuLabel: 'Close menu', closeButtonText: 'Close' }`

**Implementation detail:** `Navbar/index.tsx` calls `useLabels('Navbar', labels)` and passes individual label values (or the whole resolved object) as props to `NavbarMobile`.

---

#### TASK B-5: LegendItem

| Field                 | Value                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Geospatial/Legends/LegendItem/index.tsx`                                                                                                                                                          |
| **Hardcoded strings** | `'Drag and drop'` (aria-label), `'Up'` (aria-label), `'Down'` (aria-label), `'Remove'` (visible text), `'About data'` (visible text / `infoButtonLabel` prop default)                                             |
| **Classification**    | Mixed                                                                                                                                                                                                             |
| **Notes**             | `'About data'` is currently the default value of the `infoButtonLabel` prop. Converting it to a label key maintains backward compatibility — the label key's default becomes the fallback if the prop is not set. |

```ts
export type LegendItemLabels = {
  dragAndDropLabel: string // aria-label on drag handle
  upLabel: string // aria-label on move-up button
  downLabel: string // aria-label on move-down button
  removeLabel: ReactNodeLabel // visible text on remove button
  aboutDataLabel: ReactNodeLabel // visible text on info button
}
```

**Defaults:** `{ dragAndDropLabel: 'Drag and drop', upLabel: 'Up', downLabel: 'Down', removeLabel: 'Remove', aboutDataLabel: 'About data' }`

---

#### TASK B-6: Toolbar

| Field                 | Value                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Forms/Actions/Toolbar/index.tsx`                                             |
| **Hardcoded strings** | `'Collapse'` (visible text on overflow toggle), `'Expand'` (visible text on overflow toggle) |
| **Classification**    | Visual-only                                                                                  |

```ts
export type ToolbarLabels = {
  collapseLabel: ReactNodeLabel // visible text — overflow collapse button
  expandLabel: ReactNodeLabel // visible text — overflow expand button
}
```

**Defaults:** `{ collapseLabel: 'Collapse', expandLabel: 'Expand' }`

---

#### TASK B-7: OpacityControl

| Field                 | Value                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **File**              | `src/components/Geospatial/Legends/OpacityControl/index.tsx`                                                                                                       |
| **Hardcoded strings** | `'Opacity'` ×3 (button label, `<p>` heading, `aria-label` on input), `'%'` (visible suffix)                                                                        |
| **Classification**    | Mixed — see per-key                                                                                                                                                |
| **Notes**             | The button label flows into `<Button label={...}>` which is typed as `string`. The three `'Opacity'` strings serve different purposes and should be separate keys. |

```ts
export type OpacityControlLabels = {
  opacityButtonLabel: string // Button.label prop — must be string
  opacityHeading: ReactNodeLabel // visible <p> heading in popover
  opacityAriaLabel: string // aria-label on the slider/input
  percentSuffix: ReactNodeLabel // visible '%' text next to value
}
```

**Defaults:** `{ opacityButtonLabel: 'Opacity', opacityHeading: 'Opacity', opacityAriaLabel: 'Opacity', percentSuffix: '%' }`

---

#### Tier B — Aggregate Type Definitions

```ts
export type RadioListLabels = {
  requiredLabel: string
  optionalLabel: string
  errorPrefix: string
  requiredSymbolLabel: string
}
export type SelectLabels = {
  defaultAriaLabel: string
  requiredSuffix: string
  disabledSuffix: string
}
export type NavigationRailLabels = {
  showLabel: ReactNodeLabel
  hideLabel: ReactNodeLabel
  sidebarLabel: ReactNodeLabel
}
export type NavbarLabels = {
  openMenuLabel: string
  closeLabel: ReactNodeLabel
  menuLabel: ReactNodeLabel
  goBackLabel: string
  closeMenuLabel: string
  closeButtonText: ReactNodeLabel
}
export type LegendItemLabels = {
  dragAndDropLabel: string
  upLabel: string
  downLabel: string
  removeLabel: ReactNodeLabel
  aboutDataLabel: ReactNodeLabel
}
export type ToolbarLabels = {
  collapseLabel: ReactNodeLabel
  expandLabel: ReactNodeLabel
}
export type OpacityControlLabels = {
  opacityButtonLabel: string
  opacityHeading: ReactNodeLabel
  opacityAriaLabel: string
  percentSuffix: ReactNodeLabel
}
```

---

### 6.3 Tier C — Complex Components (7 tasks, ~41 label keys)

Components with 6+ strings or interpolation patterns requiring function signatures.

---

#### TASK C-1: Textarea

| Field                 | Value                                                                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Forms/Inputs/Textarea/index.tsx`                                                                                                                                               |
| **Hardcoded strings** | 9 strings: `'required'` (aria-label), `' (Optional)'` (visible suffix), `'Error:'` (aria-label prefix), + 6 character count messages with numeric interpolation                                |
| **Classification**    | Mixed — see per-key                                                                                                                                                                            |
| **Notes**             | Character count messages are dual-use (visible text + fed into helper/error context). Use function signatures for interpolation. Verify exact English wording by reading the component source. |

```ts
export type TextareaLabels = {
  requiredSymbolLabel: string // aria-label on (*) indicator
  optionalSuffix: ReactNodeLabel // visible "(Optional)" suffix
  errorPrefix: string // "Error:" prefix in aria-label
  enterAtLeastChars: (n: number) => string // "Enter at least {n} characters"
  minChars: (n: number) => string // "{n} characters minimum"
  charsRemaining: (n: number) => string // "{n} characters remaining"
  maxChars: (n: number) => string // "{n} characters maximum"
  needMoreChars: (n: number) => string // "Need {n} more characters"
  tooManyChars: (n: number) => string // "{n} characters over limit"
}
```

**Defaults:**

```ts
{
  requiredSymbolLabel: 'required',
  optionalSuffix: ' (Optional)',
  errorPrefix: 'Error:',
  enterAtLeastChars: (n) => `Enter at least ${n} characters`,
  minChars: (n) => `${n} characters minimum`,
  charsRemaining: (n) => `${n} characters remaining`,
  maxChars: (n) => `${n} characters maximum`,
  needMoreChars: (n) => `Need ${n} more characters`,
  tooManyChars: (n) => `${n} characters over limit`,
}
```

> **Implementation note:** Verify the exact English messages by reading the source. The function names and default text above are derived from the audit — exact phrasing may differ slightly.

---

#### TASK C-2: Pagination

| Field                 | Value                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Navigation/Pagination/index.tsx`                                                                                                                                                |
| **Hardcoded strings** | `'Previous'` (visible), `'Next'` (visible), `'Previous page'` (aria-label), `'Next page'` (aria-label), `'Pagination'` (container aria-label), `` `Page ${page.value}` `` (per-page aria-label) |
| **Classification**    | Mixed                                                                                                                                                                                           |

```ts
export type PaginationLabels = {
  previousLabel: ReactNodeLabel // visible "Previous" button text
  nextLabel: ReactNodeLabel // visible "Next" button text
  previousPageLabel: string // aria-label on previous icon button
  nextPageLabel: string // aria-label on next icon button
  paginationLabel: string // aria-label on the nav container
  pageLabel: (page: number) => string // aria-label per page button: "Page 3"
}
```

**Defaults:**

```ts
{
  previousLabel: 'Previous',
  nextLabel: 'Next',
  previousPageLabel: 'Previous page',
  nextPageLabel: 'Next page',
  paginationLabel: 'Pagination',
  pageLabel: (page) => `Page ${page}`,
}
```

---

#### TASK C-3: ItemCount

| Field                 | Value                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/DataDisplay/ItemCount/index.tsx`                                                     |
| **Hardcoded strings** | `'Per Page'` (visible text), `` `Showing ${startItem}-${endItem} of ${totalItems}` `` (visible text) |
| **Classification**    | Both Visual-only                                                                                     |

```ts
export type ItemCountLabels = {
  perPageLabel: ReactNodeLabel // visible <p> text
  showingLabel: (start: number, end: number, total: number) => ReactNode // visible interpolated text
}
```

**Defaults:**

```ts
{
  perPageLabel: 'Per Page',
  showingLabel: (start, end, total) => `Showing ${start}-${end} of ${total}`,
}
```

---

#### TASK C-4: LayerGroup

| Field                 | Value                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Geospatial/Layers/LayerGroup/index.tsx`                                                                                         |
| **Hardcoded strings** | `` `${count} Active` `` (visible Tag text), `` `${label}${caption}, ${activeCount} Active layers on the map` `` (aria-label on group container) |
| **Classification**    | Mixed — Tag text is visual-only, group label is A11y-only                                                                                       |
| **Notes**             | The `aria-label` is a complex template involving label, caption, and active count. Use a function signature.                                    |

```ts
export type LayerGroupLabels = {
  activeTagLabel: (count: number) => ReactNode // visible Tag: "3 Active"
  groupAriaLabel: (
    label: string,
    activeCount: number,
    caption?: string,
  ) => string // full aria-label builder
}
```

**Defaults:**

```ts
{
  activeTagLabel: (count) => `${count} Active`,
  groupAriaLabel: (label, activeCount, caption) =>
    `${label}${caption ? ', ' + caption : ''}, ${activeCount} Active layers on the map`,
}
```

---

#### TASK C-5: QualitativeAttribute

| Field                 | Value                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Geospatial/Legends/QualitativeAttribute/index.tsx`                                                                                                                       |
| **Hardcoded strings** | `'Hide'`/`'Show'` (visible button text), `'visible'`/`'hidden'` (inside aria-label), `'line,'` (type prefix in aria-label), `'. Currently visible/hidden.'` (aria-label suffix template) |
| **Classification**    | Mixed — button text is visual-only, status words are a11y-only embedded in template                                                                                                      |
| **Notes**             | The `aria-label` is built from multiple fragments. A `currentlyTemplate` function gives consumers full control over the final accessible name.                                           |

```ts
export type QualitativeAttrLabels = {
  hideLabel: ReactNodeLabel // visible "Hide" button text
  showLabel: ReactNodeLabel // visible "Show" button text
  visibleText: string // "visible" — used inside aria-label
  hiddenText: string // "hidden" — used inside aria-label
  linePrefix: string // "line," — type prefix in aria-label
  currentlyTemplate: (
    label: string,
    caption: string | undefined,
    typeText: string,
    visibilityText: string,
  ) => string // full aria-label builder
}
```

**Defaults:**

```ts
{
  hideLabel: 'Hide',
  showLabel: 'Show',
  visibleText: 'visible',
  hiddenText: 'hidden',
  linePrefix: 'line,',
  currentlyTemplate: (label, caption, typeText, visibilityText) =>
    `${label}${caption ? ', ' + caption : ''} ${typeText}. Currently ${visibilityText}.`,
}
```

---

#### TASK C-6: MapControlsToolbar

| Field                 | Value                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Forms/Actions/Toolbar/presets/MapControl/index.tsx`                                                                         |
| **Hardcoded strings** | 15 strings: 7 visible button labels + 7 matching `aria-label`s + 1 toolbar `aria-label`                                                     |
| **Classification**    | Button text = Visual-only, aria-labels = A11y-only                                                                                          |
| **Notes**             | This is a preset built on top of `Toolbar`. Its labels are independent of `ToolbarLabels`. Verify exact default text by reading the source. |

```ts
export type MapControlsToolbarLabels = {
  // Visible button text (ReactNodeLabel)
  zoomInLabel: ReactNodeLabel
  zoomOutLabel: ReactNodeLabel
  expandLabel: ReactNodeLabel
  shareLabel: ReactNodeLabel
  printLabel: ReactNodeLabel
  settingsLabel: ReactNodeLabel
  helpLabel: ReactNodeLabel
  // Aria-labels (string)
  zoomInAriaLabel: string
  zoomOutAriaLabel: string
  expandAriaLabel: string
  shareAriaLabel: string
  printAriaLabel: string
  settingsAriaLabel: string
  helpAriaLabel: string
  // Container
  toolbarAriaLabel: string
}
```

**Defaults:**

```ts
{
  zoomInLabel: 'Zoom in', zoomOutLabel: 'Zoom out', expandLabel: 'Expand',
  shareLabel: 'Share', printLabel: 'Print', settingsLabel: 'Settings', helpLabel: 'Help',
  zoomInAriaLabel: 'Zoom in', zoomOutAriaLabel: 'Zoom out', expandAriaLabel: 'Expand',
  shareAriaLabel: 'Share', printAriaLabel: 'Print', settingsAriaLabel: 'Settings',
  helpAriaLabel: 'Help', toolbarAriaLabel: 'Map controls',
}
```

---

#### TASK C-7: StepProgressIndicator

| Field                 | Value                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **File**              | `src/components/Status/StepProgressIndicator/index.tsx`                                                       |
| **Hardcoded strings** | `` `Current Step ${idx}: ${label}. ${isCompleted ? 'Completed' : 'Not completed'}.` `` (dynamic `aria-label`) |
| **Classification**    | A11y-only (aria-label template)                                                                               |

```ts
export type StepProgressIndicatorLabels = {
  currentStepLabel: (
    step: number,
    label: string,
    isCompleted: boolean,
  ) => string
}
```

**Defaults:**

```ts
{
  currentStepLabel: (step, label, isCompleted) =>
    `Current Step ${step}: ${label}. ${isCompleted ? 'Completed' : 'Not completed'}.`,
}
```

> **Implementation note:** Verify exact interpolation pattern by reading the source.

---

### 6.4 Interpolated String Strategy

Components with dynamic values use **function signatures** (Option A) rather than template strings:

```ts
// Option A — format function (recommended, most flexible)
showingLabel: (start: number, end: number, total: number) => ReactNode

// Option B — template string (less flexible, can't handle pluralization)
showingLabel: string
```

**Rationale:** Function signatures allow consumers to:

- Handle pluralization via their own ICU library
- Format numbers according to locale (e.g., thousands separators)
- Return JSX elements (when `ReactNode` return type) for rich formatting

---

## 7. Task Definitions — Phase 4

### TASK P4-1: Storybook i18n Documentation Page

| Field              | Value                                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File to create** | `src/components/docs/i18n.mdx`                                                                                                                                                                                                               |
| **Depends on**     | All Phase 3 components migrated                                                                                                                                                                                                              |
| **Deliverables**   | MDX page with: props + context pattern diagram, full label catalog (table per component), integration examples (react-intl, react-i18next, vanilla), context vs per-component trade-offs, "Adding i18n to a new component" contributor guide |

---

### TASK P4-2: Public API Export Audit

| Field            | Value                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Files**        | `src/lib/i18n/index.ts`, `src/components/index.ts`                                                                  |
| **Depends on**   | All Phase 3 components migrated                                                                                     |
| **Deliverables** | Every `XxxLabels` type exported from both barrel files so consumers can type translation maps without deep imports. |

---

### TASK P4-3: ESLint Hardcoded String Guard (Optional)

| Field            | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **File**         | `.eslintrc` or `eslint.config.js`                                                          |
| **Depends on**   | None — can be done anytime                                                                 |
| **Deliverables** | `no-restricted-syntax` rule warning on hardcoded `aria-label` strings in `src/components/` |

```json
{
  "rules": {
    "no-restricted-syntax": [
      "warn",
      {
        "selector": "JSXAttribute[name.name='aria-label'] > Literal",
        "message": "Hardcoded aria-label detected. Use a labels prop via useLabels()."
      }
    ]
  }
}
```

---

### TASK P4-4: CHANGELOG Entry

| Field            | Value                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **File**         | `CHANGELOG.md`                                                                                                                     |
| **Depends on**   | All Phase 3 components migrated                                                                                                    |
| **Deliverables** | `Added` entry documenting `DesignSystemLocaleProvider`, `labels` prop, full list of migrated components. `BREAKING CHANGES: none`. |

---

## 8. Progress Tracker

### Phase 1–2: Infrastructure + Reference Implementations

| Item                                  | Status                          |
| ------------------------------------- | ------------------------------- |
| i18n infrastructure (`src/lib/i18n/`) | ✅ Done — `DS-273`              |
| `CheckboxList` (6 keys)               | ✅ Done — `DS-273`              |
| `Password` (17 keys)                  | ✅ Done — `DS-273`              |
| `TextInput` (2 keys)                  | ✅ Done — `DS-273`              |
| ReactNode type widening               | ✅ Done — `DS-273-expand-props` |

### Phase 3: Component Migration

| Task | Component               | Tier | Keys | Status         |
| ---- | ----------------------- | ---- | ---- | -------------- |
| A-1  | `CloseButton`           | A    | 1    | ⬜ Not started |
| A-2  | `Toast`                 | A    | 1    | ⬜ Not started |
| A-3  | `InlineMessage`         | A    | 1    | ⬜ Not started |
| A-4  | `MapPopUp`              | A    | 1    | ⬜ Not started |
| A-5  | `AnalysisWidget`        | A    | 1    | ⬜ Not started |
| A-6  | `Table`                 | A    | 2    | ⬜ Not started |
| A-7  | `Button`                | A    | 1    | ⬜ Not started |
| A-8  | `BaseMap`               | A    | 1    | ⬜ Not started |
| A-9  | `Search`                | A    | 2    | ⬜ Not started |
| B-1  | `RadioList`             | B    | 4    | ⬜ Not started |
| B-2  | `Select`                | B    | 3    | ⬜ Not started |
| B-3  | `NavigationRail`        | B    | 3    | ⬜ Not started |
| B-4  | `Navbar`                | B    | 6    | ⬜ Not started |
| B-5  | `LegendItem`            | B    | 5    | ⬜ Not started |
| B-6  | `Toolbar`               | B    | 2    | ⬜ Not started |
| B-7  | `OpacityControl`        | B    | 4    | ⬜ Not started |
| C-1  | `Textarea`              | C    | 9    | ⬜ Not started |
| C-2  | `Pagination`            | C    | 6    | ⬜ Not started |
| C-3  | `ItemCount`             | C    | 2    | ⬜ Not started |
| C-4  | `LayerGroup`            | C    | 2    | ⬜ Not started |
| C-5  | `QualitativeAttribute`  | C    | 6    | ⬜ Not started |
| C-6  | `MapControlsToolbar`    | C    | 15   | ⬜ Not started |
| C-7  | `StepProgressIndicator` | C    | 1    | ⬜ Not started |

### Phase 4: Documentation & Tooling

| Task | Item                          | Status         |
| ---- | ----------------------------- | -------------- |
| P4-1 | Storybook i18n docs page      | ⬜ Not started |
| P4-2 | Public API export audit       | ⬜ Not started |
| P4-3 | ESLint hardcoded string guard | ⬜ Not started |
| P4-4 | CHANGELOG entry               | ⬜ Not started |

### Summary

- **Done:** 3 components (25 keys) + infrastructure + ReactNode widening
- **Remaining:** 23 components (~80 keys) + 4 Phase 4 tasks
- **Breakdown:** 9 Tier A (11 keys) · 7 Tier B (27 keys) · 7 Tier C (41 keys)

---

## 9. Appendix

### A. Components With No Hardcoded Strings (No Action Required)

These components were audited and confirmed to have no internal English strings:

`AlertBanner`, `Avatar`, `Badge`, `Breadcrumb`, `Checkbox`, `CheckboxOptionCard`, `ExtendableCard`, `Footer`, `FormContainer`, `IconButton`, `InputWithUnits`, `LayerGroupContainer`, `LayerItem`, `LayerParameters`, `List`, `MapMarker`, `Menu`, `MobileTabBar`, `Modal`, `MultiActionButton`, `OptionCard`, `Panel`, `ProgressBar`, `Radio`, `RadioGroup`, `ScaleBar`, `Sheet`, `Slider`, `SliderInput`, `Switch`, `TabBar`, `Tag`, `Tooltip`

### B. DesignSystemLabels Final Shape (After Full Migration)

```ts
export type DesignSystemLabels = {
  // Phase 1–2 (done)
  CheckboxList?: Partial<CheckboxListLabels>
  Password?: Partial<PasswordLabels>
  TextInput?: Partial<TextInputLabels>
  // Tier A
  CloseButton?: Partial<CloseButtonLabels>
  Toast?: Partial<ToastLabels>
  InlineMessage?: Partial<InlineMessageLabels>
  MapPopUp?: Partial<MapPopUpLabels>
  AnalysisWidget?: Partial<AnalysisWidgetLabels>
  Table?: Partial<TableLabels>
  Button?: Partial<ButtonLabels>
  BaseMap?: Partial<BaseMapLabels>
  Search?: Partial<SearchLabels>
  // Tier B
  RadioList?: Partial<RadioListLabels>
  Select?: Partial<SelectLabels>
  NavigationRail?: Partial<NavigationRailLabels>
  Navbar?: Partial<NavbarLabels>
  LegendItem?: Partial<LegendItemLabels>
  Toolbar?: Partial<ToolbarLabels>
  OpacityControl?: Partial<OpacityControlLabels>
  // Tier C
  Textarea?: Partial<TextareaLabels>
  Pagination?: Partial<PaginationLabels>
  ItemCount?: Partial<ItemCountLabels>
  LayerGroup?: Partial<LayerGroupLabels>
  QualitativeAttribute?: Partial<QualitativeAttrLabels>
  MapControlsToolbar?: Partial<MapControlsToolbarLabels>
  StepProgressIndicator?: Partial<StepProgressIndicatorLabels>
}
```

### C. defaultLabels Growth Pattern

The `DefaultLabels` type in `defaultLabels.ts` must grow in lockstep with `DesignSystemLabels`. Each new entry uses `Required<XxxLabels>` to ensure all keys have defaults:

```ts
type DefaultLabels = {
  CheckboxList: Required<CheckboxListLabels>
  Password: Required<PasswordLabels>
  TextInput: Required<TextInputLabels>
  // ... one entry per migrated component, added with each task
}
```

The `useLabels` hook uses `keyof typeof defaultLabels` to constrain valid component names — a component cannot use `useLabels` until its defaults are registered.
