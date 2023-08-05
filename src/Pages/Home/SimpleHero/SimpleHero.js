import React from "react";
import office from "../../../assets/images/hero.jpg";

const SimpleHero = () => {
  return (
    <div className="hero mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={office}
          className="lg:max-w-xl rounded-lg shadow-2xl"
          alt="office"
        />
        <div className="ml-0 lg:ml-10">
          <h1 className="text-4xl font-bold">
            Kesef Business Solutions & BPO Services in Bangladesh
          </h1>
          <hr className="w-10 mt-4 h-[3px] primary-color" />
          <p className="py-6">
            Kesef Business Solutions Ltd is a promising BPO startup making waves
            in Bangladesh's business landscape. Founded with a vision to deliver
            top-notch outsourcing services, Kesef has quickly gained recognition
            for its dedication to excellence and customer-centric approach.
            Leveraging a skilled workforce and advanced technology, the company
            offers a wide range of business process outsourcing solutions,
            including customer support, data entry, and back-office operations.
            With a strong commitment to quality, efficiency, and data security,
            Kesef Business Solutions has become a trusted partner for both local
            and international clients, driving growth and prosperity in the
            Bangladeshi outsourcing industry. As they continue to expand their
            services and forge partnerships, Kesef is poised to become a major
            player in the region, fueling economic development and creating job
            opportunities for talented individuals.
          </p>
          <button className="btn btn-neutral">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
