import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { TranslateIcon } from "@heroicons/react/outline";
import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { HiTranslate } from "react-icons/hi";

function Header() {
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="bg-[#FBFBFB] py-4 sticky top-0 z-50 drop-shadow-sm ">
      <div className="xl:container flex justify-between items-center px-20 mx-auto">
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
        <div className="hidden lg:flex space-x-6 items-center">
          <NextLink href="/">
            <a className="cursor-pointer">
              <p
                className={` font-medium text-nab ${
                  router.pathname === "/" ? "text-tango-500" : "text-shark-500"
                }`}
              >
                Home
              </p>
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a className="cursor-pointer">
              <p
                className={`font-medium text-nab ${
                  router.pathname === "/blog"
                    ? "text-tango-500"
                    : "text-shark-500"
                }`}
              >
                Blog
              </p>
            </a>
          </NextLink>
          <NextLink href="/how-it-works">
            <a className="cursor-pointer">
              <p
                className={`font-medium text-nab ${
                  router.pathname === "/how-it-works"
                    ? "text-tango-500"
                    : "text-shark-500"
                }`}
              >
                How it works
              </p>
            </a>
          </NextLink>
        </div>
        <div className="flex space-x-4 items-center">
          <NextLink href="/login">
            <a className="cursor-pointer">
              <p
                className={`font-medium text-nab ${
                  router.pathname === "/login"
                    ? "text-tango-500"
                    : "text-shark-500"
                }`}
              >
                Log In
              </p>
            </a>
          </NextLink>
          <div className="flex space-x-1 items-center cursor-pointer">
            <HiTranslate size={17} color="black" />
          </div>
          {mounted && (
            <>
              {resolvedTheme === "dark" ? (
                <div
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <BiSun size={17} color="black" />
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <MdDarkMode size={17} color="black" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
