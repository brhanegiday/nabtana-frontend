import React from "react";
import BlogCard from "./BlogCard";
import RecentPosts from "./RecentPosts";
import { blogs } from "../../data/blogs";

function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-2">
        {blogs?.map((blog) => (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="col-span-1">
        <h3 className="text-xl pb-3">Recent posts</h3>
        {blogs?.map((blog) => (
          <div key={blog.id}>
            <RecentPosts title={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
