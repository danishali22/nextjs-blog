"use client"

import React, { useEffect, useState } from "react";
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
import {usePathname} from "next/navigation";
import LoadingBar from "react-top-loading-bar";


const Navbar = () => {
  const [progress, setProgress] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
    
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
    setProgress(0);
    }, 500);
  }, []);

  return (
    <nav className="mx-auto flex justify-between items-center p-4 border-b bg-background/50 sticky top-0 backdrop-blur z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Link href={"/"}>
        <div className="container text-xl font-bold pb-4">DanishBlog</div>
      </Link>
      <div className="hidden md:flex space-x-4 items-center">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:scale-105 hover:font-semibold transition-transform duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Button className="mx-1" variant="outline">
            Login
          </Button>
          <Button className="mx-1" variant="outline">
            Signup
          </Button>
          <div className="mx-2">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <span className="mx-3">
          <ModeToggle />
        </span>
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
