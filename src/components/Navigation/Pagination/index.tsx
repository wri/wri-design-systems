/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { ButtonGroup, Pagination as ChakraPagination } from '@chakra-ui/react'
import { PaginationProps } from './types'
import IconButton from '../../Forms/Actions/IconButton'
import { ChevronDownIcon } from '../../icons'
import {
  paginationLabelCompactStyles,
  paginationLabelsGroupStyles,
  paginationLabelStyles,
  paginationPrevNextStyles,
} from './styles'
import Button from '../../Forms/Actions/Button'
import { useLabels } from '../../../lib/i18n/useLabels'

const Pagination = ({
  totalItems,
  pageSize,
  currentPage,
  variant = 'default',
  onPageChange,
  labels,
}: PaginationProps) => {
  const l = useLabels('Pagination', labels)
  const isCompact = variant === 'compact' || variant === 'compact-with-buttons'
  const isCompactWithButtons = variant === 'compact-with-buttons'

  return (
    <div aria-label={l.paginationLabel}>
      <ChakraPagination.Root
        count={totalItems}
        pageSize={pageSize}
        defaultPage={currentPage}
        onPageChange={(e) => onPageChange && onPageChange(e.page)}
        siblingCount={1}
      >
        <ButtonGroup
          gap='2'
          size='sm'
          variant='ghost'
          css={paginationLabelsGroupStyles}
        >
          <ChakraPagination.PrevTrigger asChild>
            {isCompactWithButtons ? (
              <Button
                variant='secondary'
                label={String(l.previousLabel)}
                size='small'
                leftIcon={
                  <ChevronDownIcon
                    style={{ rotate: '90deg' }}
                    color='var(--chakra-colors-primary-500)'
                  />
                }
              />
            ) : (
              <IconButton
                css={paginationPrevNextStyles}
                style={{ rotate: '90deg' }}
                icon={<ChevronDownIcon />}
                aria-label={l.previousPageLabel}
              />
            )}
          </ChakraPagination.PrevTrigger>
          {isCompact ? (
            <ChakraPagination.PageText css={paginationLabelCompactStyles} />
          ) : (
            <ChakraPagination.Items
              render={(page) => (
                <IconButton
                  css={paginationLabelStyles}
                  aria-label={l.pageLabel(page.value)}
                  icon={<p>{page.value}</p>}
                />
              )}
            />
          )}
          <ChakraPagination.NextTrigger asChild>
            {isCompactWithButtons ? (
              <Button
                variant='secondary'
                label={String(l.nextLabel)}
                size='small'
                rightIcon={
                  <ChevronDownIcon
                    style={{ rotate: '270deg' }}
                    color='var(--chakra-colors-primary-500)'
                  />
                }
              />
            ) : (
              <IconButton
                css={paginationPrevNextStyles}
                style={{ rotate: '270deg' }}
                icon={<ChevronDownIcon />}
                aria-label={l.nextPageLabel}
              />
            )}
          </ChakraPagination.NextTrigger>
        </ButtonGroup>
      </ChakraPagination.Root>
    </div>
  )
}

export default Pagination
