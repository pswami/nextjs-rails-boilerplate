import * as Icon from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { redirect } from 'next/navigation';

import * as Dropdown from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLogout } from '@/services/users';

export function UserDropdown() {
  const queryClient = useQueryClient();
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutateAsync().then(() => {
      setTimeout(() => { queryClient.setQueryData(['user'], null); }, 1000);
      redirect('/');
    });
  }

  return(
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
  );
}
