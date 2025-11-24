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
    // Get your Google verification code from:
    // 1. Go to https://search.google.com/search-console
    // 2. Add your property (blustockconsultants.com)
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value from the meta tag
    // Example: <meta name="google-site-verification" content="YOUR_CODE_HERE" />
    // Replace "YOUR_CODE_HERE" below with the actual code
    google: process.env.GOOGLE_VERIFICATION_CODE || "your-google-verification-code",
  },
};

export default async function RootLayout({ children }) {
    // Connect to database (connection is cached)
    await connectDb();
    
    // Note: Database connection logging removed for production
    // If needed for debugging, use: if (process.env.NODE_ENV === 'development') console.log(...)

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

  // Get Google verification code from environment variable or use placeholder
  const googleVerificationCode = process.env.GOOGLE_VERIFICATION_CODE || "your-google-verification-code";

  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* Google Site Verification - Get code from Google Search Console */}
        {googleVerificationCode !== "your-google-verification-code" && (
          <meta name="google-site-verification" content={googleVerificationCode} />
        )}
        
        {/* JSON-LD structured data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google AdSense - MUST be in <head> tag as per Google requirements */}
        {/* Using regular script tag to avoid Next.js Script hydration issues */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7899721607734007"
          crossOrigin="anonymous"
          suppressHydrationWarning
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

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
