"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Bookmark } from "lucide-react";

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