import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.filmbudgetplanner.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Film Budget Planner — Budget Smarter. Produce Better.",
    template: "%s | Film Budget Planner",
  },
  description:
    "The professional budget planner for filmmakers, producers, and production managers. AI rate estimates, team collaboration, PDF and CSV exports, multi-currency support. 7-day free trial — no credit card required.",
  applicationName: "Film Budget Planner",
  authors: [{ name: "Film Budget Planner" }],
  creator: "Film Budget Planner",
  publisher: "Film Budget Planner",
  generator: "Next.js",
  keywords: [
    "film budget",
    "film budget planner",
    "production budget",
    "movie budget software",
    "filmmaking",
    "budget planner",
    "film production",
    "production manager",
    "indie film budget",
    "AI rate estimates",
    "film budgeting app",
    "production accounting",
    "PDF budget export",
    "film production software",
    "movie production budget",
    "feature film budget",
    "short film budget",
    "commercial production budget",
    "music video budget",
    "documentary budget",
  ],
  alternates: {
    canonical: "/",
  },
  category: "Business",
  openGraph: {
    title: "Film Budget Planner — Budget Smarter. Produce Better.",
    description:
      "Professional budget planning for filmmakers. AI-powered rate estimates, team collaboration, and beautiful PDF exports. 7-day free trial — no credit card required.",
    url: SITE_URL,
    siteName: "Film Budget Planner",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Film Budget Planner — Budget Smarter. Produce Better.",
    description:
      "Professional budget planning for filmmakers. AI-powered rate estimates, team collaboration, and beautiful PDF exports.",
    creator: "@filmbudgetplan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "Film Budget Planner",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    // Add when you set up Search Console / Bing Webmaster Tools:
    // google: "your-verification-token",
    // other: { "msvalidate.01": "your-bing-token" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Film Budget Planner",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "FinanceApplication",
      operatingSystem: "iOS",
      description:
        "Professional budget planning app for filmmakers, producers, and production managers. AI-powered rate estimates, team collaboration, PDF and CSV exports.",
      url: SITE_URL,
      downloadUrl:
        "https://apps.apple.com/ca/app/film-budget-planner/id6761828159",
      installUrl:
        "https://apps.apple.com/ca/app/film-budget-planner/id6761828159",
      image: `${SITE_URL}/opengraph-image`,
      author: {
        "@type": "Organization",
        name: "Film Budget Planner",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Pro Monthly",
          price: "4.99",
          priceCurrency: "USD",
          description: "7-day free trial, then $4.99/month",
        },
        {
          "@type": "Offer",
          name: "Pro Yearly",
          price: "39.99",
          priceCurrency: "USD",
          description: "7-day free trial, then $39.99/year (save 33%)",
        },
        {
          "@type": "Offer",
          name: "Team Monthly",
          price: "9.99",
          priceCurrency: "USD",
          description: "7-day free trial, then $9.99/month",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "1",
      },
      featureList: [
        "Unlimited productions",
        "AI rate estimates",
        "Team collaboration",
        "PDF and CSV export",
        "Multi-currency support",
        "Budget version control",
        "Folder presets",
        "Tax-aware company profiles",
        "Real-time reports and analytics",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Film Budget Planner",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      sameAs: [
        // Add social media URLs here when available
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Film Budget Planner",
      description:
        "The professional budget planner for filmmakers, producers, and production managers.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
