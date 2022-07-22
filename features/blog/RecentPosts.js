import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

function RecentPosts({ title }) {
  return (
    <div className="flex items-center space-x-2 border-b border-gray-300 py-2 md:w-[85%]">
      <ChevronRightIcon className="h-5 w-5 text-shark-400" />
      <Link href={`/blog/${title.toLocaleLowerCase().split(" ").join("-")}`}>
        <a>
          <h3 className="text-[#007687] cursor-pointer text-sm">{title}</h3>
        </a>
      </Link>
    </div>
  );
}

export default RecentPosts;
