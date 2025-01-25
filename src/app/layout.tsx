"use client";
import { NavSidebar } from "@/components/NavSidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Head from "next/head";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/BackToTop";
import { cn } from "@/lib/utils";

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
          <SidebarProvider>
            <Providers>
              <MainContent>{children}</MainContent>
            </Providers>
          </SidebarProvider>
        </NotFoundProvider>
      </body>
    </html>
  );
}

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { open } = useSidebar();
  return (
    <>
      <NavSidebar />
      <SidebarTrigger className="py-7 pl-9" />
      <main
        className={cn("relative w-11/12 mx-auto py-10 overflow-hidden", {
          "w-8/12": open,
        })}
      >
        {children}
        <BackToTop />
      </main>
    </>
  );
};
