import { useEffect, useState } from "react";
import Layout from "../../features/layout/Layout";
import CompanyDetail from "../../components/company";
import { useRouter } from "next/router";
// data
import { companies } from "../../data/companies";

function CompanyPage() {
  const router = useRouter();
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    const { company: slug } = router.query;
    const data = companies.find((c) => c.companySlug === slug);
    setCompanyData(data);
  }, [router]);
  return (
    <div>
      <Layout title={companyData.companyName}>
        <CompanyDetail company={companyData} />
      </Layout>
    </div>
  );
}

export default CompanyPage;
