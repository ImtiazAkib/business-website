import React from "react";
import banner from "../../assets/images/banner.jpg";
import office from "../../assets/images/workers.jpg";
import {
  faCartShopping,
  faDollarSign,
  faHouse,
  faLightbulb,
  faMailBulk,
  faMessage,
  faPhone,
  faSwimmingPool,
  faUserGear,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerSupport = () => {
  return (
    <div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
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
              Customer Support Services
            </h1>
            <p>
              Our customer support teams are the face of the company. They are
              critical in sales and word-of-mouth marketing, work with product
              teams, and sit at the table regarding company decision-making.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Services ---------------------------------------------*/}
      <div className="bg-base-200">
        <h2 className="text-center font-bold text-5xl pt-10 pb-10">
          OUR CUSTOMER SERVICE SUPPORT SOLUTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          <div className="card shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                PHONE SUPPORT SOLUTIONS
              </h2>
              <p>
                Our expert agents, scheduled for work on a roster basis, are
                assigned for calls around the clock, and our Supervisors take
                care of and monitor their activities.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                EMAIL SUPPORT SOLUTIONS
              </h2>
              <p>
                Teams for the email solution have the utmost understanding of
                our client's products/services and patiently understands what
                customers require in their query.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faMessage} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                PROBLEM SOLVING SUPPORT SOLUTIONS
              </h2>
              <p>
                Our experts are working 24/7 at your service on our social media
                and website
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faUserGear} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                TECHNICAL SUPPORT SOLUTIONS
              </h2>
              <p>
                Our firmly qualified technical support team works in support of
                our customers as well as in-house problem solutions. We have a
                fully equipped, properly knowledgeable and sound section of
                Technical experts.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Services ---------------------------------------------*/}
      {/*------------------------------------------- Other Services ---------------------------------------------*/}
      <div className="bg-base-200">
        <h2 className="text-center font-bold text-5xl pt-10 pb-10">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-4xl pr-6"
                />
              </div>
              <h2 className="card-title justify-center">Retail & E-commerce</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-4xl pr-6"
                />
              </div>
              <h2 className="card-title justify-center">Financial</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon icon={faHouse} className="text-4xl pr-6" />
              </div>
              <h2 className="card-title justify-center">Real State</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon
                  icon={faSwimmingPool}
                  className="text-4xl pr-6"
                />
              </div>
              <h2 className="card-title justify-center">Cleaning</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon icon={faPhone} className="text-4xl pr-6" />
              </div>
              <h2 className="card-title justify-center">Call Center</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon icon={faUserNurse} className="text-4xl pr-6" />
              </div>
              <h2 className="card-title justify-center">Healthcare</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon icon={faUserGear} className="text-4xl pr-6" />
              </div>
              <h2 className="card-title justify-center">Energy & Utilities</h2>
            </div>
          </div>
          <div className="flex items-center h-20 shadow-lg">
            <div className="flex justify-start w-full px-6">
              <div>
                <FontAwesomeIcon icon={faLightbulb} className="text-4xl pr-6" />
              </div>
              <h2 className="card-title justify-center">
                Information Technology
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Other Services ---------------------------------------------*/}
      {/*------------------------------------------- Hero ---------------------------------------------*/}
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={office}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">
              How Customer Support Sets You On The Right Track?
            </h1>
            <p className="py-6">
              Excellent customer service means following best practices like
              valuing customers’ time, having a pleasant attitude, and providing
              knowledgeable and resourceful resources. We also take things
              further to exceed rather than meet their expectations.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Hero ---------------------------------------------*/}
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      <div
        className="hero h-[500px] mt-28"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-blue-400 bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div className="lg:leading-10 leading-8">
            <p>DON’T WAIT ANY LONGER</p>
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
              WILLING TO WORK WITH US?
            </h1>
            <p>Feel Free To Call Us</p>
            <p className="text-2xl">
              <FontAwesomeIcon icon={faPhone} />
              +8801799674891
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
    </div>
  );
};

export default CustomerSupport;
