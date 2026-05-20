# Internationalization (i18n)

The WRI Design Systems library ships English strings for all internal UI text — `aria-label` values, button text, status messages, and interpolated templates. The i18n layer lets consuming applications override any of these strings without coupling to a specific i18n library.

---

## Contents

1. [How it works](#1-how-it-works)
2. [File structure](#2-file-structure)
3. [Public API](#3-public-api)
4. [Usage](#4-usage)
   - [App-wide overrides via provider](#41-app-wide-overrides-via-provider)
   - [Per-component overrides via prop](#42-per-component-overrides-via-prop)
   - [Mixing both approaches](#43-mixing-both-approaches)
5. [Label type reference](#5-label-type-reference)
6. [Case study — GRI Restoration Diagnostic](#6-case-study--gri-restoration-diagnostic)

---

## 1. How it works

Label resolution follows a three-tier priority chain:

```
defaultLabels (English fallback)
    ↓
DesignSystemLocaleProvider (app-wide context)
    ↓
labels prop on the component  ← highest priority
```

The most specific value wins. All keys are optional — any key not provided falls back to the next tier. English-only applications require zero configuration.

> **Note — the implementing application owns all string management.** The design system does not know which language is active, does not load translation files, and does not format or pluralize strings. The consuming application resolves each string to the correct value for the current locale — using whatever mechanism it chooses — and passes the result in.
>
> ```tsx
> // This example uses a simple lookup table; real projects typically use react-intl,
> // react-i18next, or a custom hook (see the case study in §6).
> const translations = {
>   en: { expand: 'Expand', hide: 'Hide' },
>   es: { expand: 'Expandir', hide: 'Ocultar' },
>   fr: { expand: 'Développer', hide: 'Masquer' },
> }
> const t = translations[activeLocale] // e.g. 'es' → { expand: 'Expandir', hide: 'Ocultar' }
>
> <DesignSystemLocaleProvider
>   labels={{ CheckboxList: { expandLabel: t.expand, hideLabel: t.hide } }}
> >
>   <App />
> </DesignSystemLocaleProvider>
> // → CheckboxList renders 'Expandir' / 'Ocultar' when activeLocale is 'es'
> ```

---

## 2. File structure

```
src/lib/i18n/
├── types.ts            # All XxxLabels types + DesignSystemLabels aggregate
├── defaultLabels.ts    # English fallback values for every migrated component
├── LocaleProvider.tsx  # DesignSystemLocaleProvider + internal useLocaleContext
├── useLabels.ts        # Internal hook — 3-tier merge logic
└── index.ts            # Barrel exports (public API surface)
```

All exports are re-exported from the package root via `src/components/index.ts`.

---

## 3. Public API

| Export                                                       | Kind      | Purpose                                                            |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------------ |
| `DesignSystemLocaleProvider`                                 | Component | Wraps the app root to provide translations to all child components |
| `DesignSystemLabels`                                         | Type      | Type for the `labels` prop on the provider                         |
| `CheckboxListLabels`, `PasswordLabels`, `TextInputLabels`, … | Types     | Type individual component `labels` props                           |
| `defaultLabels`                                              | Object    | Reference or extend English defaults                               |

**Not exported** (internal): `useLabels`, `useLocaleContext`.

---

## 4. Usage

### 4.1 App-wide overrides via provider

**Best for:** applications that use many design system components across multiple pages. A single provider at the app root (or layout level) covers every component in the tree — no repeated prop passing, no per-screen setup. This is the recommended default for any project doing full i18n.

Wrap the app root (or a subtree) with `DesignSystemLocaleProvider` and pass pre-translated strings. The library does not bundle a translation runtime — pass strings produced by your own stack (react-intl, react-i18next, a custom function, etc.).

```tsx
import {
  DesignSystemLocaleProvider,
  type DesignSystemLabels,
} from '@worldresources/wri-design-systems'

function App({ t }: { t: (key: string) => string }) {
  const labels: DesignSystemLabels = {
    CheckboxList: {
      expandLabel: t('ds.checkboxList.expand'),
      hideLabel: t('ds.checkboxList.hide'),
    },
    TextInput: {
      requiredSymbolLabel: t('common.required'),
      optionalSuffix: t('common.optional'),
    },
  }

  return (
    <DesignSystemLocaleProvider labels={labels}>
      <Routes />
    </DesignSystemLocaleProvider>
  )
}
```

### 4.2 Per-component overrides via prop

**Best for:** one-off cases — a component used in a single place that needs translated labels, or an instance that requires different text from whatever the provider already supplies. It avoids setting up a provider just for one component, and it lets you override a specific key without touching anything else in the tree.

Every migrated component accepts a `labels` prop typed as `Partial<XxxLabels>`. This is the highest-priority tier and is useful when a single component instance needs different text from the rest of the application.

```tsx
import {
  Password,
  type PasswordLabels,
} from '@worldresources/wri-design-systems'

function LoginForm({ t }: { t: (key: string) => string }) {
  const labels: Partial<PasswordLabels> = {
    showLabel: t('password.show'),
    hideLabel: t('password.hide'),
    strengthPrefix: t('password.strengthPrefix'),
  }

  return <Password label={t('password.label')} labels={labels} required />
}
```

### 4.3 Mixing both approaches

**Best for:** when most labels are covered by a root provider but one component instance on a particular screen needs a contextually different string — for example, a `TextInput` that uses "Filter" instead of the globally provided "Search" as its placeholder. The prop override is surgical and does not affect any other instance.

Provider and prop labels can coexist. The prop takes precedence for any key it defines; the provider handles the rest.

```tsx
<DesignSystemLocaleProvider
  labels={{ TextInput: { optionalSuffix: t('common.optional') } }}
>
  {/* This instance overrides one additional key at the prop level */}
  <TextInput
    label={t('form.name')}
    labels={{ requiredSymbolLabel: t('form.requiredIndicator') }}
    required
  />
</DesignSystemLocaleProvider>
```

---

## 5. Label type reference

Each type follows one of four classification rules:

| Category                                                            | TypeScript type                    | Rule                                    |
| ------------------------------------------------------------------- | ---------------------------------- | --------------------------------------- |
| **Visual-only** — rendered as JSX children                          | `ReactNodeLabel`                   | Accepts strings, elements, or fragments |
| **A11y-only** — `aria-label`, `aria-roledescription`, `placeholder` | `string`                           | HTML spec requires plain strings        |
| **Dual-use** — rendered as text _and_ inside an aria template       | `string`                           | The stricter constraint (string) wins   |
| **Interpolated** — contains dynamic values                          | `(...args) => string \| ReactNode` | Return type follows visual/a11y rule    |

**Supported components and their label types:**

| Component               | Label type                    | Keys                                                                                               |
| ----------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `AnalysisWidget`        | `AnalysisWidgetLabels`        | `toggleSectionLabel`                                                                               |
| `BaseMap`               | `BaseMapLabels`               | `activeLabel`                                                                                      |
| `Button`                | `ButtonLabels`                | `loadingLabel`                                                                                     |
| `CheckboxList`          | `CheckboxListLabels`          | `expandLabel`, `hideLabel`, `requiredLabel`, `optionalLabel`, `errorPrefix`, `requiredSymbolLabel` |
| `CloseButton`           | `CloseButtonLabels`           | `closeLabel`                                                                                       |
| `InlineMessage`         | `InlineMessageLabels`         | `roleDescription`                                                                                  |
| `ItemCount`             | `ItemCountLabels`             | `perPageLabel`, `showingLabel`                                                                     |
| `LayerGroup`            | `LayerGroupLabels`            | `activeTagLabel`, `groupAriaLabel`                                                                 |
| `LegendItem`            | `LegendItemLabels`            | `dragAndDropLabel`, `upLabel`, `downLabel`, `removeLabel`, `aboutDataLabel`                        |
| `MapControlsToolbar`    | `MapControlsToolbarLabels`    | 15 keys (7 visible labels + 7 aria-labels + 1 toolbar aria-label)                                  |
| `MapPopUp`              | `MapPopUpLabels`              | `closeLabel`                                                                                       |
| `Navbar`                | `NavbarLabels`                | `openMenuLabel`, `closeLabel`, `menuLabel`, `goBackLabel`, `closeMenuLabel`, `closeButtonText`     |
| `NavigationRail`        | `NavigationRailLabels`        | `showLabel`, `hideLabel`, `sidebarLabel`                                                           |
| `OpacityControl`        | `OpacityControlLabels`        | `opacityButtonLabel`, `opacityHeading`, `opacityAriaLabel`, `percentSuffix`                        |
| `Pagination`            | `PaginationLabels`            | `previousLabel`, `nextLabel`, `previousPageLabel`, `nextPageLabel`, `paginationLabel`, `pageLabel` |
| `Password`              | `PasswordLabels`              | 17 keys (strength levels, validation rules, show/hide labels)                                      |
| `QualitativeAttribute`  | `QualitativeAttributeLabels`  | `hideLabel`, `showLabel`, `visibleText`, `hiddenText`, `linePrefix`, `currentlyTemplate`           |
| `RadioList`             | `RadioListLabels`             | `requiredLabel`, `optionalLabel`, `errorPrefix`, `requiredSymbolLabel`                             |
| `Search`                | `SearchLabels`                | `filterPlaceholder`, `filterAriaLabel`                                                             |
| `Select`                | `SelectLabels`                | `defaultAriaLabel`, `requiredSuffix`, `disabledSuffix`                                             |
| `StepProgressIndicator` | `StepProgressIndicatorLabels` | `currentStepLabel`                                                                                 |
| `Table`                 | `TableLabels`                 | `ascendingLabel`, `descendingLabel`                                                                |
| `Textarea`              | `TextareaLabels`              | 9 keys (character count messages + required/optional indicators)                                   |
| `TextInput`             | `TextInputLabels`             | `requiredSymbolLabel`, `optionalSuffix`                                                            |
| `Toast`                 | `ToastLabels`                 | `dismissLabel`                                                                                     |
| `Toolbar`               | `ToolbarLabels`               | `collapseLabel`, `expandLabel`                                                                     |

---

## 6. Case study — GRI Restoration Diagnostic

[GRI Restoration Diagnostic](https://github.com/wri/gri-restoration-diagnostic) is a Next.js 15 application supporting four languages (English, Spanish, French, Portuguese). It uses a custom i18n stack — a `LanguageContext` storing the active locale and a `useTranslations()` hook that returns a `t(key)` function backed by JSON translation files — entirely decoupled from the design system.

**Translation file structure:**

```
src/i18n/translations/
├── en.json               # English UI strings (source of truth)
├── es.json               # Spanish UI strings
├── fr.json               # French UI strings
├── pt.json               # Portuguese UI strings
├── questions-en.json     # Localised question content
└── questions-es.json
```

The following examples show the three patterns the project uses to connect its translation layer to the design system's i18n API.

---

### Pattern 1 — Scoped provider for a single component type

The simplest case: a `DesignSystemLocaleProvider` wraps one screen and overrides only the keys needed for the components rendered there.

`src/components/static/landing/OfflineDownloadModal.tsx`

```tsx
const t = useTranslations()

return (
  <DesignSystemLocaleProvider
    labels={{
      TextInput: {
        optionalSuffix: t('common.optional'),
        requiredSymbolLabel: t('common.required'),
      },
    }}
  >
    <Modal
      open={open}
      onClose={handleClose}
      content={
        <form>
          <TextInput
            label={t('home.cta.offlineModal.labels.name')}
            placeholder={t('home.cta.offlineModal.placeholders.name')}
            required
            {...register('name', rules.name)}
          />
          {/* additional fields */}
        </form>
      }
    />
  </DesignSystemLocaleProvider>
)
```

The `t('common.optional')` and `t('common.required')` calls resolve to whatever locale is active at runtime. All `TextInput` components inside the modal receive translated indicator text automatically, with no prop threading required.

---

### Pattern 2 — Provider covering multiple component types

When a screen uses several design system components, a single provider declaration covers all of them.

`src/components/assessment/DiagnosticPreparation/TargetGeography.tsx`

```tsx
const t = useTranslations()

return (
  <DesignSystemLocaleProvider
    labels={{
      CheckboxList: {
        errorPrefix: t('scoping.ecosystems.checkboxListI18nLabels.errorPrefix'),
        expandLabel: t('scoping.ecosystems.checkboxListI18nLabels.expandLabel'),
        hideLabel: t('scoping.ecosystems.checkboxListI18nLabels.hideLabel'),
        optionalLabel: t(
          'scoping.ecosystems.checkboxListI18nLabels.optionalLabel',
        ),
        requiredLabel: t(
          'scoping.ecosystems.checkboxListI18nLabels.requiredLabel',
        ),
        requiredSymbolLabel: t(
          'scoping.ecosystems.checkboxListI18nLabels.requiredSymbolLabel',
        ),
      },
      TextInput: {
        optionalSuffix: t('common.optional'),
        requiredSymbolLabel: t('common.required'),
      },
    }}
  >
    <form>{/* CheckboxList and TextInput fields */}</form>
  </DesignSystemLocaleProvider>
)
```

All six `CheckboxListLabels` keys are overridden using translation keys namespaced to the specific form (`scoping.ecosystems.checkboxListI18nLabels.*`), while the `TextInput` keys reuse shared `common.*` strings already present across the JSON files.

---

### Pattern 3 — Per-component `labels` prop

For the `Password` component — which has 17 label keys covering strength levels, validation rules, and show/hide button text — the project passes all overrides directly on the component instance. This is appropriate when the component appears in a single, isolated location.

`src/components/assessment/PasswordPrompt.tsx`

```tsx
const t = useTranslations()

<Password
  label={t('passwordPrompt.passwordLabel')}
  onChange={handlePasswordChange}
  hideValidations
  required
  labels={{
    showLabel:          t('passwordPrompt.passwordI18nLabels.showPasswordLabel'),
    hideLabel:          t('passwordPrompt.passwordI18nLabels.hidePasswordLabel'),
    showPasswordLabel:  t('passwordPrompt.passwordI18nLabels.showPasswordLabel'),
    hidePasswordLabel:  t('passwordPrompt.passwordI18nLabels.hidePasswordLabel'),
    strengthPrefix:     t('passwordPrompt.passwordI18nLabels.strengthPrefix'),
    strengthVeryWeak:   t('passwordPrompt.passwordI18nLabels.strengthVeryWeak'),
    strengthWeak:       t('passwordPrompt.passwordI18nLabels.strengthWeak'),
    strengthMedium:     t('passwordPrompt.passwordI18nLabels.strengthMedium'),
    strengthStrong:     t('passwordPrompt.passwordI18nLabels.strengthStrong'),
    strengthVeryStrong: t('passwordPrompt.passwordI18nLabels.strengthVeryStrong'),
    lowercaseRule:      t('passwordPrompt.passwordI18nLabels.lowercaseRule'),
    uppercaseRule:      t('passwordPrompt.passwordI18nLabels.uppercaseRule'),
    numberRule:         t('passwordPrompt.passwordI18nLabels.numberRule'),
    specialCharRule:    t('passwordPrompt.passwordI18nLabels.specialCharRule'),
    requirementMet:     t('passwordPrompt.passwordI18nLabels.requirementMet'),
    requirementNotMet:  t('passwordPrompt.passwordI18nLabels.requirementNotMet'),
  }}
/>
```

The translation keys are grouped under a dedicated `passwordPrompt.passwordI18nLabels` namespace in the JSON files, keeping design system label overrides visually distinct from other application strings.

---

### Pattern summary

| Pattern                             | When to use                                                       |
| ----------------------------------- | ----------------------------------------------------------------- |
| Provider — single component type    | Simple screens or modals with one translated component            |
| Provider — multiple component types | Forms and pages mixing several design system components           |
| Per-component `labels` prop         | Isolated instances, or when a component is used in only one place |

All three patterns are compatible with any translation function. The design system requires only pre-resolved strings — it has no dependency on `useTranslations`, `react-intl`, `react-i18next`, or any other runtime.
