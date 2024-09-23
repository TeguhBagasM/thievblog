"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
        <span className="font-bold text-xl">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-md font-medium transition-colors relative group hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-md font-medium transition-colors relative group hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </nav>
  );
}
