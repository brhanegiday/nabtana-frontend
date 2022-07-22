import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import NextLink from "next/link";
// import {  } from "@heroicons/react/outline";
function Filter() {
  const [openIndustry, setOpenIndustry] = useState(true);
  const [openStatus, setOpenStatus] = useState(true);

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
    "Idea/concept",
    "Pre-money",
    "Post-money",
    "Acquired",
    "Inactive",
  ];
  return (
    <div className="border-[#A7A199] border p-6 rounded-md bg-white-500 w-full">
      {/* Industry filter */}
      <div className="flex justify-between items-center py-1">
        <h4 className="text-shark-500 text-lg font-semibold">Industry</h4>
        <div
          className="cursor-pointer"
          onClick={() => setOpenIndustry((v) => !v)}
        >
          {openIndustry ? (
            <MinusCircleIcon className="text-shark-500 w-5 h-5" />
          ) : (
            <PlusCircleIcon className="text-shark-500 w-5 h-5" />
          )}
        </div>
      </div>
      {openIndustry && (
        <div className="transition duration-300 ease-out">
          <div className="space-y-1">
            {industryFilterItems.map((industry, index) => (
              <div key={index} className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  className="checked:bg-shark-500 checked:border-transparent first:checked"
                />
                <p className="text-shark-500 text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-[90%] h-[0.8px] my-4 bg-[#C4C4C4]"></div>

      {/* Status Filter */}
      <div className="flex justify-between items-center py-1">
        <h4 className="text-shark-500 text-lg font-semibold">Status</h4>
        <div
          className="cursor-pointer"
          onClick={() => setOpenStatus((v) => !v)}
        >
          {openStatus ? (
            <MinusCircleIcon className="text-shark-500 w-5 h-5" />
          ) : (
            <PlusCircleIcon className="text-shark-500 w-5 h-5" />
          )}
        </div>
      </div>

      {openStatus && (
        <div className="space-y-1">
          {statusFilterItems.map((status, index) => (
            <div key={index} className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="appearance-none1 checked:bg-sharktext-shark-500 checked:border-transparent first:checked"
              />
              <p className="text-shark-500 text-sm">{status}</p>
            </div>
          ))}
        </div>
      )}
      <div className="w-[90%] h-[0.8px] my-4 bg-[#C4C4C4]"></div>
      <h4 className="text-shark-500 text-lg font-semibold">Company Size</h4>
      <div className="relative pt-1">
        <label
          htmlFor="companyRange"
          className="text-shark-500 text-[0.9rem] form-label"
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
