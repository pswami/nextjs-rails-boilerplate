"use client";
import * as Icon from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  formClassName?: string;
};

export default function SearchBar(props : Props) {
  return (
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
  );
}
