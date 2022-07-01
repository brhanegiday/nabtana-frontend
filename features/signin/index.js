import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { LockClosedIcon, MailIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

function Signin() {
  return (
    <>
      <div className="w-4/6 m-auto h-screen justify-center items-center ">
        <div className="bg-gray-50 shadow-xl px-10 pt-7 py-5 grid grid-cols-1 md:grid-cols-2 gap-x0-4 items-center ">
          <div className="h-[30vw] relative w-[90%] hover:skew-y-2 transition-transform duration-500">
            <Image
              src="/signin/Welcome_transprent_bg.png"
              alt="secure_login"
              layout="fill"
              className="rotate"
              objectFit="contain"
            />
          </div>
          <div className="pl-3">
            <h1 className="leading-6 text-shark-900 text-2xl">
              Welcome to Nabtana
            </h1>
            <p className="py-3 text-sm text-shark-500">
              Please signin to your account and start the adventure
            </p>
            <div className="mt-1">
              <div className="w-4/5 relative">
                <label htmlFor="email" className="text-shark-900 text-sm">
                  Email
                </label>
                <MailIcon className="h-5 w-5 text-shark-300 absolute left-4 bottom-2.5" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full focus:outline-none rounded-md border-2 py-2 pl-10 sm:text-sm placeholder-gray-500 focus:ring-0"
                  placeholder="yourname@ex.com"
                />
              </div>
              <div className="mt-2 w-4/5 relative">
                <label htmlFor="password" className="text-shark-900 text-sm">
                  Password
                </label>
                <LockClosedIcon className="h-5 w-5 text-shark-300 absolute left-4 bottom-2.5" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full focus:outline-none rounded-md border-2 py-2 pl-10 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Remember me */}
            <div className="flex space-x-16 mt-4">
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  className="appearance-none1 checked:bg-[#1D2228] checked:border-transparent first:checked"
                />
                <p className="text-shark-500 text-nab">Remember me</p>
              </div>
              <div>
                <NextLink href="/404">
                  <a>
                    <p className="text-tango-500 text-nab font-bold">
                      Forget password?
                    </p>
                  </a>
                </NextLink>
              </div>
            </div>
            {/* Loggin Button  */}
            <button className="mt-5 mb-3 py-2 px-7 rounded-md bg-tango-500 hover:bg-tango-600 transition-colors duration-150 ease-out">
              <p className="text-sm font-bold text-white uppercase">Login</p>
            </button>
            <div className="flex space-x-1">
              <p className="text-nab text-shark-500">
                Don<span>&apos;</span>t you have an account?
              </p>
              <NextLink href="/register">
                <a>
                  <p className="text-tango-500 text-nab font-bold">
                    Create an account
                  </p>
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
