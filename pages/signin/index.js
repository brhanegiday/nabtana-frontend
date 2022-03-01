import React from "react";
import Layout from "../../features/layout/Layout";
import Signin from "../../features/signin";
function SigninPage() {
  return (
    <div>
      <Layout title="Login">
        <Signin />
      </Layout>
    </div>
  );
}

export default SigninPage;
