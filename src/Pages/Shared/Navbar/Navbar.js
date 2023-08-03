import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex items-center flex-col z-10 lg:flex-row justify-between bg-primary text-white sticky top-0">
      <div className="nav-left flex w-full lg:w-5 justify-between p-3">
        <div className="logo pl-3">Logo</div>
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

      <div className="nav-right self-start pl-2 lg:pl-0">
        <ul
          className={`flex lg:flex-row flex-col ${
            toggle ? "hidden lg:flex" : ""
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">How we work</a>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <a href="/">Life with us</a>
          </li>
          <li>
            <a href="/">career</a>
          </li>
          <li>
            <a href="/">blog</a>
          </li>
          <li>
            <a href="/">contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
