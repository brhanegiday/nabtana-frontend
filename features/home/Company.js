import React from "react";
import Image from "next/image";
import NextLink from "next/link";

function Company({ company }) {
  return (
    <NextLink href={`/company/${company.companySlug}`}>
      <a>
        <div className="pt-3 hover:bg-mercury-300 w-fit transition duration-150 ease-out">
          <div className="flex items-center space-x-8 py-3">
            <div className="rounded-full">
              <Image
                src={company.companyLogo}
                alt={company.alt}
                width={120}
                height={120}
              />
            </div>
            <div className="">
              <div className="flex space-x-1 items-baseline">
                <h3 className="text-shark-500 text-2xl">
                  {company.companyName}
                </h3>
                <p className="text-shark-500 text-xs">{company.location}</p>
              </div>
              <p className="text-shark-500 text-nab w-3/4">
                {company.companyExcerpt}
              </p>
              <div className="flex items-center space-x-2 py-3">
                {company.industry?.map((industryType, index) => (
                  <div
                    className="bg-shark-200 py-1 px-3 rounded-md"
                    key={`industryType+${index}`}
                  >
                    <p className="uppercase text-shark-500 text-[10px] font-bold">
                      {industryType}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className="flex items-center space-x-2">
                {company.status?.map((statusType, index) => (
                  <div
                    className="bg-shark-200 py-1 px-3 rounded-md"
                    key={`statusType-${index}`}
                  >
                    <p className="uppercase text-shark-500 text-[10px] font-bold">
                      {statusType}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="w-full h-[1px] mt-3 bg-mercury-500"></div>
        </div>
      </a>
    </NextLink>
  );
}

export default Company;
