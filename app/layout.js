import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";
import { connectDb } from "@/helper/db";

export const metadata = {
  title: "Blustock Consultants - Best Stock Market Academy in Jaipur",
  description: "A stock market academy",
   icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
    const conn = await connectDb();
    console.log("database connected",conn)
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("w-full")}>
        {children}

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
