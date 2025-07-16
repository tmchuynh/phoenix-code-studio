"use client";
import BackToTop from "@/components/buttons/BackToTop";
import DynamicBreadcrumb from "@/components/navigation/breadcrumb-dynamic";
import LayoutWrapper from "@/components/navigation/LayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Digital Solutions for Custom Website Design, Content Creation, and Digital Marketing"
        />
        <meta
          property="og:description"
          content="Phoenix Code Studio offers innovative digital solutions, including custom website design, content creation, and digital marketing, enhancing user experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Code Studio" />
        <meta property="og:url" content="https://phoenixcodestudio.org/" />
        <meta property="og:locale" content="en_US"></meta>
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Digital Solutions for Custom Website Design, Content Creation, and Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Phoenix Code Studio offers innovative digital solutions, including custom website design, content creation, and digital marketing, enhancing user experience."
        ></meta>
        <meta
          name="description"
          content="Phoenix Code Studio offers innovative digital solutions, including custom website design, content creation, and digital marketing, enhancing user experience."
        />
        <meta title="Digital Solutions for Custom Website Design, Content Creation, and Digital Marketing" />
        <title>
          Digital Solutions for Custom Website Design, Content Creation, and
          Digital Marketing
        </title>
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
      <main className="relative mx-auto overflow-x-clip">
        <LayoutWrapper>
          <DynamicBreadcrumb />
          {children}
          <Analytics />
          <SpeedInsights />
          <BackToTop />
        </LayoutWrapper>
      </main>
    </>
  );
};
