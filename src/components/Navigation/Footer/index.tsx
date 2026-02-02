/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { FooterProps } from './types'
import {
  footerContainerStyles,
  footerContentStyles,
  footerLabelStyles,
  footerStyles,
  footerLogosContainerStyles,
} from './styled'
import { WriLogoBlackAndWhiteIcon } from '../../icons'

const Footer = ({
  children,
  label = '\u00A9 World Resources Institute',
  fixed,
  filled,
  maxWidth,
  additionalLogos,
}: FooterProps) => {
  const actualYear = new Date().getFullYear()

  return (
    <footer css={footerStyles(fixed, filled)}>
      <div css={footerContainerStyles(maxWidth)}>
        <div css={footerLogosContainerStyles}>
          <WriLogoBlackAndWhiteIcon height='32px' width='91px' />
          {/* eslint-disable-next-line react/no-array-index-key */}
          {additionalLogos && additionalLogos.map((logo, index) => <div key={index}>{logo}</div>)}
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
