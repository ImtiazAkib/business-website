import React from "react";
import banner from "../../assets/images/contact.jpg";

const ContactUs = () => {
  return (
    <div>
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
            <h1 className="mb-5 text-5xl font-bold uppercase">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
