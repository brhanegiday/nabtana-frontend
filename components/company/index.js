import Image from "next/image";
import NavLink from "./NavLink";
import AboutCompany from "./AboutCompany";
import Founders from "./Founders";
import CompanySummary from "./CompanySummary";

function CompanyDetail({ company }) {
  return (
    <div className="pt-5 md:pt-10 pb-8">
      <div className="xl:container px-10 lg:px-20 mx-auto">
        <div className="lg:grid grid-cols-1 lg:grid-cols-5">
          <h1 className="text-shark-500 text-2xl pb-5 md:pb-0">Company</h1>
          <div className="col-span-4">
            <div className="flex justify-between gap-x-6">
              <div className="md:w-3/5">
                <div className="flex space-x-5 items-center">
                  <img
                    src={company.companyLogo}
                    alt={company.alt}
                    width="100px"
                    height="100px"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      {company.industry?.map((industryType, index) => (
                        <div
                          className="bg-shark-200 py-1 px-3 rounded-md"
                          key={`compayID-${index}`}
                        >
                          <p className="uppercase text-shark-500 font-bold text-[9px]">
                            {industryType}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      {company.status?.map((statusType, index) => (
                        <div
                          className="bg-shark-200 py-1 px-3 rounded-md"
                          key={`company-status-${index}`}
                        >
                          <p className="uppercase text-shark-500 font-bold text-[9px]">
                            {statusType}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <NavLink company={company} />
                <AboutCompany companyDetail={company} />
              </div>
              <div className="hidden sm:block">
                <CompanySummary company={company} />
                <div className="mt-7">
                  <button
                    type="button"
                    className="py-1 px-5 rounded-md bg-shark-800"
                  >
                    <p className="text-white text-xs leading-5 font-semibold uppercase">
                      follow
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Founders company={company} />
      </div>
    </div>
  );
}

export default CompanyDetail;
