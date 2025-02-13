// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'

import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BreadcrumbProps } from './types'
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from './styled'
import { ChevronDownIcon } from '../../icons'

const Breadcrumb = ({ links, separator, maxItems = 99 }: BreadcrumbProps) => {
  const [showEllipsis, setShowEllipsis] = useState(links.length > maxItems)

  useEffect(() => {
    setShowEllipsis(links.length > maxItems)
  }, [links.length])

  return (
    <ChakraBreadcrumb.Root>
      <ChakraBreadcrumb.List gap='16px'>
        {showEllipsis ? (
          <>
            <BreadcrumbItem>
              <Link to={links[0].link}>
                {links[0].icon}
                {links[0].label}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              {separator || <ChevronDownIcon rotate='270' />}
            </BreadcrumbSeparator>
            <li className='chakra-breadcrumb__item'>
              <BreadcrumbEllipsis
                type='button'
                onClick={() => setShowEllipsis(false)}
              >
                ...
              </BreadcrumbEllipsis>
            </li>
            <BreadcrumbSeparator>
              {separator || <ChevronDownIcon rotate='270' />}
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <p aria-current='page' aria-label={links[links.length - 1].label}>
                {links[links.length - 1].icon}
                {links[links.length - 1].label}
              </p>
            </BreadcrumbItem>
          </>
        ) : (
          links.map((link, idx) =>
            link?.label ? (
              <React.Fragment key={link.label}>
                <BreadcrumbItem>
                  {idx < links.length - 1 ? (
                    <Link to={link.link}>
                      {link.icon}
                      {link.label}
                    </Link>
                  ) : (
                    <p aria-current='page' aria-label={link.label}>
                      {link.label && link.icon ? link.icon : ''}
                      {link.label}
                    </p>
                  )}
                </BreadcrumbItem>
                {idx < links.length - 1 ? (
                  <BreadcrumbSeparator>
                    {separator || <ChevronDownIcon rotate='270' />}
                  </BreadcrumbSeparator>
                ) : null}
              </React.Fragment>
            ) : null,
          )
        )}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  )
}

export default Breadcrumb
