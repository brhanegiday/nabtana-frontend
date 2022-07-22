import { useState, useEffect } from "react";
import NextLink from "next/link";
import Filter from "../../components/FilterFC";
import Company from "./Company";
// Icons
import { SearchIcon } from "@heroicons/react/solid";
// data
import { companies } from "../../data/companies";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCompany, setShowCompany] = useState(false);
  const [companyList, setCompanyList] = useState(companies);

  const filteredCompanies = companies.filter((company) =>
    company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    if (filteredCompanies.length > 0) {
      setCompanyList(filteredCompanies);
    } else {
      setCompanyList(companyList);
    }

    if (filteredCompanies.length === 0 || companyList.length === 0) {
      // setShowCompany(true);
      // setSearchTerm("");
      // setCompanyList([]);
    }
  }, [searchTerm]);

  return (
    <div className="pt-5 md:pt-10 pb-8">
      <div className="xl:container lg:px-20  mx-auto px-10">
        <div className="md:grid grid-cols-1 md:grid-cols-6 md:gap-20">
          {/* left column */}
          <div className="w-full sm:w-[90%] col-span-2">
            <h1 className="text-tango-500 text-xl md:text-3xl font-bold py-1">
              How it works
            </h1>
            <p className="text-shark-500 text-sm py-2">
              Nabtana is a platform for connecting companies with a community.
              It provides information regarding Tigray-affiliated companies.
              Wide range of information is shared including status of company
              and financial information.
            </p>
            <div className="mt-3">
              <NextLink href="/how-it-works">
                <button className="py-2 px-6 bg-shark-500 text-tango-500 font-bold rounded-md border text-xs">
                  LEARN MORE
                </button>
              </NextLink>
            </div>
            <div className="hidden md:block mt-14">
              <Filter />
            </div>
          </div>
          {/* Right column */}
          <div className="mt-5 md:mt-0 col-span-4">
            <h1 className="text-shark-500 text-xl md:text-3xl font-semibold py-1">
              Startup Directory
            </h1>
            <p className="text-shark-500 text-nab">
              Discover startup companies by industry, status, and company size.
            </p>
            <div className="bg-white border-shark-300 border-[1px] py-[0.8rem] px-5 rounded-md sm:w-3/5 mt-5">
              <div className=" w-full mx-auto relative flex items-center">
                <SearchIcon className="text-shark-400 absolute left-4 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-shark-200 border rounded-md py-[0.4rem] focus:outline-shark-300 pl-10 w-full text-sm text-shark-500 placeholder:text-shark-400"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-shark-500 text-sm">
                Showing {companyList.length} of {companies.length} companies
              </p>
              {/* Companies List */}
              {!showCompany ? (
                <div className="w-fit">
                  <div className="w-full h-[1px] mt-3 bg-mercury-400"></div>
                  {companyList.map((company) => (
                    <Company key={company.id} company={company} />
                  ))}
                </div>
              ) : (
                <p className="text-md py-3">No companies found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
