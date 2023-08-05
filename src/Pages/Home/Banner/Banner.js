import React from "react";
import banner from "../../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-blue-400 bg-opacity-30"></div>
      <div className="hero-content text-center text-white">
        <div>
          <h1 className="mb-5 text-5xl font-bold">WE PROVIDE SOLUTIONS</h1>

          <Link
            to="/contact-us"
            className="btn btn-neutral uppercase pl-7 pr-7"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
