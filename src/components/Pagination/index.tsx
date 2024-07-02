'use client'

import PaginationButton from './Button'
import PaginationContent from './Content'
import PaginationItem from './Item'
import PaginationRoot from './Root'

import { cn } from '@/lib/utils'

import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { HTMLAttributes } from 'react'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  totalRecords?: number
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}

const Pagination = ({
  totalPages = 0,
  currentPage = 0,
  totalRecords = 0,
  onPageChange,
  className,
  ...props
}: PaginationProps) => (
  <div
    className={cn(
      'flex flex-col-reverse items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 sm:flex-row',
      totalPages <= 0 && 'hidden',
      className,
    )}
    {...props}
  >
    <span>{totalRecords} records found</span>
    <div className="flex items-center gap-4">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div>
        <PaginationRoot>
          <PaginationContent>
            <PaginationItem>
              <PaginationButton disabled={currentPage <= 1} onClick={() => onPageChange?.(1)}>
                <CaretDoubleLeft />
              </PaginationButton>
            </PaginationItem>
            <PaginationItem>
              <PaginationButton
                disabled={currentPage <= 1}
                onClick={() => onPageChange?.(currentPage - 1)}
              >
                <CaretLeft />
              </PaginationButton>
            </PaginationItem>

            <PaginationItem>
              <PaginationButton
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange?.(currentPage + 1)}
              >
                <CaretRight />
              </PaginationButton>
            </PaginationItem>
            <PaginationItem>
              <PaginationButton
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange?.(totalPages)}
              >
                <CaretDoubleRight />
              </PaginationButton>
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      </div>
    </div>
  </div>
)
Pagination.displayName = 'Pagination'

export default Pagination
