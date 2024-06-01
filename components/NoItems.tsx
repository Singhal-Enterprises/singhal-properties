import { File } from "lucide-react";
interface NoItemsProps {
  heading?: string;
  message?: string;
}

export function NoItems( props: NoItemsProps) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
        </div>
        
        <h2 className="mt-6 text-xl font-semibold">
          {props.heading}
        </h2>
        <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
          {props.message}
      </p>
      </div>
    );
  }