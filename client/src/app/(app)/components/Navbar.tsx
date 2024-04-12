"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Icon from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as Dropdown from "@/components/ui/dropdown-menu";
import * as Card from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { redirect, useRouter, usePathname } from 'next/navigation';
import { useUser, useLogout } from '@/services/users';
import { useCustomerPortal } from '@/services/stripe';
import { routes } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const i18n = {
  appName: 'AppName',
};

type Props = {
  // sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export default function AppNavbar(props: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  // const [sidebarOpen, setSidebarOpen] = props.sidebarState;
  const { data: user, isLoading } = useUser();
  const q = useCustomerPortal();
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutateAsync().then(() => {
      router.push('/');
      setTimeout(() => { queryClient.setQueryData(['user'], null); }, 1000);
    });
  }

  const navToCustomerPortal = () => {
    q.refetch();
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Icon.Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
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
          <div className="mt-auto">
            <Card.Card>
              <Card.CardHeader>
                <Card.CardTitle>Upgrade to Pro</Card.CardTitle>
                <Card.CardDescription>
                  Unlock all features and get unlimited access to our
                  support team.
                </Card.CardDescription>
              </Card.CardHeader>
              <Card.CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </Card.CardContent>
            </Card.Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Icon.Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <Dropdown.DropdownMenu>
        <Dropdown.DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Icon.CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </Dropdown.DropdownMenuTrigger>
        <Dropdown.DropdownMenuContent align="end">
          <Dropdown.DropdownMenuLabel>My Account</Dropdown.DropdownMenuLabel>
          <Dropdown.DropdownMenuSeparator />
          <Dropdown.DropdownMenuItem>Settings</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>Support</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuSeparator />
          <Dropdown.DropdownMenuItem onClick={handleLogout}>Logout</Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenuContent>
      </Dropdown.DropdownMenu>
    </header>
  );
}
