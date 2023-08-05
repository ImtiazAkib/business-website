import React from "react";
import banner from "../../assets/images/digital.jpg";
import office from "../../assets/images/virtual2.jpg";
import step from "../../assets/images/about3.jpg";
import bottomBanner from "../../assets/images/bottomBanner.jpg";
import {
  faCog,
  faEnvelope,
  faFileMedical,
  faHandshakeSimple,
  faHouse,
  faMoneyBill,
  faPhone,
  faSearch,
  faSms,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DigitalMarketing = () => {
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
              HOW DIGITAL MARKETING HELPS YOUR BUSINESS TO GROW
            </h1>
            <p>
              Digital marketing is the process of marketing products or services
              to potential customers via digital channels and the Internet. It
              has the same goals as traditional marketing; the only difference
              is the medium used to convey the message.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Other Services ---------------------------------------------*/}
      <div className="bg-slate-200">
        <h2 className="text-center font-bold text-5xl pt-10 pb-10">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faSearch} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">
                Search Engine Optimization
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon
                  icon={faHandshakeSimple}
                  className="text-4xl"
                />
              </div>
              <h2 className="card-title justify-center">
                Social Media Marketing
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faFileMedical} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">Content Marketing</h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faMoneyBill} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">Pay-per-Click (PPC)</h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faCog} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">Marketing Analytics</h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">Email Marketing</h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faSms} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">SMS Marketing</h2>
            </div>
          </div>

          <div className="flex items-center justify-center h-32 shadow-lg">
            <div>
              <div className="text-center pb-6">
                <FontAwesomeIcon icon={faHouse} className="text-4xl" />
              </div>
              <h2 className="card-title justify-center">Affiliate Marketing</h2>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Other Services ---------------------------------------------*/}
      {/*------------------------------------------- Hero ---------------------------------------------*/}
      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={office}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">Digital Marketing</h1>
            <hr className="w-10 mt-4 h-[3px] primary-color" />
            <p className="py-6">
              Our digital marketing experts are proficient in devising
              data-driven strategies to boost your online presence and drive
              tangible results. We offer a wide range of digital marketing
              services, including search engine optimization (SEO),
              pay-per-click (PPC) advertising, social media marketing, email
              marketing, and content creation. We tailor our approach to suit
              your unique requirements and maximize your ROI.
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
                <p className="text-gray-700">
                  Removes all sorts of geographical barriers.
                </p>
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
                <p className="text-gray-700">
                  Niche targeting/reaching out only to those people who fit your
                  criteria
                </p>
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
                <p className="text-gray-700">
                  It’s affordable and not a burden.
                </p>
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
                <p className="text-gray-700">Trackable & Measurable results</p>
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
                <p className="text-gray-700">
                  Higher conversion rates as we invest where we are in demand.​
                </p>
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
                <p className="mb-2 text-lg font-bold">Step 6</p>
                <p className="text-gray-700">
                  We emphasise results and not just our instinct or gut.
                </p>
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
                <p className="mb-2 text-lg font-bold">Step 7</p>
                <p className="text-gray-700">Personalization</p>
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
                <p className="mb-2 text-lg font-bold">Loyal to our customers</p>
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

export default DigitalMarketing;
