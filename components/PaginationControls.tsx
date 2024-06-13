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

  const page = Number(searchParams.get('page') ?? '1')
  const per_page = Number(searchParams.get('per_page') ?? '4')

  return (
    <div className='flex gap-2 justify-center mt-4'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${page - 1}&per_page=${per_page}`)
        }}>
        Prev Page
      </button>

      <div>
        {currentPage} / {totalPages}
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${page + 1}&per_page=${per_page}`)
        }}>
        Next Page
      </button>
    </div>
  )
}

export default PaginationControls
