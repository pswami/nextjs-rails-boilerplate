"use client";
import Link from "next/link";
import * as Icon from "lucide-react";
import * as Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
// import { useUser } from '@/services/users';

type Props = {
  sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export default function AppSidebar(props: Props) {
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
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Icon.Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Icon.ShoppingCart className="h-4 w-4" />
            Orders
            {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge> */}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Icon.Package className="h-4 w-4" />
            Products{" "}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Icon.Users className="h-4 w-4" />
            Customers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Icon.LineChart className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card.Card x-chunk="dashboard-02-chunk-0">
          <Card.CardHeader className="p-2 pt-0 md:p-4">
            <Card.CardTitle>Upgrade to Pro</Card.CardTitle>
            <Card.CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </Card.CardDescription>
          </Card.CardHeader>
          <Card.CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </Card.CardContent>
        </Card.Card>
      </div>
    </div>
  );
}
