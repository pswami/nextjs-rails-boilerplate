"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import * as Icon from "lucide-react";
import * as Sheet from "@/components/ui/sheet";
import { UserDropdown } from "../components/UserDropdown";
// import { useCustomerPortal } from '@/services/stripe';
import { routes } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";

const i18n = {
  appName: 'AppName',
};

type Props = {
  // sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export default function AppNavbar(props: Props) {
  const pathname = usePathname();
  // const [sidebarOpen, setSidebarOpen] = props.sidebarState;
  // const q = useCustomerPortal();
  // const navToCustomerPortal = () => {
  //   q.refetch();
  // };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {/* Sidebar Trigger */}
      <Sheet.Sheet>
        <Sheet.SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Icon.Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.SheetTrigger>

        {/* Sidebar Content */}
        <Sheet.SheetContent side="left" className="flex flex-col">
          {/* Nav Links */}
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Icon.Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>

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
        </Sheet.SheetContent>
      </Sheet.Sheet>

      {/* Search Bard */}
      <div className="w-full flex-1">
        <SearchBar />
      </div>

      {/* User Dropdown */}
      <UserDropdown />
    </header>
  );
}
