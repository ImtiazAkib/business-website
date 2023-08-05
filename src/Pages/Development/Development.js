import React from "react";
import banner from "../../assets/images/development.jpg";
import creativity from "../../assets/images/creativity.jpg";
import step from "../../assets/images/hero.jpg";
import bottomBanner from "../../assets/images/bottomBanner.jpg";
import {
  faCartShopping,
  faDesktop,
  faLaptopCode,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Development = () => {
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
              Web Design & Development Services
            </h1>
            <p>
              Create and Design perfect websites that will play impact in your
              business with our expert Web Development team.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Services ---------------------------------------------*/}
      <div className="bg-base-200">
        <h2 className="text-center font-bold text-3xl lg:text-5xl pt-10 pb-10">
          Web Design & Development Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mx-0 lg:mx-40">
          <div className="card items-center px-6 h-48 lg:h-36 card-side bg-base-100 shadow-xl">
            <div>
              <FontAwesomeIcon icon={faDesktop} className="text-5xl" />
            </div>

            <div className="card-body">
              <h2 className="card-title">Web Design</h2>
              <p>
                Our creative web designers can design your dream website based
                on your idea.
              </p>
            </div>
          </div>

          <div className="card items-center px-4 lg:px-6 h-48 lg:h-36 card-side bg-base-100 shadow-xl">
            <div>
              <FontAwesomeIcon icon={faLaptopCode} className="text-5xl" />
            </div>

            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>
                Our experts can develop your dream website based on your idea in
                an affordable price.
              </p>
            </div>
          </div>

          <div className="card items-center px-4 lg:px-6 h-48 lg:h-36 card-side bg-base-100 shadow-xl">
            <div>
              <FontAwesomeIcon icon={faCartShopping} className="text-5xl" />
            </div>

            <div className="card-body">
              <h2 className="card-title">E-commerce Development</h2>
              <p>
                We build all kind of e-commerce solutions that will help to grow
                your business.
              </p>
            </div>
          </div>

          <div className="card items-center pl-6 lg:pl-8 h-48 lg:h-36 card-side bg-base-100 shadow-xl">
            <div>
              <FontAwesomeIcon icon={faMobileAlt} className="text-6xl" />
            </div>

            <div className="card-body">
              <h2 className="card-title">Mobile Apps Development</h2>
              <p>
                We develop and deploy mobile apps in multiple platforms such as
                iPhone & Android.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Services ---------------------------------------------*/}
      {/*------------------------------------------- Hero ---------------------------------------------*/}
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={creativity}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">Web Development Life Cycle</h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              The process of Web development life cycle involves understanding
              our client’s requirements, market research, knowledge about the
              target audience, planning, design, development, testing, and
              maintenance of the website.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Hero ---------------------------------------------*/}
      {/*------------------------------------------- Steps ---------------------------------------------*/}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 1</p>
                <p className="text-gray-700">Research and Analysis</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 2</p>
                <p className="text-gray-700">Planning</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 3</p>
                <p className="text-gray-700">Design</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 4</p>
                <p className="text-gray-700">Implementation</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Step 5</p>
                <p className="text-gray-700">Testing and Integration</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg font-bold">Deploy and Maintain</p>
                <p className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src={step}
              alt="office"
            />
          </div>
        </div>
      </div>
      {/*------------------------------------------- Steps ---------------------------------------------*/}
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

export default Development;
