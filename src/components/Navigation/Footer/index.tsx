// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { FooterProps } from './types'
import {
  FooterContainer,
  FooterContent,
  FooterLabel,
  StyledFooter,
} from './styled'
import { WriIcon } from '../../icons'

const Footer = ({
  children,
  label = '©️World Resources Institute',
  fixed,
  filled,
  maxWidth,
}: FooterProps) => {
  const actualYear = new Date().getFullYear()

  return (
    <StyledFooter fixed={fixed} filled={filled}>
      <FooterContainer maxWidth={maxWidth}>
        <div>
          <WriIcon height='32px' width='91px' />
        </div>
        <FooterContent>{children}</FooterContent>
        <div>
          <FooterLabel>
            {label} {actualYear}
          </FooterLabel>
        </div>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
