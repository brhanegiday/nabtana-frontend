import Image from "next/image";
import NavLink from "./NavLink";
import AboutCompany from "./AboutCompany";
import CompanySummary from "./CompanySummary";
function CompanyDetail({ company }) {
  return (
    <div className="pt-8 pb-8">
      <div className="xl:container  px-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="">
            <h1 className="text-shark-500 text-2xl">About</h1>
          </div>
          <div className="col-span-5 flex justify-around">
            <div className="w-3/5 ">
              <div className="flex space-x-5 items-center">
                <img
                  src={company.companyLogo}
                  alt={company.alt}
                  width="100px"
                  height="100px"
                  priority
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {company.industry?.map((industryType) => (
                      <div
                        className="bg-shark-300 py-1 px-3 rounded-md"
                        key={company.id}
                      >
                        <p className="uppercase text-shark-500 text-[10px]">
                          {industryType}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    {company.status?.map((statusType, index) => (
                      <div
                        className="bg-shark-300 py-1 px-3 rounded-md"
                        key={`company-status-${index}`}
                      >
                        <p className="uppercase text-shark-500 text-[10px]">
                          {statusType}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <NavLink />
              </div>
              <div>
                <AboutCompany companyDetail={company} />
              </div>
            </div>
            <div className="">
              <CompanySummary />
            </div>
          </div>
        </div>
        {/* Founders */}
      </div>
    </div>
  );
}

export default CompanyDetail;
