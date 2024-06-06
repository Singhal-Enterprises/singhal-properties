import prisma from "@/app/lib/db"
import Image from "next/image";
import { BedDouble, MapPin, Bath, LandPlot, Building2, Landmark,ShieldQuestion, Layers3 } from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { unstable_noStore as noStore}  from "next/cache";


async function getData(homeId:string) {
    noStore();
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
        barea: true,
        carea: true,
        images: true,
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
    <div className="w-full mx-auto mt-5 mb-12 p-10">
    <span className="text-2xl md:text-3xl font-bold ml-4 md:ml-11">
      Property Images
    </span>
    <div className="rounded-lg mt-4">
    <Carousel className="w-full mx-auto">
          <CarouselContent>
            {data?.images && data.images.length > 0 ? (
              data.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
                    <Image alt="Property image" src={item} fill className="object-contain w-full h-full rounded-lg" />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem>
                <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
                  <Image alt="Default image" src="/c.png" fill className="object-contain w-full h-full rounded-lg" />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="ml-4 md:ml-16" />
          <CarouselNext className="mr-4 md:mr-16" />
        </Carousel>
    </div>
  
    <Separator className="mt-2 mb-4" />

   
    <div className="flex justify-between items-center gap-x-24 mt-8 ml-5">
    <div className="w-full">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <span>{data?.title ? data.title : '-NA-'}</span>
        </h1>
        <div className="mb-4 flex flex-wrap gap-4 mt-1">
            <div className="flex items-center gap-4 text-xs sm:text-sm">
            <MapPin color="#8455dd" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {data?.location ? data.location : '-NA-'}
            </h3>

            <div className="flex items-center gap-2">
            <LandPlot color="#8455dd" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {data?.categoryName ? data.categoryName : '-NA-'}
            </h3>
        </div>
        </div>

    </div>
    <Separator className="mt-2 mb-4" />
    <p className="text-muted-foreground text-sm mt-2 w-full">
            {data?.description ? data.description : '-NA-'}
        </p>
    </div>
    
</div>
<Separator className="mt-6 mb-4" />

      <div className="flex flex-wrap gap-4 mt-8">
  <article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Link</p>
        <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">link</p>
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
            {data?.beds !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.beds} Bedrooms</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
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
            {data?.baths !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.baths} Bathrooms</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
        </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
    <Bath color="#8455dd" />
    </span>
</div>

</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 w-full md:w-[calc(50%-1rem)]">
<div className="flex items-center justify-between">
<div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Built up Area</p>
            {data?.barea !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.barea} sq.ft</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
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
            {data?.carea !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.carea} sq.Ft</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
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
            {data?.totalFloors !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">{data?.totalFloors} Floors</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
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
            {data?.propertyOnFloor !== 0 ? (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">Floor {data?.propertyOnFloor}</p>
            ) : (
                <p className="text-2xl font-medium text-gray-900 dark:text-white mt-2">-NA-</p>
            )}
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
    <Separator className="mt-10 mb-10" />
     <Footer />
    </div>
    
    );
}
