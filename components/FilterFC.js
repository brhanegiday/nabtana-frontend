import React from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";
import NextLink from "next/link";
function Filter() {
  const industryFilterItems = [
    "All Industry",
    "B2B Software and Services",
    "Education",
    "Consumer",
    "Healthcare",
    "Financial Technology",
    "Real Estate and Construction",
    "Industrials",
  ];

  const statusFilterItems = [
    "All states",
    "Active",
    "Public",
    "Acquired",
    "Inactive",
  ];
  return (
    <div className="border-[#979797] border-[1px] p-6 rounded-md bg-white-500">
      {/* Industry filter */}
      <div className="flex justify-between items-center py-1">
        <h4 className="text-[#1d2228] text-lg font-semibold">Industry</h4>
        <MinusCircleIcon className="text-[#1d2228] w-5 h-5" />
      </div>
      <div className="space-y-1">
        {industryFilterItems.map((industry, index) => (
          <div key={index} className="flex space-x-2 items-center">
            <input
              type="checkbox"
              className="appearance-none2 checked:bg-shark-500 checked:border-transparent first:checked"
            />
            <p className="text-shark-500 text-nab">{industry}</p>
          </div>
        ))}
      </div>
      <div className="mt-1">
        <NextLink href="/">
          <a>
            <p className="text-[#007687] underline text-sm">See all options</p>
          </a>
        </NextLink>
      </div>
      <div className="w-[90%] h-[0.8px] my-4 bg-[#C4C4C4]"></div>

      {/* Status Filter */}
      <div className="flex justify-between items-center py-1">
        <h4 className="text-[#1d2228] text-lg font-semibold">Status</h4>
        <MinusCircleIcon className="text-[#1d2228] w-5 h-5 cursor-pointer" />
      </div>
      <div className="space-y-1">
        {statusFilterItems.map((status, index) => (
          <div key={index} className="flex space-x-2 items-center">
            <input
              type="checkbox"
              className="appearance-none1 checked:bg-[#1D2228] checked:border-transparent first:checked"
            />
            <p className="text-shark-500 text-nab">{status}</p>
          </div>
        ))}
      </div>
      <div className="w-[90%] h-[0.8px] my-4 bg-[#C4C4C4]"></div>
      <h4 className="text-[#1d2228] text-lg font-semibold">Company Size</h4>
      <div className="relative pt-1">
        <label
          htmlFor="companyRange"
          className="text-shark-500 text-nab form-label"
        >
          1 - 1,000+
        </label>
        <input
          type="range"
          className="w-full h-6 p-0 bg-[#007687] focus:outline-none focus:ring-5 focus:shadow-none"
          min="1"
          max="1000"
          id="companyRange"
        />
      </div>
    </div>
  );
}

export default Filter;
