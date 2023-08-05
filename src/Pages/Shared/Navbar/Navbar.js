import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kesef-logo_web_-removebg-preview.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [dropShow, setDropShow] = useState(false);
  return (
    <nav className="flex items-center flex-col z-10 lg:flex-row justify-between primary-color text-white sticky top-0">
      <div className="nav-left flex items-center w-full lg:w-auto justify-between p-3">
        <div className="logo pl-3">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className="lg:hidden inline"
          onClick={() => setToggle((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="nav-right self-start lg:self-center pl-2 lg:pl-0">
        <ul
          className={`flex right-menu lg:flex-row flex-col ${
            toggle ? "hidden lg:flex" : ""
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li
            className="relative"
            onClick={() => setDropShow(!dropShow)}
            onMouseEnter={() => setDropShow(true)}
            onMouseLeave={() => setDropShow(false)}
          >
            <Link to="/">
              Solutions{" "}
              <FontAwesomeIcon icon={faChevronDown} className="pl-1" />
            </Link>
            <ul
              className={`${
                dropShow ? "block" : "hidden"
              } absolute float-menu left-0 top-20 bg-blue-900`}
            >
              <li>
                <Link to="/customer-support">Customer Support</Link>
              </li>
              <li>
                <Link to="back-office-support-services">
                  Back Office Support Service
                </Link>
              </li>
              <li>
                <Link to="/telemarketing-sales">Telemarketing & Sales</Link>
              </li>
              <li>
                <Link to="/virtual-executive-assistant">
                  Virtual Executive Assistance
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/web-design-development">
                  Web Design & Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/life-with-us">Life with us</Link>
          </li>
          <li>
            <Link to="/blogs">blog</Link>
          </li>
          <li>
            <Link to="/contact-us">contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
