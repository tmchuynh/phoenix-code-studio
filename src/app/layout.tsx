"use client";

import Head from "next/head";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation"; // For dynamic page metadata

export default function RootLayout({
  children,
  title = "Digital Solutions for Custom Website Design, Content Creation, and Digital Marketing", // Default title
  description = "Phoenix Code Studio offers innovative digital solutions, including custom website design, content creation, and digital marketing, enhancing user experience.", // Default description
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const pathname = usePathname(); // Dynamically get the current page path for SEO

  // Determine the page's specific title and description if necessary
  const pageTitle = title;
  const pageDescription =
    description ||
    (pathname === "/" // Home page description
      ? "Phoenix Code Studio offers innovative digital solutions, including custom website design, content creation, and digital marketing, enhancing user experience."
      : `${pageTitle} - Phoenix Code Studio`); // Fallback to page title + site name for other pages

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Dynamic Meta Tags */}
        <meta name="description" content={pageDescription} />
        <meta title={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Code Studio" />
        <meta
          property="og:url"
          content={`https://phoenixcodestudio.org${pathname}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <title>{pageTitle}</title>
      </Head>
      <body>
        <NotFoundProvider>
          <Providers>
            <MainContent>{children}</MainContent>
          </Providers>
        </NotFoundProvider>
      </body>
    </html>
  );
}

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto py-10 overflow-hidden">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <BackToTop />
      </main>
    </>
  );
};
