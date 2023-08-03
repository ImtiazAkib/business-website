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
              WE’RE A SMART INVESTMENT
            </h2>
            <p>
              Contrary to what many might believe, hiring an outsourcing company
              may reduce expenditures by a mile. Investing in BPO saves you not
              only money but also time. You can dedicate that saved time to
              managing your company’s strategy matters rather than operational
              issues.
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
              WE’RE A WEIGHT LIFTED OFF YOUR SHOULDERS
            </h2>
            <p>
              This reason is especially for those who like to take matters into
              their own hands. Sometimes, things are better left in the hands of
              others. In this case, you don’t have to worry about looking for or
              hiring new employees. You don’t have to worry about training them
              either. BPO is meant to have newly qualified team members ready
              for when you need them.
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
              ANY BUSINESS CAN HAVE US
            </h2>
            <p>
              Outsourcing is no longer for big businesses only. BPO services are
              attractive because of their viability. They are also tailored to
              each company’s needs. We set to make things easier and more
              cost-effective for any company, regardless of size.
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
            <h2 className="card-title justify-center">YOU’RE NOT ALONE</h2>
            <p>
              For a small starting business, we allow you to focus on your
              company’s core values. As a Business process outsourcing, we stand
              as a group of professionals helping you create your Team without
              overpaying them. Professional providers of our Team exist to help
              you.
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
              WE ARE YOUR STRATEGIC MOVE
            </h2>
            <p>
              You can outsource almost anything. Outsourcing would be best when
              an area is not cost-effective, needs some TLC, or is inefficient.
              Also, investing in solving problems within your business can
              sometimes be worse and hurt your company.
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
              WE WORK TO INCREASE CUSTOMER SATISFACTION
            </h2>
            <p>
              We picture our company as one that customers can’t stop
              recommending because our employees are doing a fantastic job. Our
              services aim to provide quality employees to their hiring
              businesses to make their investments worthwhile. Customer
              satisfaction results in our satisfaction in doing business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;
