function AboutCompany({ companyDetail }) {
  return (
    <>
      <div id="about">
        <h3 className="text-tango-500 font-semibold text-2xl">
          {companyDetail.companyName}
        </h3>
        <h4 className="text-shark-500 text-lg py-1">
          {companyDetail.companyExcerpt}
        </h4>
        <p className="text-sm text-shark-400 py-1">
          {companyDetail.companyDesc}
        </p>
      </div>
      <div className="py-4" id="news">
        <h3 className="text-tango-500 font-semibold text-2xl">Latest News</h3>
        <a href={companyDetail.website} target="_blank" rel="noreferrer">
          <p className="text-[#007687] py-2">
            Gezana Brought Crypto to Main Street. Now Brian Armstrong Wants to
            Be Your Banker
          </p>
        </a>
        <p className="text-sm text-shark-400">Dec 06, 2021</p>
      </div>
      <div id="faq" className="mt-3 pb-5">
        <h3 className="text-tango-500 font-semibold text-2xl">FAQ</h3>
        <div
          className="accordion accordion-flush py-4"
          id="accordionFlushExample"
        >
          <div className="accordion-item border-t-1 border-l-1 border-r-1 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
              <button
                className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse border-0 collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body py-4 px-5 text-shark-400 text-sm">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first accordion body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCompany;
