// pages/index.jsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className="mx-auto flex justify-between items-center p-4 border-b bg-background/50 sticky top-0 backdrop-blur">
      <Link href={"/"}>
        <div className="container text-xl font-bold pb-4">DanishBlog</div>
      </Link>
      <div className="hidden md:flex space-x-4 items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Button className="mx-1" variant="outline">
            Login
          </Button>
          <Button className="mx-1" variant="outline">
            Signup
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold">DanishBlog</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col items-center gap-6">
                  <li className="list-none">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="list-none">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="list-none">
                    <Link href="/about">Blog</Link>
                  </li>
                  <li className="list-none">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <div>
                    <Button className="mx-1 text-xs" variant="outline">
                      Login
                    </Button>
                    <Button className="mx-1 text-xs" variant="outline">
                      Signup
                    </Button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
