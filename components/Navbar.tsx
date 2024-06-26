import Image from "next/image";
import Link from "next/link";
import logo from "../public/c.webp"
import UserNav from "./UserNav";
import {Button} from "@/components/ui/button";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { listProperty } from "@/app/actions";
import {ModeToggle} from "./ui/modetoggle";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { EnquiryButton, ListPropertyButton } from "./SubmitButton";

export default async function Navbar() {
  const {getUser} = getKindeServerSession();
    const user = await getUser()
  const listPropertywithId = listProperty.bind(null, {
    userId : user?.id as string
  });
  return (user) ? (
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
        <ListPropertyButton />
        </form>
      
      <EnquiryButton />
      <UserNav />
      </div>

    </div>
  </nav>
  ) : (
    <div>
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
        <Button className="mr-2 bg-purple-300 dark:bg-purple-600 px-4 flex items-center" variant="outline">
        <RegisterLink className='w-full'>Register</RegisterLink>
      </Button>
      <Button className="mr-2">
      <LoginLink className='w-full'>Login</LoginLink>
      </Button>
      <UserNav />
      </div>

    </div>
  </nav>
    </div>
  );
}
