import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="pt-10 pb-8">
      <div className="xl:container px-10  mx-auto">
        <h1 className="text-shark-500 text-3xl font-normal pb-2 text-center">
          About Nabtana
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-3">
            <h3 className="uppercase text-lg text-shark-500 py-2">
              what we do
            </h3>
            <p className="text-shark-400 text-nab">
              Governments around the world have been looking at adopting,
              regulating and even banning cryptocurrencies since the inception
              of Bitcoin. Ever since, the crypto ecosystem has been a rocket
              ship ride to the moon and back (multiple times). Today, it seems
              that more people than ever have hopped on for the ride. We
              <span>&apos;</span>ve also seen a massive shift toward digital
              platforms across all industries as a result of the pandemic.
              Political leaders globally have followed suit by taking steps to
              move their economies in the same direction.
            </p>
            <p className="text-shark-400 text-nab pt-4">
              One of the most recent examples is El Salvador, which made
              headlines by becoming the first country to adopt Bitcoin as legal
              tender (a move that has since been protested by its citizens). In
              the initial announcement, the country<span>&apos;</span>s
              president directly connected crypto as a competitor to
              remittances, noting this would increase the amount of money
              low-income families in El Salvador receive from remittances by the
              “equivalent of billions of dollars every year.”
            </p>
          </div>
          <div className="h-[30vw] relative w-[90%] hover:skew-y-2 transition-transform duration-500">
            <Image
              src="/signin/login_transprent_bg.png"
              alt="secure_login"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
          <div className="h-[30vw] relative w-[90%] hover:skew-y-2 transition-transform duration-500">
            <Image
              src="/signin/Welcome_transprent_bg.png"
              alt="secure_login"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h3 className="uppercase text-lg text-shark-500 py-2">
              PHILOSOPHY
            </h3>
            <p className="text-shark-400 text-nab">
              We think founders are most productive when they can spend most of
              their time building. Our goal is to create an environment where
              you can focus exclusively on building product and talking to
              users.
              <br />
              We seem to have succeeded in creating a good environment, because
              many founders have told us that the first ten weeks of Y
              Combinator were the most productive period of their lives.
            </p>
            <p className="text-shark-400 text-nab pt-4">
              We try to interfere as little as possible in the startups we fund.
              We don<span>&apos;</span>t take board seats or many of the other
              powers investors sometimes require. We offer lots of advice, but
              we can<span>&apos;</span>t force anyone to take it. We realize
              that independence is one of the reasons people want to start
              startups in the first place. And frankly, it<span>&apos;</span>s
              also one of the reasons startups succeed. Investors who try to
              control the companies they fund often end up destroying them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
