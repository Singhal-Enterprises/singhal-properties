"use client";

import { categoryItems } from '@/app/lib/categoryItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { cn } from "@/lib/utils";

const FilterItems = () => {
    const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className='flex gap-x-10 mt-5 justify-center items-center overflow-x-scroll no-scrollbar'>
        {categoryItems.map((item)=>(
            <Link           key={item.id}
            href={pathname + "?" + createQueryString("filter", item.name)}
            className={cn(
              search === item.name
                ? "border-b-2 border-black pb-2 flex-shrink-0"
                : "opacity-70 flex-shrink-0",
              "flex flex-col gap-y-3 items-center"
            )}>
                <div className='relative w-6 h-6'>
                <FontAwesomeIcon icon={item.icon} height={24} width={24} />
                </div>
                <p className='text-sm font-medium'>{item.title}</p>
            </Link>
            
        ))}
    </div>
  )
}

export default FilterItems