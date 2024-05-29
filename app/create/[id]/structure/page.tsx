import { Button } from "@/components/ui/button";
import {SelectedCategory} from "../../../../components/SelectedCategory";
import Link from 'next/link';
import { createCategoryPage } from "@/app/actions";
import { CreationBottomBar } from "@/components/CreationBottomBar";

export default function StructureRoute({params}: {params: {id: string}}) {
    return (
    <>
    <div className="w-3/5 mx-auto">
    <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Select Your Property Type
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectedCategory />
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24 dark:bg-black">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Button variant={"secondary"} size="lg" asChild>
              <Link href='/'>
              Cancel
              </Link>
              </Button>

              <CreationBottomBar />
          </div>
        </div>
      </form>
    </>
        
    )
}