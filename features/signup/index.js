import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { LockClosedIcon, MailIcon, UserIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

function Signup() {
  return (
    <>
      <div className="w-4/6 m-auto h-screen justify-center items-center ">
        <div className="bg-gray-50 shadow-xl px-10 pt-7 py-5 grid grid-cols-1 md:grid-cols-2 gap-x0-4 items-center ">
          <div className="h-[30vw] relative w-[90%] hover:skew-y-2 transition-transform duration-500">
            <Image
              src="/signin/login_transprent_bg.png"
              alt="secure_login"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className=" pl-3">
            <h1 className="leading-6 text-shark-900 text-2xl">
              Welcome to Nabtana
            </h1>
            <p className="py-3 text-sm text-shark-500">
              Create an account and start the adventure
            </p>
            <div className="mt-1">
              <div className="w-4/5 relative">
                <label htmlFor="fullName" className="text-shark-900 text-sm">
                  Full name
                </label>
                <UserIcon className="h-5 w-5 text-shark-300 absolute left-4 bottom-2.5" />
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="w-full focus:outline-none rounded-md border-2 py-2 pl-10 sm:text-sm placeholder-gray-500 focus:ring-0"
                  placeholder="John Doe"
                />
              </div>
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

            {/* Loggin Button  */}
            <button className="mt-5 mb-3 py-2 px-7 rounded-md bg-tango-500 hover:bg-tango-600 transition-colors duration-150 ease-out">
              <p className="text-sm font-bold text-white uppercase">Sign Up</p>
            </button>
            <div className="flex space-x-1">
              <p className="text-nab text-shark-500">
                Already have an account?
              </p>
              <NextLink href="/signin">
                <a>
                  <p className="text-tango-500 text-nab font-bold">Login</p>
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
