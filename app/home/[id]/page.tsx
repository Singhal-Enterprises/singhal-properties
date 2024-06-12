import prisma from "@/app/lib/db"
import Image from "next/image";
import { BedDouble, MapPin, Bath, LandPlot, Building2, Landmark, Layers3, Columns3 } from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { unstable_noStore as noStore}  from "next/cache";
import { Mail, PhoneCall } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { buyprop } from "@/app/actions";


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
    const homeId = data?.id;
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
      {article.value ? `${article.value} ${article.unit ? article.unit : ''}` : 'No Info'}
      </p>
    </div>
  ))}
</div>
<div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-transparent shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-white font-[sans-serif]">
                <div>
                    <h1 className="text-xl font-extrabold">Interested in this Property?</h1>
                    <p className="text-sm text-gray-400 mt-3">Reach out to us today!</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center gap-2">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Mail />
                                </div>
                                <strong className="hover:text-green-400 text-blue-500"><a href="mailto:singhalpropertyofficial@gmail.com">Click Here to Mail or Fill the Form</a></strong>                                    
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold text-purple-500">Want to Contact Directly? Call or Whatsapp by Clicking on Icons</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-500">
                                <a href="tel:+919413353633">
                                <PhoneCall />
                                </a>
                            </li>
                            <li className="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-green-600">
                                <a href="https://wa.me/919413353633">
                                <FontAwesomeIcon icon={faWhatsapp} className='h-7 w-7' />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <form className="ml-auto space-y-4" action={buyprop} method="post">
            <input type='text' placeholder='Your Name' name='name'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='email' placeholder='Your Email' name='email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='text' placeholder='Subject' name='subject'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <input type='number' placeholder='Your Phone No' name='phone'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" required />
            <textarea placeholder='Your Message' name='message'
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]" required></textarea>
              <input type='hidden' name='homeId' value={homeId} />
            <button type='submit'
                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
        </form>
            </div>
        </div>

    <Separator className="mt-10 mb-10" />
     <Footer />
    </div>

    </>
    
    );
}
