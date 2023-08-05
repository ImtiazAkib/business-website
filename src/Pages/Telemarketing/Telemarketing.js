import React from "react";
import banner from "../../assets/images/about2.jpg";
import flag1 from "../../assets/images/flag1.jpg";
import flag2 from "../../assets/images/flag2.jpg";
import flag3 from "../../assets/images/flag3.jpg";
import bottomBanner from "../../assets/images/bottomBanner.jpg";
import {
  faBusinessTime,
  faCheck,
  faEdit,
  faHeadset,
  faHouse,
  faLaptopHouse,
  faMoneyBill1,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Telemarketing = () => {
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
        <div className="hero-overlay bg-blue-500 bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              TELEMARKETING, LEADS GENERATION & SALES TEAM
            </h1>
            <p>
              While diversifying our services, we remain committed to our roots
              in telemarketing and sales. Our experienced team of telemarketers
              excels in lead generation, appointment setting, market research,
              and customer outreach. We take a customer-centric approach to
              represent your brand professionally and drive business growth.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      {/*------------------------------------------- Services ---------------------------------------------*/}
      <div className="bg-base-200">
        <h2 className="text-center font-bold text-3xl lg:text-5xl px-3 lg:px-0 pt-10 pb-10">
          TELEMARKETING & LEADS GENERATION SOLUTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          <div className="card shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                OUTBOUND TELEMARKETING
              </h2>
              <p>
                Our expert agents are trained and skilled enough to serve the
                best customer experience in outbound telemarketing.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faLaptopHouse} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                INBOUND TELEMARKETING
              </h2>
              <p>
                Our inbound telemarketing works under observation and by roster
                to give your required service.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">APPOINTMENT SETTING</h2>
              <p>
                Specialized agent panels are assigned to call or email the
                customers to take their appointments for required services.
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
                B2B LEADS GENERATION
              </h2>
              <p>
                Our exceptional team is assigned to generate compelling and
                cost-productive business leads.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faHouse} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                B2C LEADS GENERATION
              </h2>
              <p>
                Our best teams are assigned the B2C, which refers to selling
                products and services directly between a business and consumers
                who are the end-users of its products or services.
              </p>
            </div>
          </div>

          <div className="card  shadow-lg">
            <div className="flex justify-center mt-5">
              <div className="text-6xl rounded">
                <FontAwesomeIcon icon={faMoneyBill1} />
              </div>
            </div>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">
                SALES QUALIFIED LEADS
              </h2>
              <p>
                Our Quality assurance team works over the clock to ensure the
                calls our agents are making/taking are ultimately sales
                qualified.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Services ---------------------------------------------*/}
      {/*------------------------------------------- New Services ---------------------------------------------*/}
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">
          INDUSTRIES WE ARE SPECIALIZE
        </h1>
        <div className="hero mt-16 mb-16">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={flag1}
              className="lg:max-w-lg rounded-lg shadow-2xl"
              alt="office"
            />
            <div className="ml-0 lg:ml-10">
              <h1 className="text-4xl font-bold">
                Kesef Business Solutions & BPO Services in Bangladesh
              </h1>

              <ul className="py-6">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Merchant Cash Advance Leads</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Air Duct Cleaning Leads</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Janitorial Leads</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Solar Leads</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Final Expense Leads</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Real Estate Leads</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero mt-16 mb-16">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={flag2}
              className="lg:max-w-lg rounded-lg shadow-2xl"
              alt="office"
            />
            <div className="ml-0 lg:ml-10">
              <h1 className="text-4xl font-bold">
                Specialization in Australian Market
              </h1>
              <ul className="py-6">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Solar Appointment Setting</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>LED Appointment Setting</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Energy & Gas Leads</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero mt-16 mb-16">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={flag3}
              className="lg:max-w-lg rounded-lg shadow-2xl"
              alt="office"
            />
            <div className="ml-0 lg:ml-10">
              <h1 className="text-4xl font-bold">
                Specialization in Canadian Market
              </h1>
              <ul className="py-6">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Airduct Cleaning</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Door and window cleaning</span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="pr-3" />
                    <span>Real State Leads</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- New Services ---------------------------------------------*/}
      {/*------------------------------------------- Banner ---------------------------------------------*/}
      <div
        className="hero h-[500px] mt-28"
        style={{
          backgroundImage: `url(${bottomBanner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-blue-500 bg-opacity-30"></div>
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

export default Telemarketing;
