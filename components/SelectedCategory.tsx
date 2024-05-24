"use client";
import { categoryItems } from '@/app/lib/categoryItems';
import { Card, CardHeader } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export function SelectedCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
        undefined
      );
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full sm:w-4/5 lg:w-3/5 mx-auto mb-36">
            {categoryItems.map((item) => (
                <div key={item.id} className="cursor-pointer">
                    <Card
                    className={selectedCategory === item.name ? "border-primary" : ""}
                    onClick={() => setSelectedCategory(item.name)}
                  >
                        <CardHeader className='flex items-center opacity-80'>
                            <FontAwesomeIcon icon={item.icon} height={24} width={24} />
                            <p className='text-sm font-medium ml-2'>{item.title}</p>
                        </CardHeader> 
                    </Card>
                </div>
            ))}
        </div>
    );
}
