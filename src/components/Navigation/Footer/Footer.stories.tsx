// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import FooterStory from '.'

const meta = {
  title: 'Navigation/Footer',
  component: FooterStory,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 350,
      },

      description: {
        component:
          'Site footer for WRI applications. Contains links, social icons, and legal text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: '`children` content', control: false },
    label: { description: '`label` text', control: 'text' },
    fixed: { description: '`fixed` flag', control: 'boolean' },
    filled: { description: '`filled` flag', control: 'boolean' },
    maxWidth: { description: '`maxWidth` value', control: false },
    additionalLogos: {
      description: '`additionalLogos` content',
      control: false,
    },
  },
} satisfies Meta<typeof FooterStory>

export default meta
type Story = StoryObj<typeof meta>

export const Footer: Story = {
  args: {
    children: (
      <>
        <a
          href='https://www.wri.org/about/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy policy
        </a>
        <a
          href='https://www.wri.org/about/wri-data-platforms-tos'
          target='_blank'
          rel='noreferrer'
        >
          Terms of service
        </a>
      </>
    ),
  },
}

export const Filled: Story = {
  args: {
    filled: true,
    children: (
      <>
        <a
          href='https://www.wri.org/about/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy policy
        </a>
        <a
          href='https://www.wri.org/about/wri-data-platforms-tos'
          target='_blank'
          rel='noreferrer'
        >
          Terms of service
        </a>
      </>
    ),
  },
}

export const Fixed: Story = {
  args: {
    filled: true,
    fixed: true,
    children: (
      <>
        <a
          href='https://www.wri.org/about/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy policy
        </a>
        <a
          href='https://www.wri.org/about/wri-data-platforms-tos'
          target='_blank'
          rel='noreferrer'
        >
          Terms of service
        </a>
      </>
    ),
  },
}

export const MaxWidth: Story = {
  args: {
    maxWidth: 256,
    filled: true,
    fixed: true,
    children: (
      <>
        <a
          href='https://www.wri.org/about/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy policy
        </a>
        <a
          href='https://www.wri.org/about/wri-data-platforms-tos'
          target='_blank'
          rel='noreferrer'
        >
          Terms of service
        </a>
      </>
    ),
  },
}

export const WithAdditionalLogos: Story = {
  args: {
    maxWidth: 360,
    filled: true,
    fixed: true,
    additionalLogos: [
      <img
        src='https://placehold.co/91x32/0066CC/FFFFFF?text=Partner+1'
        alt='Partner Logo 1'
        height='2rem'
      />,
      <img
        src='https://placehold.co/91x32/00A86B/FFFFFF?text=Partner+2'
        alt='Partner Logo 2'
        height='2rem'
      />,
    ],
    children: (
      <>
        <a
          href='https://www.wri.org/about/privacy-policy'
          target='_blank'
          rel='noreferrer'
        >
          Privacy policy
        </a>
        <a
          href='https://www.wri.org/about/wri-data-platforms-tos'
          target='_blank'
          rel='noreferrer'
        >
          Terms of service
        </a>
      </>
    ),
  },
}
