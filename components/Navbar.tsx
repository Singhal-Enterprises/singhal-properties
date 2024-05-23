import Image from "next/image";
import Link from "next/link";
import logo from "../public/1.png"
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b ">
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
        <UserNav />
      </div>
    </nav>
  );
}