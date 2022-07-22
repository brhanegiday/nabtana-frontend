import React from "react";
import Layout from "../../features/layout/Layout";
import Signup from "../../features/signup/register";
function RegisterPage() {
  return (
    <div>
      <Layout title="Register">
        <Signup />
      </Layout>
    </div>
  );
}

export default RegisterPage;
