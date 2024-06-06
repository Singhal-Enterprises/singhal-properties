import FilterItems from "@/components/FilterItems";
import prisma from "./lib/db";
import { ListingCard } from "@/components/ListingCard";
import { Suspense } from "react";
import { SkeltonCard } from "@/components/SkeletonCard";
import { NoItems } from "@/components/NoItems";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator"
import { unstable_noStore as noStore}  from "next/cache";

async function getListings({
  searchParams,
  userId
} : {
  userId: string | undefined;
  searchParams: {
    filter?: string

  }
}) {
  noStore();
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined,
      approval: true,
    },
    select: {
      id: true,
      title: true,
      categoryName: true,
      description: true,
      location: true,
      images: true,
      barea: true,
      Bookmark: {
        where: {
          userId: userId ?? undefined,
        },
      },
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
      <Hero />
       <FilterItems />
      
       <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />}>
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
  const{getUser} = getKindeServerSession();
  const user = await getUser();
const listings = await getListings({ searchParams : searchParams, userId: user?.id});
return (
     <>
     {listings.length === 0 ? (
      <NoItems 
      heading = "Sorry No Listing Found for this category"
      message = "Please check another category or create a new listing!"
      />
     ) : (
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          userId={user?.id}
          title={listing.title as string}
          category={listing.categoryName as string}
          description={listing.description as string}
          location={listing.location as string}
          images={listing.images as string[]}
          barea={listing.barea as number}
          BookmarkId={listing.Bookmark[0]?.id as string}
          isBookmarked={listing.Bookmark.length > 0 ? true : false} 
          homeId={listing.id}
          pathName="/"
          />
      ))}
     </div>
     )}
     <Separator className="mb-10" />
     <Footer />
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
      </div>
  )
}