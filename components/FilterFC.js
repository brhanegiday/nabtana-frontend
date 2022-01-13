import React from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";

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
    <div className="border-[#eee] border-[1px] py-6 px-4">
      <div className="flex justify-between">
        <h4 className="text-[#1d2228] text-lg font-semibold">Industry</h4>
        <MinusCircleIcon className="text-[#1d2228] w-5 h-5" />
      </div>
      <div className="">
        {industryFilterItems.map((industry, index) => (
          <div key={index} className="flex space-x-1">
            <input
              type="checkbox"
              className="appearance-none checked:bg-[#1D2228] checked:border-transparent first:checked"
            />
            <p className="text-[#1d2228]">{industry}</p>
          </div>
        ))}
      </div>
      <p className="text-[#007687] underline text-sm">See all options</p>
      <div className="w-[80%] h-[0.8px] mt-4 bg-[#1d2228]"></div>
    </div>
  );
}

export default Filter;
