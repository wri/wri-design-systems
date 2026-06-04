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

```ts
type MobileSearchProps = Omit<
  ChakraInputProps,
  'size' | 'variant' | 'colorPalette' | 'defaultChecked'
> & {
  value?: string
  placeholder?: string
  showInfoMessage?: boolean
  items?: ListItemProps[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onQueryChange?: (query: string) => void
  onCancel?: () => void
  onItemClick?: (item: ListItemProps) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MobileSearchLabels>
}
```

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
