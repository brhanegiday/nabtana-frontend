import Image from "next/image";
import { UserIcon, CalendarIcon } from "@heroicons/react/solid";
import Link from "next/link";
function BlogCard({ blog }) {
  return (
    <div className="flex space-x-4 first:pb-6 pt-4 border-b-[1px] border-gray-300">
      <div className="hover:skew-y-2 rounded-md transition-transform duration-500">
        <Link href={`/blog/${blog.slug}`}>
          <a>
            <Image src={blog.image} alt={blog.title} width={500} height={350} />
          </a>
        </Link>
      </div>
      <div>
        <Link href={`/blog/${blog.slug}`}>
          <a>
            <h3 className="text-[#007687] cursor-pointer w-4/5">
              {blog.title}
            </h3>
          </a>
        </Link>
        <div className="flex space-x-6 items-center py-2">
          <div className="flex space-x-1 items-center">
            <UserIcon className="h-4 w-4 text-shark-400" />
            <p className="text-xs text-tango-500 font-semibold">
              {blog.author}
            </p>
          </div>
          <div className="flex space-x-1 items-center">
            <CalendarIcon className="h-4 w-4 text-shark-400" />
            <p className="text-xs text-shark-500">{blog.date}</p>
          </div>
        </div>
        <p className="w-4/5 text-sm text-shark-400">{blog.excerpt}</p>
        <div className="flex w-fit space-x-2 mt-3">
          {blog.tags.map((tag, index) => (
            <div className="py-1 px-4 rounded-md bg-shark-200 " key={index}>
              <p className="text-xs">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
