// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import PasswordStory from '.'
import { DesignSystemLocaleProvider } from '../../..'

const meta = {
  title: 'Forms/Inputs/Password',
  component: PasswordStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PasswordStory>

export default meta
type Story = StoryObj<typeof meta>

export const Password: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    required: true,
  },
}

export const RulesDisabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    disabledRules: {
      uppercase: true,
      lowercase: true,
      numbers: true,
      specialCharacters: true,
    },
    required: true,
  },
}

export const CustomMinCharacters: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    minLength: 10,
    required: true,
  },
}

export const NoValidations: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    hideValidations: true,
    required: true,
  },
}

/**
 * Override specific labels via the `labels` prop for one-off translations.
 * Works with any i18n library — pass pre-translated strings directly.
 */
export const WithI18nLabels: Story = {
  args: {
    label: 'Contraseña',
    caption: 'Introduce tu contraseña',
    required: true,
    labels: {
      showLabel: 'Mostrar',
      hideLabel: 'Ocultar',
      showPasswordLabel: 'Mostrar contraseña',
      hidePasswordLabel: 'Ocultar contraseña',
      strengthPrefix: 'Seguridad:',
      strengthVeryWeak: 'Muy débil',
      strengthWeak: 'Débil',
      strengthMedium: 'Media',
      strengthStrong: 'Fuerte',
      strengthVeryStrong: 'Muy fuerte',
      requirementMet: 'Requisito cumplido.',
      requirementNotMet: 'Requisito no cumplido.',
      minLengthRule: (min) => `Usa un mínimo de ${min} caracteres`,
      uppercaseRule: 'Usa una letra mayúscula',
      lowercaseRule: 'Usa una letra minúscula',
      numberRule: 'Usa un número',
      specialCharRule: 'Usa un carácter especial',
    },
  },
}

/**
 * Use `DesignSystemLocaleProvider` for app-wide translations.
 * All components inside the provider automatically receive the configured labels.
 */
export const WithI18nContext: Story = {
  render: (args) => (
    <DesignSystemLocaleProvider
      labels={{
        Password: {
          showLabel: 'Afficher',
          hideLabel: 'Masquer',
          showPasswordLabel: 'Afficher le mot de passe',
          hidePasswordLabel: 'Masquer le mot de passe',
          strengthPrefix: 'Sécurité :',
          strengthVeryWeak: 'Très faible',
          strengthWeak: 'Faible',
          strengthMedium: 'Moyen',
          strengthStrong: 'Fort',
          strengthVeryStrong: 'Très fort',
          requirementMet: 'Critère satisfait.',
          requirementNotMet: 'Critère non satisfait.',
          minLengthRule: (min) => `Utilisez au moins ${min} caractères`,
          uppercaseRule: 'Utilisez une lettre majuscule',
          lowercaseRule: 'Utilisez une lettre minuscule',
          numberRule: 'Utilisez un chiffre',
          specialCharRule: 'Utilisez un caractère spécial',
        },
      }}
    >
      <PasswordStory {...args} />
    </DesignSystemLocaleProvider>
  ),
  args: {
    label: 'Mot de passe',
    caption: 'Entrez votre mot de passe',
    required: true,
  },
}
