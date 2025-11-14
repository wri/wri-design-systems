import { Link, useLocation } from 'react-router-dom'

import { Breadcrumb } from '../..'
import { CheckIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const BreadcrumbDemo = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').slice(1)
  const breadcrumbs = paths.map((p, index) => ({
    label: p,
    link: `/${paths.slice(0, index + 1).join('/')}`,
    icon: <CheckIcon />,
  }))

  return (
    <DemoWrapper title='Breadcrumb'>
      <div>
        <Link style={{ marginRight: '10px' }} to='/'>
          HOME
        </Link>
        <Link style={{ marginRight: '10px' }} to='/page1'>
          PAGE1
        </Link>
        <Link style={{ marginRight: '10px' }} to='/page1/page2'>
          PAGE2
        </Link>
        <Link style={{ marginRight: '10px' }} to='/page1/page2/page3'>
          PAGE3
        </Link>
        <Link style={{ marginRight: '10px' }} to='/page1/page2/page3/page4'>
          PAGE4
        </Link>
        <Link
          style={{ marginRight: '10px' }}
          to='/page1/page2/page3/page4/page5'
        >
          PAGE5
        </Link>
        <Link
          style={{ marginRight: '10px' }}
          to='/page1/page2/page3/page4/page5/page6'
        >
          PAGE6
        </Link>
        <br />
        <br />
        <Breadcrumb links={breadcrumbs} linkRouter={Link} />
        <Breadcrumb links={breadcrumbs} separator='--' linkRouter={Link} />
        <Breadcrumb links={breadcrumbs} maxItems={5} linkRouter={Link} />
      </div>
    </DemoWrapper>
  )
}

export default BreadcrumbDemo
