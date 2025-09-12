import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";
import { connectDb } from "@/helper/db";
import Script from "next/script";

export const metadata = {
  title: "Stock Market Training in Jaipur (Jhotwara) | Blustock Consultants",
  description: "Join Blustock Consultants, Jaipur’s best stock market academy. Learn stock trading, investment, technical & fundamental analysis with expert mentors.",
   keywords: [
    "Stock market training Jaipur Jhotwara",
    "Stock Market Academy Jaipur",
    "Best Stock Market Institute in Jaipur",
    "Stock Market Academy in Jothwara",
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
  openGraph: {
    title: "Stock Market Training in Jaipur (Jhotwara) | Blustock Consultants",
    description:
      "Stock market courses in Jaipur: trading, investing, options & more. Learn with expert mentors at Blustock Consultants.",
    url: "https://blustockconsultants.com",
    siteName: "Blustock Consultants",
    locale: "en_IN",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
    const conn = await connectDb();
    console.log("database connected",conn)

     // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Blustock Consultants",
    "url": "https://blustockconsultants.com",
    "logo": "https://blustockconsultants.com/logo.png",
    "description": "Best Stock Market Academy in Jaipur offering trading, investment, and stock market courses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Joshi Marg Jothwara",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302012",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6376520654", 
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61572497263946&rdid=dLtxIPZnM2GEpVC7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16A6BCEboT%2F#",
      "https://www.instagram.com/blustockconsultants/",
      "https://www.linkedin.com/company/bluestock-consultants/posts/?feedView=all",
      "https://x.com/BluStockCo"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* Razorpay checkout script */}
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        {/* JSON-LD structured data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("w-full")}>
        {children}

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
