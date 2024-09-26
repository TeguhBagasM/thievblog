import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { Instagram } from "lucide-react";
import ThemeToggler from "./theme/theme-toggler";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div
                className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}
              >
                <Icons.linkedin className="h-5 w-5 transition-transform transform hover:scale-110" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}
              >
                <Icons.gitHub className="h-5 w-5 transition-transform transform hover:scale-110" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
              <div
                className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}
              >
                <Instagram className="h-5 w-5 transition-transform transform hover:scale-110" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggler />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
