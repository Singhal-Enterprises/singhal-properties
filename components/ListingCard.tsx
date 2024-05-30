import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
    title: string;
    description: string;
    category: string;
    location: string;
    price: number;
    imagePath: string;
    barea: number;
  }
  
export function ListingCard(props: ListingCardProps) {
    return (
        <div className="flex flex-col cursor-pointer hover:bg-slate-100 rounded-sm dark:hover:bg-slate-900">
            <div className="relative h-72">
                <Image
                    src={`https://ctqlsgdqdxtmapwwtslv.supabase.co/storage/v1/object/public/images/${props.imagePath}`}
                    alt="Image of House"
                    fill
                    className="h-full rounded-tr-2xl rounded-tl-[80px] rounded-bl-[20px] object-cover mb-3"
                />
            </div>
            <div className="mb-4 flex text-sm justify-normal gap-x-4">
                <div className="bg-blue-200 dark:bg-blue-700 rounded-full px-3 mt-3 font-semibold">{props.category}</div>
                <div className="bg-purple-200 dark:bg-purple-600 rounded-full px-3 mt-3 font-semibold">{props.location}</div>
                <div className="bg-purple-200 dark:bg-purple-600 rounded-full px-3 mt-3 font-semibold">{props.barea} sq. ft</div>
            </div>
            <Link href='/'>
                <h3 className="font-medium text-base">
                    {props.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                    {props.description}
                </p>
                <p className="pt-2 text-muted-foreground">
                    <span className="font-bold dark:text-green-400 text-green-600">Rs {props.price} </span>
                     INR
                </p>
            </Link>
        </div>
    );
}
