/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Menu } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'
import {
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

const MenuDemo = () => (
  <DemoWrapper title='Menu'>
    <div
      style={{
        display: 'flex',
        gap: '1.25rem',
        maxWidth: '15rem',
        flexWrap: 'wrap',
      }}
    >
      <Menu
        label='Open Menu'
        items={[
          {
            label: 'Label with link',
            link: 'https://www.google.com',
            value: 'label-1-1',
          },
          {
            label: 'Label',
            caption: 'Caption',
            command: '⌘E',
            value: 'label-1-2',
          },
          {
            label: 'Label',
            caption: 'Caption',
            startIcon: <PlaceholderIcon />,
            value: 'label-1-3',
          },
          {
            label: 'Label',
            startIcon: <PlaceholderIcon />,
            value: 'label-1-4',
          },
          {
            label: 'Label',
            caption: 'Caption',
            endIcon: <PlaceholderIcon />,
            value: 'label-1-5',
          },
          {
            label: 'Label',
            endIcon: <PlaceholderIcon />,
            value: 'label-1-6',
          },
          {
            label: 'Label',
            value: 'label-1-7',
            disabled: true,
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='With Group Menu'
        groups={[
          {
            title: 'Group 1',
            items: [
              {
                label: 'Label',
                value: 'label-2-1',
              },
              {
                label: 'Label',
                value: 'label-2-2',
              },
            ],
          },
          {
            title: 'Group 2',
            items: [
              {
                label: 'Label',
                value: 'label-2-3',
              },
              {
                label: 'Label',
                value: 'label-2-4',
              },
              {
                label: 'Label',
                value: 'label-2-5',
              },
            ],
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='With Submenu'
        items={[
          {
            label: 'Label',
            value: 'label-3-1',
          },
          {
            label: 'Label',
            value: 'label-3-2',
            submenu: [
              {
                label: 'Label',
                value: 'label-3-2-1',
              },
              {
                label: 'Label',
                value: 'label-3-2-2',
              },
            ],
          },
          {
            label: 'Label',
            value: 'label-3-3',
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='Language (multiple)'
        selectionMode='multiple'
        defaultSelectedValues={['label-5-1']}
        items={[
          { label: 'English', value: 'label-5-1' },
          { label: 'Spanish', value: 'label-5-2' },
          { label: 'French', value: 'label-5-3' },
          { label: 'German', value: 'label-5-4', disabled: true },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='View mode (radio)'
        selectionMode='radio'
        defaultSelectedValues={['label-6-1']}
        items={[
          { label: 'Map', value: 'label-6-1' },
          { label: 'Table', value: 'label-6-2' },
          { label: 'Chart', value: 'label-6-3' },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='View mode (radio)'
        selectionMode='radio'
        defaultSelectedValues={['label-6-1']}
        items={[
          { label: 'Map', value: 'label-6-1' },
          { label: 'Table', value: 'label-6-2' },
          { label: 'Chart', value: 'label-6-3' },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
        size='small'
      />

      <Menu
        label='Navbar Item'
        triggerVariant='navbarItem'
        items={[
          {
            label: 'Label',
            value: 'label-7-1',
          },
          {
            label: 'Label',
            value: 'label-7-2',
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='Navbar Item (active)'
        triggerVariant='navbarItem'
        active
        items={[
          {
            label: 'Label',
            value: 'label-9-1',
          },
          {
            label: 'Label',
            value: 'label-9-2',
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
      />

      <Menu
        label='Disabled Menu'
        disabled
        items={[
          {
            label: 'Label',
            value: 'label-10-1',
          },
          {
            label: 'Label',
            value: 'label-10-2',
          },
        ]}
      />

      <div
        css={css`
          display: flex;
          justify-content: center;
          padding: ${getThemedSpacing(500)};
          background-color: ${getThemedColor('neutral', 900)};
          border-radius: ${getThemedRadius(300)};
        `}
      >
        <Menu
          label='Navbar Item (dark)'
          triggerVariant='navbarItem'
          theme='dark'
          items={[
            {
              label: 'Label',
              value: 'label-8-1',
            },
            {
              label: 'Label',
              value: 'label-8-2',
            },
          ]}
          onSelect={(value) => console.log('onSelect', value)}
        />
      </div>

      <Menu
        label='With Custom Trigger'
        items={[
          {
            label: 'Label',
            value: 'label-4-1',
          },
          {
            label: 'Label',
            value: 'label-4-2',
            submenu: [
              {
                label: 'Label',
                value: 'label-4-2-1',
              },
              {
                label: 'Label',
                value: 'label-4-2-2',
              },
            ],
          },
          {
            label: 'Label',
            value: 'label-4-3',
          },
        ]}
        onSelect={(value) => console.log('onSelect', value)}
        // Fully custom trigger: any element can open the menu. The legacy
        // navigation trigger is built in as `triggerVariant='navbarItem'`.
        customTrigger={
          <button
            type='button'
            aria-label='Open custom trigger menu'
            css={css`
              display: inline-flex;
              align-items: center;
              gap: ${getThemedSpacing(100)};
              padding: ${getThemedSpacing(50)} ${getThemedSpacing(300)};
              cursor: pointer;
              font-size: 1rem;
              color: ${getThemedColor('neutral', 800)};
              background-color: ${getThemedColor('neutral', 100)};
              border: 1px solid ${getThemedColor('neutral', 300)};
              border-radius: 9999px;
              &:hover {
                background-color: ${getThemedColor('neutral', 200)};
              }
              &:focus-visible {
                outline: 2px solid ${getThemedColor('primary', 700)};
                outline-offset: ${getThemedSpacing(50)};
              }
            `}
          >
            <PlaceholderIcon />
            Open Menu
          </button>
        }
      />
    </div>
  </DemoWrapper>
)

export default MenuDemo
