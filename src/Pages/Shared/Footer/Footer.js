import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-white primary-color lg:grid-cols-4">
        <div className="lg:col-span-2 lg:ml-24 lg:mt-5">
          <p className="lg:w-96">
            The Team of Kesef Business Solutions has been lucky enough to work
            in great organizations that are life-affirming. In this healthier
            work environment, we are recognized and treated as human beings.
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a href="/" className="hover:text-blue-400 transition-all">
            How we work
          </a>
          <a href="/" className="hover:text-blue-400 transition-all">
            Carrer
          </a>
          <a href="/" className="hover:text-blue-400 transition-all">
            Blog
          </a>
          <a href="/" className="hover:text-blue-400 transition-all">
            Contact Us
          </a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <p>Address: 35\1 Ibrahimpur,Kafrul Dhaka-1206</p>

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
              href="mailto:info.kasefbusiness@gmail.com"
              className="hover:text-blue-400 transition-all"
            >
              info.kasefbusiness@gmail.com
            </a>
          </p>
        </div>
      </footer>
      <h2 className="text-center text-xl pt-3 pb-3 bg-slate-800 text-white">
        Copyright © 2023 Kesef Business Solutions
      </h2>
    </>
  );
};

export default Footer;
