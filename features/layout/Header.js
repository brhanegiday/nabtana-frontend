import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="bg-[#FBFBFB] py-4 sticky top-0 z-50 drop-shadow-sm">
      <div className="xl:container flex justify-between items-center px-10 mx-auto">
        <div>
          <NextLink href="/">
            <a className="font-semi-bold cursor-pointer">
              <img
                src="/header/NABTANA.svg"
                alt="Nabtana Logo"
                width="150px"
                height="15px"
              />
            </a>
          </NextLink>
        </div>
        <div className="flex space-x-6 items-center">
          <NextLink href="/">
            <a className="cursor-pointer">
              <p className="text-shark-500 font-medium text-nab">Home</p>
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a className="cursor-pointer">
              <p className="text-shark-500 font-medium text-nab">Blog</p>
            </a>
          </NextLink>
          <NextLink href="/how-it-works">
            <a className="cursor-pointer">
              <p className="text-shark-500 font-medium text-nab">
                How it works
              </p>
            </a>
          </NextLink>
        </div>
        <div className="flex space-x-4 items-center">
          <NextLink href="/signin">
            <a className="cursor-pointer">
              <p className="text-shark-500 font-medium text-nab">Sign In</p>
            </a>
          </NextLink>
          <div className="flex space-x-1 items-center cursor-pointer">
            <SunIcon className="h-5 w-5 text-[#FB8122]" />
            <p className="text-sm text-shark-500">Light</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
