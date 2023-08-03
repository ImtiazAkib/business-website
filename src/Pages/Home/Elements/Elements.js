import {
  faBoxesStacked,
  faChartLine,
  faHandsHelping,
  faSitemap,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Elements = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="text-center pt-10 pb-10">
        <h2 className="font-bold text-3xl lg:text-5xl pb-5">
          How We Deliver Excellence
        </h2>
        <p className="lg:pr-32 lg:pl-32 pr-5 pl-5 mb-5">
          Operational excellence is a mindset that embraces certain principles
          and tools to create sustainable improvement within an organization.
          Or, to put it more simply, operational excellence is achieved when
          every member of an organization can see the flow of value to the
          customer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
        <div className="card hover:bg-blue-100 hover:shadow-lg transition-all rounded-none border border-b-gray-300 lg:border-r-gray-300 lg:border-r-2 border-r-0 border-t-0 border-l-0">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faUsers} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Customers First</h2>
            <p>We put our customers at the heart of our operations.</p>
          </div>
        </div>
        <div className="card border hover:bg-blue-100 hover:shadow-lg transition-all border-b-gray-300 rounded-none lg:border-r-gray-300 border-t-0 border-l-0 border-r-0 lg:border-r-2">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faSitemap} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Process At Work</h2>
            <p>We know what we are doing.</p>
          </div>
        </div>
        <div className="card border hover:bg-blue-100 hover:shadow-lg transition-all border-b-gray-300 rounded-none border-t-0 border-l-0 border-r-0 ">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faWrench} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Upgradation</h2>
            <p>
              We change and moderate/improvise according to the client’s needs.
            </p>
          </div>
        </div>
        <div className="card border hover:bg-blue-100 hover:shadow-lg transition-all rounded-none lg:border-r-gray-300 border-l-0 border-b-gray-300 lg:border-b-0  border-r-0 lg:border-r-2">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faHandsHelping} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Team Work</h2>
            <p>We lead our people to the best output from them.</p>
          </div>
        </div>
        <div className="card border hover:bg-blue-100 hover:shadow-lg transition-all rounded-none lg:border-r-gray-300 lg:border-b-0 border-b-gray-300 border-l-0 border-r-0 lg:border-r-2">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faBoxesStacked} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Sound in Tech</h2>
            <p>We keep on top of the tech.</p>
          </div>
        </div>
        <div className="card border hover:bg-blue-100 hover:shadow-lg transition-all rounded-none border-r-0 border-b-gray-300 lg:border-b-0 border-l-0">
          <div className="avatar justify-center mt-5">
            <div className="text-6xl rounded">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Growth & Expansion</h2>
            <p>
              With the inflow of leads and excellent customer support we
              provide, our clients enjoy drastic growth and improvement as we
              expand our operations continuously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elements;
