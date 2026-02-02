import { Footer } from '../..'

const FooterDemo = () => (
  <Footer
    maxWidth={1440}
    filled
    fixed
    additionalLogos={[
      <img
        src='https://placehold.co/91x32/0066CC/FFFFFF?text=Partner+1'
        alt='Partner Logo 1'
        height='32px'
      />,
      <img
        src='https://placehold.co/91x32/00A86B/FFFFFF?text=Partner+2'
        alt='Partner Logo 2'
        height='32px'
      />,
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
