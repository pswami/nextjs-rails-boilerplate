import * as Icon from "lucide-react";

export const routes = {
  dashboard: {
    name: "Dashboard",
    icon: Icon.Home,
    href: "/home",
  },
  orders: {
    name: "Orders",
    icon: Icon.ShoppingCart,
    href: "/orders",
  },
  products: {
    name: "Products",
    icon: Icon.Package,
    href: "/products",
  },
  customers: {
    name: "Customers",
    icon: Icon.Users,
    href: "/customers",
  },
  analytics: {
    name: "Analytics",
    icon: Icon.LineChart,
    href: "/settings",
  },
};
