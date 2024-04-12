"use client";
import "@/styles/globals.css";
import { ThemeModeScript } from 'flowbite-react';
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <html lang="en">
      <head>
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable )}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
