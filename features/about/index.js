import React from "react";
import NextLink from "next/link";

function About() {
  return (
    <div className="pt-10 pb-8 sm:w-5/6 mx-auto md:w-3/5">
      <div className="xl:container px-10  mx-auto">
        <h1 className="text-shark-500 text-xl md:text-3xl font-semibold pb-2 text-center">
          How it works
        </h1>
        <div className="mt-3">
          <p className="text-shark-400 text-nab">
            Nabtana is a platform for connecting companies with a community. It
            provides information regarding Tigray-affiliated companies. Wide
            range of information is shared including status of company and
            financial information. Nabtana contributes to rebuilding Tigray by
            providing the necessary means for companies (not limited to but
            includes ideas, startup, or established company) to flourish and
            develop.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold text-shark-500 py-1">
            Register your company
          </h3>
          <p className="text-shark-400 text-nab">
            To register your company please fill the necessary information here.
            The team will review the data, which could take up to 48 hours.
            After the team has finished reviewing, you will receive a
            notification that your company has been officially registered in
            Nabtana.
          </p>
          <div className="mt-3">
            <NextLink href="/register">
              <a>
                <button className="py-[0.4rem] px-10 uppercase rounded-full font-bold border-[1px] text-tango-500 bg-shark-500 border-[#1D2228] text-sm">
                  Register
                </button>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
