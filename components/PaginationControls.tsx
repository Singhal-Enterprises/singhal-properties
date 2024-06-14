'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  currentPage: number
  totalPages: number
  perPage: number
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  currentPage,
  totalPages,
  perPage
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filter = searchParams.get('filter') ?? ''

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())
    if (filter) {
      params.set('filter', filter)
    }
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className='flex gap-2 justify-center mt-4'>
      <Button
        variant={'outline'}
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(currentPage - 1)}>
        Prev Page
      </Button>

      <div className='flex justify-center items-center'>
        {currentPage} / {totalPages}
      </div>

      <Button
        variant={'outline'}
        disabled={!hasNextPage}
        onClick={() => handlePageChange(currentPage + 1)}>
        Next Page
      </Button>
    </div>
  )
}

export default PaginationControls
