"use client";
import { redirect } from 'next/navigation'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useUser } from '@/services/users';
import Navbar from '@/app/(app)/components/Navbar';
import Sidebar from '@/app/(app)/components/Sidebar';
import { useEffect } from 'react';

export default function Layout({ children, }: { children: React.ReactNode }) {
  const { data: user, isLoading: isUserLoading } = useUser();

  useEffect(() => {
    if (user?.id === undefined) {
      redirect("/login");
    } else if (user) {
      if (user.onboarding_completed_at === null) {
        redirect("/onboarding");
      }
    }
  }, [user]);

  if (isUserLoading) { return null; }

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="hidden border-r bg-muted/40 md:block">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          {/* Header + Sidebar (on mobile) */}
          <Navbar />

          {/* Main Content */}
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
