import BlogList from "./BlogList";

function Blog() {
  return (
    <div className="pt-10 pb-8">
      <div className="xl:container px-10 lg:px-20  mx-auto">
        <h1 className="text-2xl text-shark-500">Latest News</h1>
        <div className="mt-10">
          <BlogList />
        </div>
      </div>
    </div>
  );
}

export default Blog;
