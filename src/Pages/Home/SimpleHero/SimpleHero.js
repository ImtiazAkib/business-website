import React from "react";
import office from "../../../assets/images/hero.jpg";

const SimpleHero = () => {
  return (
    <div className="hero mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={office}
          className="lg:max-w-lg rounded-lg shadow-2xl"
          alt="office"
        />
        <div className="ml-0 lg:ml-10">
          <h1 className="text-4xl font-bold">
            Kesef Business Solutions & BPO Services in Bangladesh
          </h1>
          <hr className="w-10 mt-4 h-[3px] primary-color" />
          <p className="py-6">
            Kesef Business Solutions provides offshore outsourcing in call
            centre operations and business back-end support from Bangladesh. We
            have been in the Business Process Outsourcing Industry for over two
            years.
          </p>
          <button className="btn btn-neutral">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
