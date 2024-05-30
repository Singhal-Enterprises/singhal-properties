import Image from "next/image";
import { Button } from "@/components/ui/button";
import FilterItems from "@/components/FilterItems";
import prisma from "./lib/db";
import { ListingCard } from "@/components/ListingCard";

async function getListings() {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
    },
    select: {
      id: true,
      title: true,
      categoryName: true,
      description: true,
      location: true,
      price: true,
      photo: true,
      barea: true,
    },
  });
  return data;
}

export default async function Home() {
  const listings = await getListings();
  return (
    <div className="container mx-auto px-5 lg:px-10">
       <FilterItems />

       <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-36">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            title={listing.title as string}
            category={listing.categoryName as string}
            description={listing.description as string}
            location={listing.location as string}
            price={listing.price as number}
            imagePath={listing.photo as string}
            barea={listing.barea as number}
            />
        ))}
       </div>
    </div>
  );
}
