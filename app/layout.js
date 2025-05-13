import Header from "@/components/Header";
import "./globals.css";
import Sidenav from "@/components/Sidenav";
import Footer from "@/components/Footer";
import { connectDb } from "@/helper/db";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";
import { getUserByEmail } from "@/queries/users";
import { auth } from "@/auth";


export const metadata = {
  title: "Blustock Consultants",
  description: "A stock market academy",
};

export default async function RootLayout({ children }) {
 await connectDb()
 const session = await auth()
 let loggedInUser = null;
 if (session) {
  loggedInUser = await getUserByEmail(session?.user?.email);
}
  
  return  (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("w-full")}>
        <Providers>
          <Header loggedInUser={loggedInUser || ''}/>
          
          <main
          className="relative"
          >
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <Sidenav/>
            </div>
            {children}
            <Toaster richColors position="top-center" />
          </main>
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
