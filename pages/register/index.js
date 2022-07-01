import React from "react";
import Layout from "../../features/layout/Layout";
import Signup from "../../features/signup";
function RegisterPage() {
  return (
    <div>
      <Layout title="Register your company">
        <Signup />
      </Layout>
    </div>
  );
}

export default RegisterPage;
