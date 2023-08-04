import React from "react";
import banner from "../../assets/images/about5.jpg";
import banner2 from "../../assets/images/bottomBanner.jpg";
import {
  faCartShopping,
  faChartPie,
  faCloud,
  faDollarSign,
  faHouse,
  faLayerGroup,
  faLightbulb,
  faObjectUngroup,
  faPhone,
  faSwimmingPool,
  faUserGear,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SupportServices = () => {
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
              BACK OFFICE SUPPORT SERVICE
            </h1>
            <p>
              Our back office support service is a term for office solutions
              that aren’t customer-facing. While these job roles don’t directly
              fit the customer support description, they are responsible for
              streamlining and improving the customer experience (CX).
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Services ---------------------------------------------*/}
      <div className="bg-base-200">
        <h2 className="text-center font-bold text-5xl pt-10 pb-10">
          OUR BACK OFFICE SUPPORT SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          <div className="card shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl">
                <FontAwesomeIcon icon={faUserGear} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                ADMINISTRATIVE SUPPORT
              </h2>
              <p>
                The administrative support team does technical assistance,
                studies, surveys, or securing volunteers to assist the
                department in fulfilling its administrative responsibilities.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faCloud} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">ORDER PROCESSING</h2>
              <p>
                Our order processing is the workflow process involving the
                packing and shipment of goods or services to the customers. In
                processing an order, a business taps its distribution centres or
                facilities responsible for picking, packing, and delivering
                products.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faChartPie} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                ACCOUNTING & BOOKKEEPING
              </h2>
              <p>
                Our accounting team does the widespread practice of managing the
                finances of a business or individual. In contrast, the
                bookkeeping team refers more specifically to the tasks and
                procedures involved in recording financial activities.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faObjectUngroup} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">TRANSCRIPTION</h2>
              <p>
                A transcription service team is a business service team that
                converts speech (either live or recorded) into a written or
                electronic text document. Transcription services are often
                provided for business, legal, or medical purposes.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                ECOMMERCE STORE MANAGEMENT
              </h2>
              <p>
                The E-commerce store management team does a progression of
                procedures committed to improving your site's user experience
                (UX) and sorting out fundamental activities to perform effective
                exchanges from your clients to you.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">DATA MINING PROCESS</h2>
              <p>
                The data mining team analyzes massive volumes of data to
                discover insights that help businesses solve problems, mitigate
                risks, or seize new opportunities.
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
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      <div
        className="hero h-[500px] mt-28"
        style={{
          backgroundImage: `url(${banner2})`,
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
              +88 01312 083511
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
    </div>
  );
};

export default SupportServices;
