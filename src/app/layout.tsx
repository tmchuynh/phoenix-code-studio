"use client";
import Head from "next/head";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
  title = "Home",
  description = "Tina Huynh",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Tina Huynh" />
        <meta name="description" content={description} />
        <meta title={title} />
        <title>{title}</title>
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
        <BackToTop />
      </main>
    </>
  );
};
