import Image from "next/image";
import Link from "next/link";
import { AddToBookmarkButton } from "./SubmitButton";
import { addToBookmark, deleteBookmark } from "@/app/actions";
import { DeleteBookmarkButton } from "./SubmitButton";
import { Layers3, MapPin, LandPlot } from "lucide-react";
import { Button } from "./ui/button";
import proplogo from "../public/sd.webp";
import  {Separator}  from "./ui/separator";

interface ListingCardProps {
    title: string;
    description: string;
    category: string;
    location: string;
    images: string[];
    barea: number;
    userId: string | undefined;
    isBookmarked?: boolean;
    BookmarkId: string | undefined;
    homeId: string | undefined;
    pathName: string;
}

export function ListingCard(props: ListingCardProps) {
    const truncateLocation = (location: string, charLimit: number) => {
        if (location.length <= charLimit) {
            return location;
        }
        return location.slice(0, charLimit) + "...";
    };

    const truncatedLocation = props.location ? truncateLocation(props.location, 8) : '--NA--';

    return (
        <>
            <div className="flex flex-col cursor-pointer hover:bg-slate-100 rounded-sm dark:hover:bg-slate-900 p-2">
            <div className="relative h-48 sm:h-72 md:h-48 lg:h-72 xl:h-72">
                <Image
                src={props.images && props.images.length > 0 ? props.images[0] : proplogo}
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
            <Separator className="mt-2" />
                        <div className="py-4 overflow-x-visible">
                <div className="flex flex-row gap-4 min-w-max">
                <div className="flex items-center gap-2">
                    <Layers3 color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth className="w-5 h-5 flex-shrink-0" />
                    <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">{props.category}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                    <MapPin color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth className="w-5 h-5 flex-shrink-0" />
                    <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">{truncatedLocation}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                    <LandPlot color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth className="w-5 h-5 flex-shrink-0" />
                    <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Area</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                        {props.barea > 0 ? `${props.barea} sq.ft` : '-NA-'}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <Separator />
                <div>
                <h3 className="font-medium text-base sm:text-lg mt-1">
                    {props.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-1">
                    {props.description ? props.description : "No description provided"}
                </p>
                <div className="pt-2 mt-auto">
                <Link href={`/home/${props.homeId}`}>
                    <Button className="w-full md:w-full sm:w-auto h-8 text-xs sm:text-sm">
                    View Property</Button>
                    </Link>
                </div>
                </div>
 
            </div>
        </>
        
    );
}
