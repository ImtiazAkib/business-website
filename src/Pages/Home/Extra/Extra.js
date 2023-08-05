import React from "react";
import worker from "../../../assets/images/workers.jpg";

const Extra = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Why Choose KBS</h1>
      <hr className="w-10 mt-4 h-[3px] primary-color mr-auto ml-auto" />
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={worker}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <div className="py-6">
              <ul className="pb-4">
                <li>
                  <span className="font-bold">Comprehensive Solutions:</span>
                  <span>
                    {" "}
                    We offer a full suite of services, making us a one-stop
                    solution for your digital and operational needs
                  </span>
                </li>
                <li>
                  <span className="font-bold">Experienced Team:</span>
                  <span>
                    {" "}
                    Our team comprises skilled professionals with expertise in
                    their respective domains, ensuring high-quality
                    deliverables.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Tailored Approach: </span>
                  <span>
                    We believe in understanding your unique requirements and
                    crafting customized solutions that align with your business
                    objectives.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Client-Centric Focus: </span>
                  <span>
                    Your satisfaction is our priority. We maintain open
                    communication and adapt our services to exceed your
                    expectations
                  </span>
                </li>
                <li>
                  <span className="font-bold">Cost-Effective: </span>
                  <span>
                    Outsourcing to KBS allows you to access top-notch services
                    without the burden of hiring and training an in-house team.
                  </span>
                </li>
              </ul>
              Join Kesef Business Solutions today to leverage our expertise in
              web design & development, digital marketing, virtual assistance,
              telemarketing & sales, and customer support. Let us be your
              strategic partner in propelling your business forward and
              achieving sustainable growth.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
