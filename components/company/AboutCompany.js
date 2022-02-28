import React from "react";
import { LinkIcon } from "@heroicons/react/solid";
function AboutCompany({ companyDetail }) {
  return (
    <div>
      <h3 className="text-shark-500 text-2xl py-2">
        {companyDetail.companyName}
      </h3>
      <h4 className="text-shark-500 text-lg py-1">
        {companyDetail.companyExcerpt}
      </h4>
      <p className="text-nab text-shark-400 py-1">
        {companyDetail.companyDesc}
      </p>
      <div className="flex items-center py-3 space-x-1">
        <LinkIcon className="text-shark-400 w-5 h-5" />
        <p>
          <a
            href={companyDetail.website}
            target="_blank"
            rel="noreferrer"
            className="text-[#007687] text-nab"
          >
            {companyDetail.website}
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutCompany;
