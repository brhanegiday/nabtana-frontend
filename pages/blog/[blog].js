import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { blogs } from "../../data/blogs";
import BlogDetail from "../../features/blog/BlogDetail";
import Layout from "../../features/layout/Layout";

function BlogDetailPage() {
  const router = useRouter();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    if (!router.isReady) return;
    const { blog } = router.query;
    const data = blogs.find((c) => c.slug === blog);
    setBlogData(data);
  }, [router]);

  return (
    <div>
      <Layout>
        <BlogDetail blog={blogData} />
      </Layout>
    </div>
  );
}

export default BlogDetailPage;
