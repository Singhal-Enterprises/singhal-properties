'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

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
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(currentPage - 1)}>
        Prev Page
      </button>

      <div>
        {currentPage} / {totalPages}
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => handlePageChange(currentPage + 1)}>
        Next Page
      </button>
    </div>
  )
}

export default PaginationControls
