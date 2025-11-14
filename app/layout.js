import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";
import { connectDb } from "@/helper/db";
import Script from "next/script";

export const metadata = {
  title: "Stock Market Training in Jaipur (Jhotwara) | Blustock Consultants",
  description: "Join Blustock Consultants, Jaipur's best stock market academy. Learn stock trading, investment, technical & fundamental analysis with expert mentors.",
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
  authors: [{ name: "Blustock Consultants" }],
  creator: "Blustock Consultants",
  publisher: "Blustock Consultants",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blustockconsultants.com'),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
    images: [
      {
        url: "https://blustockconsultants.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Blustock Consultants - Stock Market Training Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Market Training in Jaipur | Blustock Consultants",
    description: "Learn stock trading, investment, and analysis with expert mentors at Jaipur's best stock market academy.",
    images: ["https://blustockconsultants.com/logo.png"],
    creator: "@BluStockCo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
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
        {/* JSON-LD structured data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("w-full")}>
        {children}

        {/* Razorpay checkout script - moved to body to prevent hydration issues */}
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* Google AdSense script - client-side only to prevent hydration issues */}
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7899721607734007';
                script.crossOrigin = 'anonymous';
                document.head.appendChild(script);
              }
            `,
          }}
        />

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
