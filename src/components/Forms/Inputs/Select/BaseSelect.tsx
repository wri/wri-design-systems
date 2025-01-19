import type { CollectionItem } from '@chakra-ui/react'
import { Select as ChakraSelect, Portal } from '@chakra-ui/react'
import * as React from 'react'
import { ChevronDownIcon } from '../../../icons'

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraSelect.ControlProps
>((props, ref) => {
  const { children, ...rest } = props
  return (
    <ChakraSelect.Control {...rest}>
      <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup>
        <ChakraSelect.Indicator>
          <ChevronDownIcon />
        </ChakraSelect.Indicator>
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Control>
  )
})

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  ChakraSelect.ContentProps
>((props, ref) => {
  const { ...rest } = props
  return (
    <Portal>
      <ChakraSelect.Positioner>
        <ChakraSelect.Content {...rest} ref={ref} />
      </ChakraSelect.Positioner>
    </Portal>
  )
})

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  ChakraSelect.ItemProps
>((props, ref) => {
  const { item, children, ...rest } = props
  return (
    <ChakraSelect.Item key={item.value} item={item} {...rest} ref={ref}>
      {children}
      {/* <ChakraSelect.ItemIndicator /> */}
    </ChakraSelect.Item>
  )
})

interface SelectValueTextProps
  extends Omit<ChakraSelect.ValueTextProps, 'children'> {
  children?(items: CollectionItem[]): React.ReactNode
}

export const SelectValueText = React.forwardRef<
  HTMLSpanElement,
  SelectValueTextProps
>((props, ref) => {
  const { children, ...rest } = props
  return (
    <ChakraSelect.ValueText {...rest} ref={ref}>
      <ChakraSelect.Context>
        {(select) => {
          const items = select.selectedItems
          if (items.length === 0) return props.placeholder
          if (children) return children(items)
          if (items.length === 1)
            return select.collection.stringifyItem(items[0])
          return `${items.length} selected`
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  )
})

export const SelectRoot = React.forwardRef<
  HTMLDivElement,
  ChakraSelect.RootProps
>((props, ref) => (
  <ChakraSelect.Root
    {...props}
    ref={ref}
    positioning={{ sameWidth: true, ...props.positioning }}
  >
    {props.asChild ? (
      props.children
    ) : (
      <>
        <ChakraSelect.HiddenSelect />
        {props.children}
      </>
    )}
  </ChakraSelect.Root>
)) as ChakraSelect.RootComponent

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
  label: React.ReactNode
}

export const SelectItemGroup = React.forwardRef<
  HTMLDivElement,
  SelectItemGroupProps
>((props, ref) => {
  const { children, label, ...rest } = props
  return (
    <ChakraSelect.ItemGroup {...rest} ref={ref}>
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  )
})

export const SelectLabel = ChakraSelect.Label
export const SelectItemText = ChakraSelect.ItemText
