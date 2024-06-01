import Image from "next/image";
import Link from "next/link";
import { AddToBookmarkButton } from "./SubmitButton";
import { Badge } from "@/components/ui/badge"
import { addToBookmark, deleteBookmark } from "@/app/actions";
import { DeleteBookmarkButton } from "./SubmitButton";

interface ListingCardProps {
    title: string;
    description: string;
    category: string;
    location: string;
    price: number;
    imagePath: string;
    barea: number;
    userId: string | undefined;
    isBookmarked?: boolean;
    BookmarkId: string | undefined;
    homeId: string | undefined;
    pathName: string;
}

export function ListingCard(props: ListingCardProps) {
    return (
        <div className="flex flex-col cursor-pointer hover:bg-slate-100 rounded-sm dark:hover:bg-slate-900 p-2">
            <div className="relative h-48 sm:h-72">
                <Image
                    src={`https://ctqlsgdqdxtmapwwtslv.supabase.co/storage/v1/object/public/images/${props.imagePath}`}
                    alt="Image of House"
                    fill
                    className="h-full rounded-tr-2xl rounded-tl-[80px] rounded-bl-[20px] object-cover mb-3"
                />

            {props.userId && (
          <div className="z-10 absolute top-2 right-2">
            {props.isBookmarked ? (
                <form action={deleteBookmark}>
                    <input type="hidden" name="BookmarkId" value={props.BookmarkId} />
                        <input type="hidden" name="userId" value={props.userId} />
                        <input type="hidden" name="pathName" value={props.pathName} />
                <DeleteBookmarkButton />
                </form> 
                ) : (
                    <form action={addToBookmark}>
                        <input type="hidden" name="homeId" value={props.homeId} />
                        <input type="hidden" name="userId" value={props.userId} />
                        <input type="hidden" name="pathName" value={props.pathName} />
                    <AddToBookmarkButton />
                    </form> 
                    )}
            </div>
            )}

            </div>
            <div className="mb-4 flex flex-wrap text-xs sm:text-sm gap-x-2 gap-y-2 mt-1 lg:justify-center sm:justify-start">
                <Badge className="bg-blue-200 dark:bg-blue-700 rounded-full px-3 mt-2 font-semibold dark:text-white text-black-100">{props.category}</Badge>
                <Badge className="bg-purple-200 dark:bg-purple-600 rounded-full px-3 mt-2 font-semibold dark:text-white text-black-100">{props.location}</Badge>
                <Badge className="bg-teal-300 dark:bg-teal-700 rounded-full px-3 mt-2 font-semibold dark:text-white text-black-100">{props.barea} sq. ft</Badge>
            </div>
            <Link href='/'>
                <h3 className="font-medium text-base sm:text-lg">
                    {props.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {props.description}
                </p>
                <p className="pt-2 text-muted-foreground text-xs sm:text-sm">
                    <span className="font-bold dark:text-green-400 text-green-600">Rs {props.price} </span>
                    /month
                </p>
            </Link>
        </div>
    );
}
