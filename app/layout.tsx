import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./../components/theme-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "@/components/ui/sonner"




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Singhal Properties",
  description: "Realtor Singhal Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Toaster richColors theme="dark" closeButton />
        </ThemeProvider>
        </body>
    </html>
  );
}
