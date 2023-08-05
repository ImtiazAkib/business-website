import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-white bg-blue-300 lg:grid-cols-4">
        <div className="lg:col-span-2 lg:ml-24 lg:mt-5">
          <p className="lg:w-96">
            The Team of Kesef Business Solutions has been lucky enough to work
            in great organizations that are life-affirming. In this healthier
            work environment, we are recognized and treated as human beings.
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link to="/about" className="hover:text-blue-400 transition-all">
            About US
          </Link>
          <Link
            to="/life-with-us"
            className="hover:text-blue-400 transition-all"
          >
            Life With Us
          </Link>
          <Link to="/blogs" className="hover:text-blue-400 transition-all">
            Blog
          </Link>
          <Link to="/contact-us" className="hover:text-blue-400 transition-all">
            Contact Us
          </Link>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <p>Address: 35/1 Srijoni Sarak, Ibrahimpur, Kafrul, Dhaka-1206</p>

          <p>
            Phone:{" "}
            <a
              href="tel:+8801799674891"
              className="hover:text-blue-400 transition-all"
            >
              +8801799674891
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:kesefsolutionsltd@gmail.com"
              className="hover:text-blue-400 transition-all"
            >
              kesefsolutionsltd@gmail.com
            </a>
          </p>
        </div>
      </footer>
      <h2 className="text-center text-xl pt-3 pb-3 bg-blue-300 text-white">
        Copyright © 2023 Kesef Business Solutions
      </h2>
    </>
  );
};

export default Footer;
