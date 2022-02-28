import Image from "next/image";
import React from "react";

function Founders({ company }) {
  const { founders, website, companyName } = company;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-5">
      <h1 className="text-shark-500 text-2xl">Founders</h1>
      <div className="col-span-3 border-b border-gray-400 pb-4">
        {founders?.map((founder, index) => (
          <div key={`founder-${index}`} className="flex items-center py-2">
            <div>
              <h3 className="text-xl text-shark-500">{founder.name}</h3>
              <p className="text-nab text-shark-400 py-2 w-4/5">
                {founder.aboutFounder}
              </p>
            </div>
            <div className="bg-white py-2 px-4 border-[1px] border-gray-400 rounded-lg flex space-x-1 w-full items-center">
              <div className="rounded-full">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={100}
                  height={80}
                  objectFit="contain"
                />
              </div>
              <div>
                <h4 className="text-sm">{founder.name}</h4>
                <a href={website} target="_blank" rel="noreferrer">
                  <p className="text-nab text-[#007687] py-1"> {companyName}</p>
                </a>
                <div className="flex items-center space-x-1 mt-2">
                  {founder.founderSocialLinks.facebook && (
                    <a
                      href={founder.founderSocialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        src="/socialLinks/facebook_icon.svg"
                        width="15px"
                        height="15px"
                        className="object-contain"
                      />
                    </a>
                  )}
                  {founder.founderSocialLinks.twitter && (
                    <a
                      href={founder.founderSocialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        src="/socialLinks/twitter_icon.svg"
                        width="15px"
                        height="15px"
                        className="object-contain"
                      />
                    </a>
                  )}
                  {founder.founderSocialLinks.linkedin && (
                    <a
                      href={founder.founderSocialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        src="/socialLinks/linkedin_icon.svg"
                        width="15px"
                        height="15px"
                        className="object-contain"
                      />
                    </a>
                  )}
                  {founder.founderSocialLinks.instagram && (
                    <a
                      href={founder.founderSocialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        src="/socialLinks/instagram_icon.svg"
                        width="15px"
                        height="15px"
                        className="object-contain"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Founders;
