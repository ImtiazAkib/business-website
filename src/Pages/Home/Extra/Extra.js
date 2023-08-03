import React from "react";
import worker from "../../../assets/images/workers.jpg";

const Extra = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Life At Synergy Business Solution
      </h1>
      <hr className="w-10 mt-4 h-[3px] bg-primary mr-auto ml-auto" />
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={worker}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <p className="py-6">
              Synergy Business Solution (SBS) is one of the fastest-growing
              telemarketing companies in Bangladesh. Since its inception in
              2019, we have worked hard to develop the company and adapt to any
              circumstances, making SBS the best version of itself. With a
              dynamic and energetic team on our side, SBS thrives on providing
              skilful delivery of services and, most importantly, utmost
              customer satisfaction. We started with only a handful of
              telemarketers in the beginning. However, in the past few years, we
              have masterfully survived the blows of COVID-19 and have proudly
              stepped into a progressive stage with a team of nearly 50+
              employees and a bigger office. We take pride in our empowered
              management team, who are working synergistically every day to make
              better improvements in this company.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
