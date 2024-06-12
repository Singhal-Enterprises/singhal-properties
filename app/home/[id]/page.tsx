import prisma from "@/app/lib/db"
import Image from "next/image";
import { BedDouble, MapPin, Bath, LandPlot, Building2, Landmark, Layers3, Columns3 } from "lucide-react";
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
    const articles = [
      { title: 'Type', value: data?.categoryName, Icon: Columns3 },
      { title: 'Bedrooms', value: data?.beds, Icon: BedDouble, unit: 'Bedrooms' },
      { title: 'Bathrooms', value: data?.baths, Icon: Bath, unit: 'Bathrooms' },
      { title: 'Built up Area', value: data?.barea, Icon: LandPlot, unit: 'sq.ft' },
      { title: 'Carpet Area', value: data?.carea, Icon: LandPlot, unit: 'sq.ft' },
      { title: 'Total Floors', value: data?.totalFloors, Icon: Building2, unit: 'Floors' },
      { title: 'Property on Floor Number', value: data?.propertyOnFloor, Icon: Landmark, unit: 'Floor' },
      { title: 'Owner', value: data?.owner, Icon: Layers3 },
    ];
  return (
    <>
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
        <div className="flex items-center gap-2 overflow-hidden">
            <LandPlot color="#8455dd" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {data?.status ? data.status : '-NA-'}
            </h3>
        </div>
    </div>
    
    <Separator className="mt-2 mb-4" />
    <p className="text-muted-foreground text-sm mt-2 w-full">
            {data?.description ? data.description : '-NA-'}
        </p>
    </div>
    
</div>

<Separator className="mt-6 mb-4" />

    
<div className="grid grid-cols-2 gap-2 sm:gap-4 p-4">
  {articles.map((article, index) => (
    <div key={index} className="flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{article.title}</p>
      <article.Icon size={24} color="#8455dd" className="mt-2" />
      <p className="mt-2 lg:text-lg sm:text-sm font-medium text-gray-900 dark:text-white">
        {article.value ? article.value : '-NA-'} {article.unit ? article.unit : ''}
      </p>
    </div>
  ))}
</div>

    <Separator className="mt-10 mb-10" />
     <Footer />
    </div>

    </>
    
    );
}
