import { Button } from "@/components/ui/button";
import {SelectedCategory} from "../../../../components/SelectedCategory";

export default function StructureRoute() {
    return (
    <>
    <div className="w-3/5 mx-auto">
    <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Select Your Property Type
        </h2>
      </div>

      <form action="">
        <SelectedCategory />
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Button variant={"secondary"} size="lg">Cancel</Button>
            <Button size="lg">Save</Button>
          </div>
        </div>
      </form>
    </>
        
    )
}