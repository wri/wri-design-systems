# Mobile Search

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-mobile-search--docs)

[MobileSearchDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/MobileSearch/MobileSearchDemo.tsx)

## Import

```tsx
import { MobileSearch } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const recentItems = [
  {
    id: '1',
    label: 'Location Name 1',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: '2',
    label: 'Location Name 2',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
]

<MobileSearch
  items={recentItems}
  placeholder='Search'
  onItemClick={(item) => console.log(item)}
  onCancel={() => console.log('cancelled')}
/>
```

## Props

| Prop              | Type                                               | Default                 | Description                                                              |
| ----------------- | -------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------ |
| `autoFocus`       | `boolean`                                          | `true`                  | Focuses the search input on mount                                        |
| `autoComplete`    | `string`                                           | —                       | HTML autocomplete attribute for the input                                |
| `disabled`        | `boolean`                                          | —                       | Disables the search input                                                |
| `id`              | `string`                                           | —                       | HTML id attribute for the input                                          |
| `items`           | `ListItemProps[]`                                  | `[]`                    | List items shown as results, filtered by the current query               |
| `labels`          | `Partial<MobileSearchLabels>`                      | —                       | Override internal UI labels for internationalization support             |
| `name`            | `string`                                           | —                       | HTML name attribute for the input                                        |
| `onBlur`          | `(e: React.FocusEvent<HTMLInputElement>) => void`  | —                       | Called when the input loses focus                                        |
| `onChange`        | `(e: React.ChangeEvent<HTMLInputElement>) => void` | —                       | Called on each input change event                                        |
| `onFocus`         | `(e: React.FocusEvent<HTMLInputElement>) => void`  | —                       | Called when the input gains focus and reopens the results                |
| `onItemClick`     | `(item: ListItemProps) => void`                    | —                       | Called with the clicked item when a result item is clicked               |
| `onQueryChange`   | `(query: string) => void`                          | —                       | Called with the current query string whenever it changes                 |
| `placeholder`     | `string`                                           | `labels.inputAriaLabel` | Placeholder and aria-label for the search input                          |
| `readOnly`        | `boolean`                                          | —                       | Makes the search input read-only                                         |
| `showInfoMessage` | `boolean`                                          | `true`                  | Shows the info InlineMessage above the results list                      |
| `value`           | `string`                                           | —                       | Controlled input value, uncontrolled internal state is used when omitted |

### Supporting types

- `ListItemProps` — item shape from `DataDisplay/List`: `{ id?, label, searchLabel?, caption?, icon?, value?, ... }`
- `MobileSearchLabels` — full shape documented in the Labels (i18n) section below

## Labels (i18n)

All internal user-visible strings can be overridden via the `labels` prop or globally via `DesignSystemLocaleProvider`.

```ts
type MobileSearchLabels = {
  /** aria-label on the search input. Default: "Search" */
  inputAriaLabel: string
  /** Label on the cancel button. Default: "Cancel" */
  cancelLabel: string
  /** Heading shown above the list when no query is typed. Default: "Recent searches" */
  recentSearchesTitle: string
  /** Heading template when results are filtered. Default: (n) => `Showing ${n} matching results` */
  matchingResultsTitle: (count: number) => string
  /** Label text inside the InlineMessage when no query. Default: "Label" */
  infoLabel: string
}
```

### Override via prop

```tsx
<MobileSearch
  items={recentItems}
  labels={{
    cancelLabel: 'Cancelar',
    recentSearchesTitle: 'Búsquedas recientes',
    matchingResultsTitle: (n) => `Mostrando ${n} resultados`,
  }}
/>
```

### Override globally via provider

```tsx
<DesignSystemLocaleProvider
  labels={{
    MobileSearch: {
      cancelLabel: 'Cancelar',
      recentSearchesTitle: 'Búsquedas recientes',
      matchingResultsTitle: (n) => `Mostrando ${n} resultados`,
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```
