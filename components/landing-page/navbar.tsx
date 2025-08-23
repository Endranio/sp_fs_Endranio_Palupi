"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export const scroll = (page: string) => {
  const section = document.getElementById(page);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 px-4">
      <div className=" flex h-16 items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center rounded-lg bg-primary text-primary-foreground"></div>
            <span className="text-xl font-bold">ProjectFlow</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => scroll("features")}
            className="text-lg font-medium hover:!bg-transparent transition-colors p-0"
          >
            Features
          </Button>
          <Button
            variant="ghost"
            onClick={() => scroll("benefits")}
            className="text-lg font-medium hover:!bg-transparent transition-colors p-0"
          >
            Benefits
          </Button>
          Button
          <div className="flex items-center space-x-2">
            <Button className="text-lg" variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="text-lg" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
