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
import  PaginationControls from "@/components/PaginationControls";

async function getListings({
  searchParams,
  userId
}: {
  userId: string | undefined;
  searchParams: {
    filter?: string,
    page?: string,
    per_page?: string
  }
}) {
  noStore();
  const page = Number(searchParams.page ?? '1');
  const per_page = Number(searchParams.per_page ?? '8');
  const start = (page - 1) * per_page;

  const [data, total] = await prisma.$transaction([
    prisma.home.findMany({
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
      skip: start,
      take: per_page,
    }),
    prisma.home.count({
      where: {
        addedCategory: true,
        addedDescription: true,
        addedLocation: true,
        categoryName: searchParams?.filter ?? undefined,
        approval: true,
      },
    })
  ]);

  return { data, total };
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    filter?: string,
    page?: string,
    per_page?: string
  }
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Hero />
      <FilterItems />
      
      <Suspense key={`${searchParams?.filter}-${searchParams?.page}-${searchParams?.per_page}`} fallback={<SkeletonLoading />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  );
}


async function ShowItems({
  searchParams,
}: {
  searchParams: {
    filter?: string,
    page?: string,
    per_page?: string
  }
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: listings, total } = await getListings({ searchParams, userId: user?.id });

  const page = Number(searchParams.page ?? '1');
  const per_page = Number(searchParams.per_page ?? '8');
  const totalPages = Math.ceil(total / per_page);

  return (
    <>
      {listings.length === 0 ? (
        <NoItems 
          heading="Sorry No Listing Found for this category"
          message="Please check another category or create a new listing!"
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
      <PaginationControls 
        hasNextPage={page < totalPages}
        hasPrevPage={page > 1}
        currentPage={page}
        totalPages={totalPages}
        perPage={per_page}
      />
      <Separator className="mb-10 mt-8" />
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