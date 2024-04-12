'use client';
import * as Landing from './components/Landing';
import { MainNav } from './components/Navbar';

export const marketingConfig = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
};

export default function Home() {
  return (
   <>
      {/* Navbar */}
      <MainNav items={marketingConfig.mainNav} />

      <Landing.HeroSection />
      <Landing.InfoSection />
      <Landing.PricingSection />
      <Landing.Footer />
   </>
  );
}
