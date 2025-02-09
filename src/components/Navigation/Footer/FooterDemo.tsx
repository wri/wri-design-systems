import { Footer } from '../..'

const FooterDemo = () => (
  <Footer maxWidth={1440} filled fixed>
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
