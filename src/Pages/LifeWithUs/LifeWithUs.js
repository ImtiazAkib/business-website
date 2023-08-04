import React from "react";
import img from "../../assets/images/about4.jpg";
import banner from "../../assets/images/life.jpg";

const LifeWithUs = () => {
  return (
    <div>
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-blue-400 bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              Life At Synergy Business Solution
            </h1>
          </div>
        </div>
      </div>
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <p className="py-0 lg:py-6">
              SYNERGY BUSINESS SOLUTION was founded in September 2019, believing
              that a flawless customer experience is the most critical factor in
              the success of any brand. We believe that outsourcing and
              globalization of manufacturing allow companies to reduce costs,
              benefit consumers with lower-cost goods and services, cause
              economic expansion that reduces unemployment, and increase
              productivity and job creation. If you want a quick, hassle-free,
              and cost-efficient technique to identify and contact potential
              clients, our company can significantly help you. It is better
              compared to other different ways to be in contact with consumers.
              We provide outsourcing services from our delivery centre in
              Bangladesh. We have an on-site management team working
              interminable with fully disposable voice data links to the global,
              enterprise-grade network infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16 px-4">
        <p className="max-w-[80rem]">
          We take pride in our empowered management team who are working
          synergistically every day to make better improvements in this company.
          Telemarketing industry is a rapid growing sector in Bangladesh that
          encourages the youth generation to get involved in the growth of our
          economy at an early stage. Since most of our employees are highly
          spirited and enthusiastic youths, we take pride in the fact that they
          are contributing to the economy and learning to take responsibilities
          at an early stage of life. Out telemarketing warriors are always
          coming up with new innovative ideas to provide the best service from
          their end and deliver maximum customer satisfaction. In the upcoming
          years our main goal is to expand our category of services to reach out
          to more people. We are already in the process of magnifying our office
          into a bigger modern work space and provide work for 1000+ employees
          of all genders. We are already providing a great working environment
          for our employees and we are focusing to make it even better in the
          upcoming days so we can deliver the best output possible from our
          employees. We are on our journey to make Synergy Business Solution one
          of the top three telemarketing companies in Bangladesh within the next
          few years.
        </p>
      </div>
    </div>
  );
};

export default LifeWithUs;
