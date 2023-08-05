import React from "react";
import banner from "../../assets/images/virtual.jpg";
import bottomBanner from "../../assets/images/bottomBanner.jpg";
import hero1 from "../../assets/images/virtual5.jpg";
import hero2 from "../../assets/images/virtual2.jpg";
import hero3 from "../../assets/images/virtual3.jpg";
import hero4 from "../../assets/images/virtual4.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const VirtualAssistance = () => {
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
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Virtual Executive Assistant
            </h1>
            <p>
              We help you to build a cost-effective virtual executive assistant
              team that saves you valuable time and money.
            </p>
            <Link
              to="/contact-us"
              className="btn btn-neutral px-10 mt-5 uppercase"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Heroes ---------------------------------------------*/}
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero1}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">
              The Difference We Create With Our Virtual Executive Assistant
            </h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              KBS provides virtual assistance to streamline your business
              operations and increase efficiency. Our skilled virtual assistants
              can handle administrative tasks, data entry, appointment
              scheduling, email management, and more. Outsourcing these tasks to
              us allows you to focus on core business activities and scale your
              operations effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero2}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">
              Virtual Assistance Adds Value To Your Company
            </h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              Hiring a virtual executive assistant can add value to your company
              by resolving delegated Non-Essential Tasks. We primarily handle
              Oversee Back Office Operations that make life easy for the
              clients. Virtual assistance manages Specialized Areas of your
              requirements. It Implements Online Marketing Strategies. Virtual
              service is responsible and reliable for Integrating a Feedback
              Loop.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero3}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">
              How Can Our Virtual Executive Assistant Be Productive?
            </h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              You can have an Online Calendar for your virtual executive
              assistant. Know your most efficient time of the day and prioritize
              your tasks accordingly. You can find a workstation free from noise
              and distractions, which means an entirely hustle-free workplace.
              Get groups working on your Tasks. You can bookmark your sites and
              use a Password Manager to make a workload-free workplace. Ask
              Questions.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero4}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">
              How Does Our Virtual Executive Assistant Save You Money?
            </h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              You only pay them according to your need, which is a great way to
              save money. You also won’t have to worry about all those other
              extra expenses of hiring an employee, such as benefits, wage
              deductions, and office supplies. A virtual executive assistant
              will cover their costs, giving your pocket a nice break.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Heroes ---------------------------------------------*/}
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      <div
        className="hero h-[500px] mt-28"
        style={{
          backgroundImage: `url(${bottomBanner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-30"></div>
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

export default VirtualAssistance;
