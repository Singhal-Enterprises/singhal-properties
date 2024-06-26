"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Bookmark } from "lucide-react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function CreationSubmit() {
    const {pending} = useFormStatus();
    return (
       <>
       {pending ? (
        <Button disabled size="lg">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          Next
        </Button>
      )}
    </>
  );
}

export function ListPropertyButton() {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button 
            className="mr-2 bg-purple-300 dark:bg-purple-600 px-4 flex items-center" 
            variant="outline" 
            disabled
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span className="hidden lg:block">Please Wait</span>
          </Button>
        ) : (
          <Button 
            className="mr-2 bg-purple-300 dark:bg-purple-600 px-4 flex items-center" 
            variant="outline" 
            type="submit"
          >
            <FontAwesomeIcon icon={faCirclePlus} height={30} width={30} className="block" />
            <span className="hidden lg:block">List Property</span>
          </Button>
        )}
      </>
    );
  }

  export function EnquiryButton() {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button className="mr-2" disabled>
            <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            <span className="hidden lg:block">Please Wait</span>
          </Button>
        ) : (
          <Button className="mr-2">
            <PhoneCall className="w-4 h-4 mr-1 block" />
            <Link href="/contact" className="hidden lg:block">
              Enquiry
            </Link>
          </Button>
        )}
      </>
    );
  }
  

export function AddToBookmarkButton(){
    const {pending} = useFormStatus();
    return (
        <>
        {
            pending ? (
               <Button
               variant={"outline"}
                size={"icon"}
                disabled
                className="bg-primary-foreground dark:bg-primary-foreground-dark"
               >
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
               </Button>
            ) : (
                <Button
                variant="outline"
                size="icon"
                type="submit"
                className="bg-primary-foreground dark:bg-primary-foreground-dark"
                >
                    <Bookmark className="h-4 w-4" />
                </Button>
            )
        }
        </>
    )
}

export function DeleteBookmarkButton(){
    const {pending} = useFormStatus();
    return (
        <>
        {
            pending ? (
               <Button
               variant={"outline"}
                size={"icon"}
                disabled
                className="bg-primary-foreground dark:bg-primary-foreground-dark"
               >
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
               </Button>
            ) : (
                <Button
                variant="outline"
                size="icon"
                type="submit"
                className="bg-primary-foreground dark:bg-primary-foreground-dark"
                >
                    <Bookmark className="h-4 w-4 text-primary" fill="#ffcc33"/>
                </Button>
            )
        }
        </>
    )
}