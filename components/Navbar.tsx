import Image from "next/image";
import Link from "next/link";
import logo from "../public/c.png"
import UserNav from "./UserNav";
import {Button} from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { listProperty } from "@/app/actions";
import {ModeToggle} from "./ui/modetoggle";
import { PhoneCall } from "lucide-react";

export default async function Navbar() {
  const {getUser} = getKindeServerSession();
    const user = await getUser()
  const listPropertywithId = listProperty.bind(null, {
    userId : user?.id as string
  });
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={logo}
            alt="Desktop Logo"
            className="w-14 hidden lg:block"
          />
          <Image
            src={logo}
            alt="Mobile Logo"
            className="block lg:hidden w-8"
          />
        </Link>
        <div className="flex items-center">
          <div className="mr-2">
          <ModeToggle />
          </div>
          <form action={listPropertywithId}>
          <Button className="mr-2 bg-purple-300 dark:bg-purple-600 px-4 flex items-center" variant="outline" type="submit">
          <FontAwesomeIcon icon={faCirclePlus} height={30} width={30} className="block" />
          <span className="hidden lg:block">List Property</span>
        </Button>
          </form>
        
        <Button className="mr-2">
        <PhoneCall className="w-4 h-4 mr-1 block " />
          <Link href="/contact" className="hidden lg:block">
            Enquiry
          </Link>
        </Button>
        <UserNav />
        </div>

       
      </div>
    </nav>
  );
}