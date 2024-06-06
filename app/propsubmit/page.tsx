import { SquareCheckBig, PhoneCall, HomeIcon } from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer";


export default function propsubmit() {
    return (
        <>
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
        >
            <SquareCheckBig color="#36d365" className="h-10 w-10 text-primary" />
            </div>
        
        <h2 className="mt-6 text-xl font-semibold">
          Your Property have been listed successfully
        </h2>
        <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
          Our team will review it in a short while and on approval it will be visible in the website.
          For further queries, please contact us.
      </p>

        <div className="flex gap-1 sm:flex-row mt-5">
        <Button className="mr-2">
        <PhoneCall className="w-4 h-4 mr-1 block " />
          <Link href="/contact">
            Enquire Now
          </Link>
        </Button>

      <Button className="mr-2" variant={"outline"}>
        <HomeIcon className="w-4 h-4 mr-1 block " />
          <Link href="/">
            Back to Home
          </Link>
        </Button>
        </div>
      </div>
      <Separator className="mb-10" />
      <Footer />
        </>

    );
  }