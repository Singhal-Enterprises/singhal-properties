import prisma from "@/app/lib/db"
import Image from "next/image";
import { BedDouble, MapPin, Bath, LandPlot, Building2, Landmark,ShieldQuestion } from "lucide-react";

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
      <div className="relative h-64 sm:h-80 md:h-[550px] w-full">
        <Image
          alt="Image of Home"
          src={`https://ctqlsgdqdxtmapwwtslv.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          fill
          className="rounded-lg h-full object-cover"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium flex gap-2">
          <MapPin color="#8455dd" />
            {data?.location} 
          </h3>
          <h3 className="text-xl font-medium">
          {data?.categoryName}
          </h3>
            <p className="text-muted-foreground text-sm mt-2">{data?.description}</p>
          </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
  <article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.location ?? '-NA-'}</p>
      </div>
      <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
        <MapPin color="#8455dd" />
      </span>
    </div>
  </article>

  <article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</p>
        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.beds ?? '-NA-'} Bedrooms</p>
      </div>
      <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
        <BedDouble color="#8455dd" />
      </span>
    </div>
  </article>


  <article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</p>

        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.baths ?? '-NA-'} Bathrooms</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <Bath color="#8455dd" />
    </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">B area</p>

        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.barea ?? '-NA-'} sq Ft</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <LandPlot color="#8455dd" />
    </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Carpet Area</p>

        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.carea ?? '-NA-'} sq Ft</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <LandPlot color="#8455dd" />
    </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Total Floors</p>

        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.totalFloors ?? '-NA-'} Floors</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <Building2 color="#8455dd" />
        </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Property on Floor Number</p>

        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">Floor {data?.propertyOnFloor ?? '-NA-'} </p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <Landmark color="#8455dd" />
    </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
    <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>

        <p className="text-lg font-medium text-gray-900 dark:text-white mt-2"> {data?.status ?? '-NA-'} </p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <ShieldQuestion color="#8455dd" />
    </span>
</div>

</article>

    </div>
    </div>
    );
}
