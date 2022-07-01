import { LinkIcon } from "@heroicons/react/solid";
import Link from "next/link";

function NavLink({ company }) {
  return (
    <div className="py-5 flex items-center justify-between pr-5">
      <div className="flex items-center p-2 gap-x-3">
        <Link href={`/company/${company.companySlug}/#about`} passHref>
          <h3
            id="about"
            className="text-sm transition duration-150 ease-out hover:ease-in hover:text-shark-500 cursor-pointer"
          >
            About
          </h3>
        </Link>
        <Link href={`/company/${company.companySlug}/#news`} passHref>
          <h3
            id="news"
            className="text-sm transition duration-150 ease-out hover:ease-in text-shark-400 hover:text-shark-500 cursor-pointer"
          >
            News
          </h3>
        </Link>
        <Link href={`/company/${company.companySlug}/#faq`} passHref>
          <h3
            id="faq"
            className="text-sm transition duration-150 ease-out hover:ease-in text-shark-400 hover:text-shark-500 cursor-pointer"
          >
            FAQ
          </h3>
        </Link>
      </div>
      <div className="flex items-center space-x-1">
        <LinkIcon className="text-shark-400 w-4 h-4" />
        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
          className="text-[#007687]"
        >
          {company.website}
        </a>
      </div>
    </div>
  );
}

export default NavLink;
