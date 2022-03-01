import React from "react";
import NextLink from "next/link";
import Filter from "../../components/FilterFC";
import Company from "./Company";
// Icons
import { SearchIcon } from "@heroicons/react/solid";
// data
import { companies } from "../../data/companies";

function Home() {
  return (
    <div className="pt-10 pb-8">
      <div className="xl:container px-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* left column */}
          <div className="w-[90%]">
            <h1 className="text-shark-500 text-5xl font-normal py-1">
              Nabtana
            </h1>
            <p className="text-[#1d2228] text-nab">
              Recent prominent data breach incidents, such as hacks of the
              Office of Personnel Management,{" "}
            </p>
            <div className="mt-3">
              <NextLink href="/how-it-works">
                <a>
                  <button className="py-1 px-3 rounded-sm border-[1px] border-[#1D2228] text-sm">
                    LEARN MORE
                  </button>
                </a>
              </NextLink>
            </div>
            <div className="mt-14">
              <Filter />
            </div>
          </div>
          {/* Right column */}
          <div className="col-span-2">
            <h1 className="text-[#1d2228] text-3xl font-normal py-1">
              Startup Directory
            </h1>
            <p className="text-[#1d2228] text-nab">
              Discover startup companies by industry, status, and company size.
            </p>
            <div className="bg-white border-[#979797] border-[1px] py-[0.8rem] px-5 rounded-md w-3/5 mt-5">
              <div className=" w-full mx-auto relative flex items-center">
                <SearchIcon className="text-shark-400 absolute left-4 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Startups..."
                  className="border-[#979797] border-[1px] rounded-md py-[0.3rem] focus:outline-white-700 pl-10 w-[100%] text-sm text-shark-500 placeholder:text-shark-400"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-shark-500 text-nab">
                Showing 40 of 1,000+ companies
              </p>
              <div className="w-[70%] h-[1px] mt-3 bg-shark-300"></div>
              {/* Companies List */}
              <div className="">
                {companies.map((company) => (
                  <Company key={company.id} company={company} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
