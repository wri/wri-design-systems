import { Footer } from '../..'

const FooterDemo = () => (
  <Footer
    maxWidth={1440}
    filled
    fixed
    additionalLogos={[
      <img
        src='https://placehold.co/91x32/b0b0b0/31343C?font=playfair-display&text=Partner+Logo'
        alt='Partner Logo'
        height='32px'
      />
    ]}
  >
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
  </Footer>
)

export default FooterDemo
