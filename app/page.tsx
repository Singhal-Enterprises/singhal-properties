import Image from "next/image";
import { Button } from "@/components/ui/button";
import FilterItems from "@/components/FilterItems";

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
       <FilterItems />
    </div>
  );
}
