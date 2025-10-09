/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { FooterProps } from './types'
import {
  footerContainerStyles,
  footerContentStyles,
  footerLabelStyles,
  footerStyles,
} from './styled'
import { WriLogoBlackAndWhiteIcon } from '../../icons'

const Footer = ({
  children,
  label = '\u00A9 World Resources Institute',
  fixed,
  filled,
  maxWidth,
}: FooterProps) => {
  const actualYear = new Date().getFullYear()

  return (
    <footer css={footerStyles(fixed, filled)}>
      <div css={footerContainerStyles(maxWidth)}>
        <div>
          <WriLogoBlackAndWhiteIcon height='32px' width='91px' />
        </div>
        <div css={footerContentStyles}>{children}</div>
        <div>
          <p css={footerLabelStyles}>
            {label} {actualYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
