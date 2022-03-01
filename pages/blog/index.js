import React from "react";
import Layout from "../../features/layout/Layout";
import Blog from "../../features/blog";
function BlogPage() {
  return (
    <div>
      <Layout title="Blog">
        <Blog />
      </Layout>
    </div>
  );
}

export default BlogPage;
