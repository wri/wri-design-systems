# Layer Group

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/layers-layergroup--docs)

[LayerGroupDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Layer/LayerGroup/LayerGroupDemo.tsx)

## Import

```js
import { LayerGroupContainer, LayerGroup } from '@worldresources/wri-design-systems'
```

## Usage

Add as many LayerGroups as you need, read the [LayerItem](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerItem) documentation to know more about the props you can use

```html
<LayerGroupContainer defaultValue={['1']}>
  <LayerGroup
    label='Title 1'
    caption='Caption 1'
    value='1'
    layerItems={[
      {
        name: 'layer-1',
        label: 'Layer name 1',
        caption: 'Caption',
        isDefaultSelected: true,
      },
      {
        name: 'layer-2',
        label: 'Layer name 2',
        caption: 'Caption',
      },
    ]}
  />
</LayerGroupContainer>
```

## Props

```ts
type LayerGroupContainerProps = Omit<
  Accordion.RootProps,
  'onChange' | 'colorPalette' | 'variant' | 'size' | 'multiple' | 'collapsible'
> & {
  defaultValue?: string[]
}
```

```ts
type LayerGroupProps = {
  label: string
  caption: string
  value: string
  layerItems: LayerItemProps[]
  onChangeForRadioVariant?: (
    name: string,
    checked: boolean,
    selectedValue?: string,
  ) => void
}
```

## Default index open

```html
<LayerGroupContainer defaultValue={['1']}>
  <LayerGroup
    label='Title 1_1'
    caption='Caption 1'
    value='1'
    layerItems={[
      {
        name: 'layer-10',
        label: 'Layer name 1',
        caption: 'Caption 1',
        isDefaultSelected: true,
      },
      {
        name: 'layer-11',
        label: 'Layer name 2',
        caption: 'Caption 1',
      },
    ]}
  />
</LayerGroupContainer>
```

## Switch and Radio variants

```html
<LayerGroupContainer>
  <LayerGroup
    label='Title 1_1'
    caption='Caption 1'
    value='1'
    layerItems={[
      {
        name: 'layer-10',
        label: 'Layer name 1',
        caption: 'Caption 1',
        isDefaultSelected: true,
      },
      {
        name: 'layer-11',
        label: 'Layer name 2',
        caption: 'Caption 1',
      },
    ]}
  />
  <LayerGroup
    label='Title 2'
    caption='Caption 2'
    value='2'
    layerItems={[
      {
        name: 'layer-20',
        label: 'Layer name 3',
        caption: 'Caption 1',
        variant: 'radio',
      },
      {
        name: 'layer-21',
        label: 'Layer name 4',
        caption: 'Caption 4',
        variant: 'radio',
      },
    ]}
  />
</LayerGroupContainer>
```
