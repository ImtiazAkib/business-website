import React from "react";
import banner from "../../../assets/images/bottomBanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const BottomBanner = () => {
  return (
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
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
            Feel Free To Contact Our Team Today!
          </h1>
          <p>DON’T WAIT ANY LONGER</p>
          <p>Contact an experienced team member to fulfill your needs.</p>
          <p className="text-2xl">
            <FontAwesomeIcon icon={faPhone} />
            +88 01312 083511 (BD), +1 646 797 5714 (USA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
