import { SquareCheckBig } from "lucide-react";


export function PostSubmission() {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
        >
            <SquareCheckBig color="#36d365" className="h-10 w-10 text-primary" />
            </div>
        
        <h2 className="mt-6 text-xl font-semibold">
          Your Property have been listed successfully
        </h2>
        <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
          Our team will review it in a short while and on approval it will be visible in the website
          For further enquiries, please contact us.
      </p>
      </div>
    );
  }