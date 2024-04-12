"use client";

import Image from "next/image";
import { redirect } from 'next/navigation'
import { useUser } from "@/services/users";

export default function AppLayout({ children, }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();

  if (user?.id) {
    redirect("/home");
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        {children}
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://source.unsplash.com/random/2000x2000"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
