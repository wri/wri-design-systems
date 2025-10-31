/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { getThemedColor } from '../../lib/theme'

const demoWrapperContainerStyles = css`
  width: 100%;
  padding-bottom: 30px;
`

const demoWrapperTitleStyles = css`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
  margin-bottom: 20px;
`

const demoWrapperChildrenContainerStyles = css`
  padding: 0px 24px;
`

type DemoWrapperProps = {
  title: string
  children: React.ReactNode
}

const DemoWrapper = ({ title, children }: DemoWrapperProps) => {
  const id = title.toLowerCase().replace(' ', '-')

  return (
    <div css={demoWrapperContainerStyles} id={id}>
      <h2 css={demoWrapperTitleStyles}>{title}</h2>
      <div css={demoWrapperChildrenContainerStyles}>{children}</div>
    </div>
  )
}

export default DemoWrapper
