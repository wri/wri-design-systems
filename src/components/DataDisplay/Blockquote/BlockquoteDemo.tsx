import React from 'react'

import Blockquote from '.'
import DemoWrapper from '../../UI/DemoWrapper'
import { InfoIcon } from '../../icons'

const demoQuote =
  'Lorem ipsum dolor sit amet consectetur. Duis egestas ac fermentum urna mauris malesuada at. Augue vel erat vitae habitasse turpis at. Molestie ut arcu risus non enim vel in fermentum. Eget convallis fames arcu pretium malesuada vestibulum. Consectetur ac maecenas semper ac donec.'

const BlockquoteDemo = () => (
  <DemoWrapper title='Blockquote'>
    <div
      style={{
        width: '100%',
        maxWidth: '40rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <Blockquote>{demoQuote}</Blockquote>
      <Blockquote cite='Author Name'>{demoQuote}</Blockquote>
      <Blockquote color='red'>{demoQuote}</Blockquote>
      <Blockquote justify='center'>{demoQuote}</Blockquote>
      <Blockquote justify='end'>{demoQuote}</Blockquote>
      <Blockquote icon={<InfoIcon />}>{demoQuote}</Blockquote>
    </div>
  </DemoWrapper>
)

export default BlockquoteDemo
