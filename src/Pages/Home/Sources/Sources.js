import {
  faBusinessTime,
  faChartLine,
  faDollar,
  faHandsHelping,
  faHandshakeSimple,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sources = () => {
  return (
    <div className="bg-base-200">
      <h2 className="text-center font-bold text-5xl pt-10 pb-10">
        Why Client Outsource Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        <div className="card shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl">
              <FontAwesomeIcon icon={faDollar} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              SMART INVESTMENT: WE ARE
            </h2>
            <p>
              Contrary to popular belief, working with an outsourcing company
              could significantly cut costs. BPO investments allow you to save
              time and money. You can use the time you'll save to manage
              strategic concerns for your business rather than day-to-day
              problems.
            </p>
          </div>
        </div>
        <div className="card  shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faHandsHelping} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              WE REMOVE A LOAD FROM YOUR SHOULDERS
            </h2>
            <p>
              This justification is extremely important to independent thinkers.
              Sometimes it's best to leave matters in the hands of others. You
              won't need to worry about finding or employing new personnel in
              this situation. Additionally, you don't need to stress about
              training them. When you require new team members, BPO is designed
              to have them available.
            </p>
          </div>
        </div>
        <div className="card  shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faBusinessTime} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              ANY COMPANY CAN HIRE US
            </h2>
            <p>
              Big firms are no longer the only ones who outsource. The viability
              of BPO services makes them appealing. They are also customized to
              the requirements of each company. We set out to make things
              simpler and more affordable for every size of business.
            </p>
          </div>
        </div>
        <div className="card  shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faHandshakeSimple} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">WE ARE WITH YOU</h2>
            <p>
              We give you the freedom to concentrate on your company's key
              beliefs as a small, beginning firm. We work with you to build your
              team while not overpaying them as a business process outsourcing
              team. Our Team's qualified professionals are here to assist you.
            </p>
          </div>
        </div>
        <div className="card  shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              OUR MOVEMENT IS YOUR STRATEGIC MOVE
            </h2>
            <p>
              Almost anything can be outsourced. When a task is not economical,
              needs some attention, or is ineffective, outsourcing is the best
              option. Additionally, spending money on internal issues might
              occasionally make matters worse and harm your organization.
            </p>
          </div>
        </div>
        <div className="card  shadow-lg">
          <div className="flex justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              OUR GOAL IS TO RAISE CUSTOMER SATISFACTION
            </h2>
            <p>
              Because of the excellent work our teammates are doing, we envision
              our business as one that customers can't stop promoting. Our
              services are designed to help employers find qualified workers who
              will pay back their investments. When customers are happy, we are
              happy to do business with them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;
