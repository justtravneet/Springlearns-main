"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster as HotToaster } from "react-hot-toast";
import Script from "next/script"; // Import Script for external scripts

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Improve performance with font swap
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Spring Learns - Training Courses For Professionals</title>
        {/* Google Search Console Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content=" BKyZT_79RKxCjtjPKzAqM24rkhyIR4DyDqbLFRSAYsY "
         
        />

         <meta name="description" content=" At Spring Learns, we are committed to delivering high-quality, industry-leading educational programs that empower professionals and businesses to succeed."/>

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.springlearns.com/" />
      </head>

      {/* Google Analytics Scripts */}
      <Script
        id="google-analytics-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-P32660LFD8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P32660LFD8');
        `}
      </Script>

      <body
        className={cn(
          "min-h-screen overflow-x-hidden w-fit-content bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <HotToaster /> {/* Single Toaster Component */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
       
    </html>
  );
}
