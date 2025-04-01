/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { ButtonGroup, Pagination as ChakraPagination } from '@chakra-ui/react'
import { PaginationProps } from './types'
import IconButton from '../../Forms/Buttons/IconButton'
import { ChevronDownIcon } from '../../icons'
import {
  paginationLabelCompactStyles,
  paginationLabelsGroupStyles,
  paginationLabelStyles,
  paginationPrevNextStyles,
} from './styles'

const Pagination = ({
  totalItems,
  pageSize,
  currentPage,
  compact,
  onPageChange,
}: PaginationProps) => {
  if (compact) {
    return (
      <div aria-label='Pagination'>
        <ChakraPagination.Root
          count={totalItems}
          pageSize={pageSize}
          defaultPage={1}
        >
          <ButtonGroup gap='4' size='sm' variant='ghost'>
            <ChakraPagination.PrevTrigger asChild>
              <IconButton
                css={paginationPrevNextStyles}
                style={{ rotate: '90deg' }}
                icon={
                  <ChevronDownIcon color='var(--chakra-colors-primary-600)' />
                }
                aria-label='Previous page'
              />
            </ChakraPagination.PrevTrigger>
            <ChakraPagination.PageText css={paginationLabelCompactStyles} />
            <ChakraPagination.NextTrigger asChild>
              <IconButton
                css={paginationPrevNextStyles}
                style={{ rotate: '270deg' }}
                icon={
                  <ChevronDownIcon color='var(--chakra-colors-primary-600)' />
                }
                aria-label='Next page'
              />
            </ChakraPagination.NextTrigger>
          </ButtonGroup>
        </ChakraPagination.Root>
      </div>
    )
  }

  return (
    <div aria-label='Pagination'>
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
            <IconButton
              css={paginationPrevNextStyles}
              style={{ rotate: '90deg' }}
              icon={<ChevronDownIcon />}
              aria-label='Previous page'
            />
          </ChakraPagination.PrevTrigger>
          <ChakraPagination.Items
            render={(page) => (
              <IconButton
                css={paginationLabelStyles}
                aria-label={`Page ${page.value}`}
                icon={<p>{page.value}</p>}
              />
            )}
          />
          <ChakraPagination.NextTrigger asChild>
            <IconButton
              css={paginationPrevNextStyles}
              style={{ rotate: '270deg' }}
              icon={<ChevronDownIcon />}
              aria-label='Next page'
            />
          </ChakraPagination.NextTrigger>
        </ButtonGroup>
      </ChakraPagination.Root>
    </div>
  )
}

export default Pagination
