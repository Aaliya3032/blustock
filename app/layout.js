"use client";
import Header from "@/components/Header";
import Head from "next/head";
import "./globals.css";
import { Theme } from "./theme/page";


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
          >
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
