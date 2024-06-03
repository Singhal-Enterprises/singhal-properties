import prisma from "@/app/lib/db"
import Image from "next/image";

async function getData(homeId:string) {
    const data = await prisma.home.findUnique({
    where: {
        id: homeId,
    },
    select: {
        id: true,
        title: true,
        categoryName: true,
        description: true,
        location: true,
        photo: true,
        barea: true,
        carea: true,
        beds: true,
        baths: true,
        owner: true,
        status: true,
        totalFloors: true,
        propertyOnFloor: true,
    },
    });
    return data;
}


export default async function HomeRoute(
   {
    params,
   } : {
    params: {
      id: string
    };
    }
) {
    const data = await getData(params.id);
  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
      <div className="relative h-[550px]">
        <Image
          alt="Image of Home"
          src={`https://ctqlsgdqdxtmapwwtslv.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          fill
          className="rounded-lg h-full object-cover w-full"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {data?.location} / {data?.categoryName}
          </h3>
          <div className="flex gap-x-2 text-muted-foreground">
            <p>{data?.totalFloors} Floors</p> * <p>{data?.beds} Bedrooms</p> *{" "}
            {data?.baths} Bathrooms
          </div>
          
          </div>
      </div>
    </div>
    );
}
