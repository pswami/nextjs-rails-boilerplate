"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icon from "lucide-react";
import * as Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import { routes } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type Props = {
  // sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export default function AppSidebar(props: Props) {
    const pathname = usePathname();
  // const [sidebarOpen, setSidebarOpen] = props.sidebarState;

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Icon.Package2 className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Icon.Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {Object.values(routes).map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { 'bg-muted text-primary': pathname === route.href }
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
