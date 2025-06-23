import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "./components/Footer";
import CallButtonMobile from "./components/Widgets/CallMobileButton";

const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    'google-site-verification': "",
  },
};

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "name": "Advanced Quality Roofing",
//   "description": "We provide professional roofing services in Arizona, specializing in roof repairs, replacements, and storm damage restoration.",
//   "telephone": "(602) 894-5307",
//   "url": "https://advancedqualityroofingaz.com/",
//   "address": {
//     "addressRegion": "AZ",
//     "addressCountry": "US"
//   },
//   "areaServed": [
//     {
//       "@type": "Place",
//       "name": "Apache Junction"
//     },
//     {
//       "@type": "Place",
//       "name": "Arizona City"
//     },
//     {
//       "@type": "Place",
//       "name": "Avondale"
//     },
//     {
//       "@type": "Place",
//       "name": "Buckeye"
//     },
//     {
//       "@type": "Place",
//       "name": "Carefree"
//     },
//     {
//       "@type": "Place",
//       "name": "Cashion"
//     },
//     {
//       "@type": "Place",
//       "name": "Cave Creek"
//     },
//     {
//       "@type": "Place",
//       "name": "Chandler"
//     },
//     {
//       "@type": "Place",
//       "name": "El Mirage"
//     },
//     {
//       "@type": "Place",
//       "name": "Fort Mcdowell"
//     },
//     {
//       "@type": "Place",
//       "name": "Fountain Hills"
//     },
//     {
//       "@type": "Place",
//       "name": "Gilbert"
//     },
//     {
//       "@type": "Place",
//       "name": "Glendale"
//     },
//     {
//       "@type": "Place",
//       "name": "Goodyear"
//     },
//     {
//       "@type": "Place",
//       "name": "Higley"
//     },
//     {
//       "@type": "Place",
//       "name": "Laveen"
//     },
//     {
//       "@type": "Place",
//       "name": "Litchfield Park"
//     },
//     {
//       "@type": "Place",
//       "name": "Maricopa"
//     },
//     {
//       "@type": "Place",
//       "name": "Mesa"
//     },
//     {
//       "@type": "Place",
//       "name": "Morristown"
//     },
//     {
//       "@type": "Place",
//       "name": "New River"
//     },
//     {
//       "@type": "Place",
//       "name": "Paradise Valley"
//     },
//     {
//       "@type": "Place",
//       "name": "Payson"
//     },
//     {
//       "@type": "Place",
//       "name": "Peoria"
//     },
//     {
//       "@type": "Place",
//       "name": "Phoenix"
//     },
//     {
//       "@type": "Place",
//       "name": "Poston"
//     },
//     {
//       "@type": "Place",
//       "name": "Prescott"
//     },
//     {
//       "@type": "Place",
//       "name": "Rio Verde"
//     },
//     {
//       "@type": "Place",
//       "name": "Scottsdale"
//     },
//     {
//       "@type": "Place",
//       "name": "Sun City"
//     },
//     {
//       "@type": "Place",
//       "name": "Sun City West"
//     }
//   ],
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "telephone": "(602) 894-5307",
//     "contactType": "customer service",
//     "availableLanguage": ["English"]
//   }
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="" />
      <GoogleTagManager gtmId="GTM-PM79QJLJ" />
      <body className={`w-full ${inter.className}`}>
        {/* <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section> */}
        <div className="bg-white">
          <Navbar />
          {children}
          <CallButtonMobile/>
        </div>
        <Footer />
      </body>
    </html>
  );
}
