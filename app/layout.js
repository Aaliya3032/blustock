"use client";
import Header from "@/components/Header";
import Head from "next/head";
import "./globals.css";
import { Theme } from "./theme/page";
import Sidenav from "@/components/Sidenav";


export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Blustock Consultants</title>
        <meta name="description" content="A stock market academy" />
      </Head>
      <body className="text-primary dark:text-white w-full">
        <Theme>
          <Header/>
          <main
          className="relative"
          >
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <Sidenav/>
            </div>
          
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
