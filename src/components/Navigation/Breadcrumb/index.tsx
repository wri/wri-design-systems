/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useEffect, useState, Fragment } from 'react'

import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'
import { BreadcrumbProps } from './types'
import {
  breadcrumbEllipsisStyles,
  breadcrumbItemStyles,
  breadcrumbSeparatorStyles,
} from './styled'
import { ChevronDownIcon } from '../../icons'

const Breadcrumb = ({
  links,
  separator,
  maxItems = 99,
  linkRouter,
  size = 'default',
}: BreadcrumbProps) => {
  const [showEllipsis, setShowEllipsis] = useState(links.length > maxItems)

  useEffect(() => {
    setShowEllipsis(links.length > maxItems)
  }, [links.length])

  const Link = linkRouter

  return (
    <ChakraBreadcrumb.Root>
      <ChakraBreadcrumb.List gap={size === 'small' ? '6px' : '10px'}>
        {showEllipsis ? (
          <>
            <ChakraBreadcrumb.Item css={breadcrumbItemStyles(size)}>
              <Link to={links[0].link} href={links[0].link}>
                {links[0].icon}
                {links[0].label}
              </Link>
            </ChakraBreadcrumb.Item>
            <ChakraBreadcrumb.Separator css={breadcrumbSeparatorStyles(size)}>
              {separator || <ChevronDownIcon rotate='270' />}
            </ChakraBreadcrumb.Separator>
            <li className='chakra-breadcrumb__item'>
              <button
                css={breadcrumbEllipsisStyles}
                type='button'
                onClick={() => setShowEllipsis(false)}
              >
                ...
              </button>
            </li>
            <ChakraBreadcrumb.Separator css={breadcrumbSeparatorStyles(size)}>
              {separator || <ChevronDownIcon rotate='270' />}
            </ChakraBreadcrumb.Separator>
            <ChakraBreadcrumb.Item css={breadcrumbItemStyles(size)}>
              <p aria-current='page' aria-label={links[links.length - 1].label}>
                {links[links.length - 1].icon}
                {links[links.length - 1].label}
              </p>
            </ChakraBreadcrumb.Item>
          </>
        ) : (
          links.map((link, idx) =>
            link?.label ? (
              <Fragment key={link.label}>
                <ChakraBreadcrumb.Item css={breadcrumbItemStyles(size)}>
                  {idx < links.length - 1 ? (
                    <Link to={link.link} href={link.link}>
                      {link.icon}
                      {link.label}
                    </Link>
                  ) : (
                    <p aria-current='page' aria-label={link.label}>
                      {link.label && link.icon ? link.icon : ''}
                      {link.label}
                    </p>
                  )}
                </ChakraBreadcrumb.Item>
                {idx < links.length - 1 ? (
                  <ChakraBreadcrumb.Separator
                    css={breadcrumbSeparatorStyles(size)}
                  >
                    {separator || <ChevronDownIcon rotate='270' />}
                  </ChakraBreadcrumb.Separator>
                ) : null}
              </Fragment>
            ) : null,
          )
        )}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  )
}

export default Breadcrumb
