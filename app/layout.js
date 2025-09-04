import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";
import { connectDb } from "@/helper/db";

export const metadata = {
  title: "Blustock Consultants - Best Stock Market Academy in Jaipur",
  description: "A stock market academy",
   keywords: [
    "Stock Market Academy Jaipur",
    "Stock Market Academy Jothwara",
    "Institutes for Stock Market",
    "Trading Centres",
    "Option Trading Services",
    "Derivative Trading Services",
    "Share Trading Institutes",
    "Learn Stock Trading Jaipur",
    "Best Stock Market Classes",
    "Stock Market Courses in Jaipur",
    "Share Market Training Jaipur",
    "Investing Classes Jaipur",
    "Blustock Consultants",
    "Blustock",
    "Stock Market Institute Jaipur",
    "Trading Courses in Jaipur",
    "Jaipur Stock Trading Academy"
  ],
   icons: {
    icon: "/favicon.ico",
  },
   alternates: {
    canonical: "https://blustockconsultants.com",
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
