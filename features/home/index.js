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
      <div className="xl:container px-20  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-20">
          {/* left column */}
          <div className="w-[90%] col-span-2 ">
            <h1 className="text-tango-500 text-4xl font-bold py-1">
              How it works
            </h1>
            <p className="text-shark-500 text-nab">
              Nabtana is a platform for connecting companies with a community.
              It provides information regarding Tigray-affiliated companies.
              Wide range of information is shared including status of company
              and financial information.
            </p>
            <div className="mt-3">
              <NextLink href="/how-it-works">
                <a>
                  <button className="py-[0.4rem] px-6 bg-shark-500 text-tango-500 font-bold rounded-full border-[1px] border-[#1D2228] text-sm">
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
          <div className="col-span-4">
            <h1 className="text-[#1d2228] text-3xl font-normal py-1">
              Startup Directory
            </h1>
            <p className="text-[#1d2228] text-nab">
              Discover startup companies by industry, status, and company size.
            </p>
            <div className="bg-white border-shark-300 border-[1px] py-[0.8rem] px-5 rounded-md w-3/5 mt-5">
              <div className=" w-full mx-auto relative flex items-center">
                <SearchIcon className="text-shark-400 absolute left-4 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Startups..."
                  className="border-shark-200 border-[1px] rounded-md py-[0.4rem] focus:outline-shark-300 pl-10 w-[100%] text-sm text-shark-500 placeholder:text-shark-400"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-shark-500 text-nab">
                Showing 7 of 40+ companies
              </p>
              {/* Companies List */}
              <div className="w-fit">
                <div className="w-full h-[1px] mt-3 bg-mercury-400"></div>
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
