import FilterItems from "@/components/FilterItems";
import prisma from "./lib/db";
import { ListingCard } from "@/components/ListingCard";
import { Suspense } from "react";
import { SkeltonCard } from "@/components/SkeletonCard";
import { NoItems } from "@/components/NoItems";

async function getListings({
  searchParams,
} : {
  searchParams: {
    filter?: string
  }
}) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined,
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

export default async function Home({
  searchParams,
} : {
  searchParams: {
    filter?: string
  }
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
       <FilterItems />
      
      <Suspense fallback={<SkeletonLoading />}>
      <ShowItems searchParams={searchParams} />
      </Suspense>
      
    </div>
  );
}

async function ShowItems({
  searchParams,
} : {
  searchParams: {
    filter?: string
  }
}) {
const listings = await getListings({ searchParams : searchParams});
return (
     <>
     {listings.length === 0 ? (
      <NoItems />
     ) : (
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
     )}
     </>
);
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      </div>
  )
}
