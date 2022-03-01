import Image from "next/image";

function BlogDetail({ blog }) {
  return (
    <div className="pt-10 pb-8 lg:w-3/5 mx-auto">
      <div className="xl:container px-10  mx-auto">
        <h1 className="text-2xl text-shark-500 w-[90%] py-4">{blog.title}</h1>
        <div className="flex space-x-3 items-center">
          <p className="text-xs text-shark-500 font-semibold">{blog.author}</p>
          <p className="text-xs text-shark-500">{blog.date}</p>
        </div>
        <div className="h-[35vw] relative">
          <Image
            src="/signin/login_transprent_bg.png"
            alt="secure_login"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-shark-400 py-4">{blog.desc}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
