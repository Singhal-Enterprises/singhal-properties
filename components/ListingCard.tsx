import Image from "next/image";
import Link from "next/link";
import { AddToBookmarkButton } from "./SubmitButton";
import { addToBookmark, deleteBookmark } from "@/app/actions";
import { DeleteBookmarkButton } from "./SubmitButton";
import { Layers3, MapPin, LandPlot } from "lucide-react";
import { Button } from "./ui/button";

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
            <div className="relative h-48 sm:h-72">
                <Image
                src={props.images && props.images.length > 0 ? props.images[0] : '/c.png'}

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
            <div className="mb-4 flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center gap-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                            <Layers3 color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth />
                            <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-medium">{props.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth />
                            <div>
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{truncatedLocation}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <LandPlot color="#a146d2" strokeWidth={1.75} absoluteStrokeWidth />
                            <div>
                                <p className="text-gray-500">Area</p>
                                <p className="font-medium">{props.barea > 0 ? `${props.barea} sq.ft` : '---'}</p>
                            </div>
                        </div>
                    </div>  
                </div>
                <h3 className="font-medium text-base sm:text-lg">
                    {props.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {props.description}
                </p>
                <p className="pt-2 text-muted-foreground text-xs sm:text-sm flex justify-between items-center mt-1">
                    <Link href={`/home/${props.homeId}`}>
                        <Button className="w-15 h-7">View</Button>
                    </Link>
                </p>
            </div>
        </>
        
    );
}
