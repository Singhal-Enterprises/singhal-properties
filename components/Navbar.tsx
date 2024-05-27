import Image from "next/image";
import Link from "next/link";
import logo from "../public/1.png"
import UserNav from "./UserNav";
import {Button} from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { listProperty } from "@/app/actions";
import {ModeToggle} from "./ui/modetoggle";

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
            className="block lg:hidden w-12"
          />
        </Link>
        <div className="flex items-center">
          <div className="mr-2">
          <ModeToggle />
          </div>
          <form action={listPropertywithId}>
          <Button className="mr-2 bg-purple-300 dark:bg-gradient-to-l from-fuchsia-400 via-fuchsia-800 to-purple-600 px-4 flex items-center" variant="outline" type="submit">
          <FontAwesomeIcon icon={faCirclePlus} height={30} width={30} />
            List Property
        </Button>
          </form>
        
        <Button className="mr-2">
        <FontAwesomeIcon icon={faAddressBook} height={30} width={30} />
          <Link href="/create">
            Contact
          </Link>
        </Button>
        <UserNav />
        </div>

       
      </div>
    </nav>
  );
}