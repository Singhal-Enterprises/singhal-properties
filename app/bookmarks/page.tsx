import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db"
import { redirect } from "next/navigation";
import { ListingCard } from "@/components/ListingCard";
import { NoItems } from "@/components/NoItems";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { unstable_noStore as noStore}  from "next/cache";

async function getBookmarkList(userId: string) {
    noStore();
    const data = await prisma.bookmark.findMany({
        where: {
            userId: userId,
        },
        select: {
            Home: {
                select: {
                    id: true,
                    Bookmark: true,
                    location: true,
                    description: true,
                    images: true,
                    barea: true,
                    categoryName: true,
                    title: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return data;
}


async function BookmarkRoute() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user) return redirect('/');

    const data = await getBookmarkList(user.id);
  return (
    <section className="container mx-atuo px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Bookmarks</h2>

      {data.length === 0 ? (
        <NoItems
        heading = "No Bookmarks Found"
        message = "There are no bookmarks saved yet please save some bookmarks to view them here."
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
                key={item.Home?.id}
                description={item.Home?.description as string}
                location={item.Home?.location as string}
                pathName="/bookmarks"
                homeId={item.Home?.id as string}
                images={item.Home?.images as string[]}
                userId={user.id}
                BookmarkId={item.Home?.Bookmark[0].id as string}
                isBookmarked={item.Home?.Bookmark.length as number > 0 ? true : false}
                barea={item.Home?.barea as number}
                category={item.Home?.categoryName as string}
                title={item.Home?.title as string}
            />
            ))}
            </div>
            )}
      <Separator className="mb-10" />
     <Footer />
      </section>

  )
}

export default BookmarkRoute