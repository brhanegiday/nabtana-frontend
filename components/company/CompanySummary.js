import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function CompanySummary({ company }) {
  console.log("summary", company);
  return (
    <div className="bg-white py-3 px-5 border-[1px] border-gray-400 rounded-md w-full">
      <div className="flex items-center space-x-2">
        <img
          src={company.companyLogo}
          alt={company.alt}
          width="50px"
          height="50px"
          // layout="responsive"
        />
        <h3 className="">{company.companyName}</h3>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <p className="text-nab text-shark-400">Founded:</p>
          <p className="text-nab text-shark-500 text-xs">
            {company.foundedYear}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-nab text-shark-400">Team Size:</p>
          <p className="text-nab text-shark-500 text-xs">{company.teamSize}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-nab text-shark-400">Location:</p>
          <p className="text-nab text-shark-500 text-xs">{company.location}</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center space-x-3">
          {company.companySocialLinks?.twitter && (
            <a
              href={company.companySocialLinks.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={15} />
            </a>
          )}
          {company.companySocialLinks?.linkedin && (
            <a
              href={company.companySocialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={15} />
            </a>
          )}
          {company.companySocialLinks?.facebook && (
            <a
              href={company.companySocialLinks.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={15} />
            </a>
          )}
          {company.companySocialLinks?.instagram && (
            <a
              href={company.companySocialLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={15} />
            </a>
          )}
          {company.companySocialLinks?.mail && (
            <a
              href={company.companySocialLinks.mail}
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanySummary;
