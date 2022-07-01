import Image from "next/image";
import NavLink from "./NavLink";
import AboutCompany from "./AboutCompany";
import Founders from "./Founders";
import CompanySummary from "./CompanySummary";
function CompanyDetail({ company }) {
  return (
    <div className="pt-8 pb-8">
      <div className="xl:container  px-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <h1 className="text-shark-500 text-2xl">Company</h1>
          <div className="col-span-3 border-b pb-2 w0-5/6">
            <div className="w-5/6">
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
              <div>
                <NavLink company={company} />
              </div>
              <div>
                <AboutCompany companyDetail={company} />
              </div>
            </div>
          </div>
          <div className="w-full">
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
        {/* Founders */}
        <Founders company={company} />
      </div>
    </div>
  );
}

export default CompanyDetail;
