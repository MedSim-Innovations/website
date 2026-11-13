type NavigationItem = {
  href: "/" | "/products" | "/services" | "/story";
  label: string;
  eyebrow: string;
};

export const navigationItems = [
  { href: "/", label: "Home", eyebrow: "Welcome" },
  { href: "/products", label: "Products", eyebrow: "Explore" },
  { href: "/services", label: "Services", eyebrow: "Build" },
  { href: "/story", label: "Our Story", eyebrow: "About" },
] as const satisfies readonly NavigationItem[];
