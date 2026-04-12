import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Film Budget Planner - Budget Smarter. Produce Better.",
  description:
    "Professional budget planning for filmmakers, producers, and production managers. AI-powered rate estimates, team collaboration, PDF exports, and more.",
  keywords: [
    "film budget",
    "production budget",
    "filmmaking",
    "budget planner",
    "film production",
    "movie budget",
    "production manager",
  ],
  openGraph: {
    title: "Film Budget Planner",
    description:
      "Professional budget planning for filmmakers. AI-powered rate estimates, team collaboration, and beautiful PDF exports.",
    url: "https://www.filmbudgetplanner.com",
    siteName: "Film Budget Planner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Film Budget Planner",
    description:
      "Professional budget planning for filmmakers. AI-powered rate estimates, team collaboration, and beautiful PDF exports.",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
