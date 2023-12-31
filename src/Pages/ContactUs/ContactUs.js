import React from "react";
import banner from "../../assets/images/contact.jpg";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send("service_62q76kb", "template_l5knkxx", data, "ZBnKBPAkif5GSXlqf")
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));
    reset();
  };
  return (
    <div>
      {/*---------------------------------------------- Banner -------------------------------------------*/}
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
      {/*---------------------------------------------- Banner -------------------------------------------*/}
      {/*---------------------------------------------- Hero with Form -------------------------------------------*/}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-left font-bold">
              Contact Information:
            </h1>
            <hr className="w-10 mt-4 h-[3px] primary-color mb-6" />
            <ul className="text-xl leading-10">
              <li className="hover:text-blue-400 transition-all">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  Address: 35/1 Srijoni Sarak, Ibrahimpur, Kafrul, Dhaka-1206
                </span>
              </li>
              <li>
                <a
                  href="tel:+8801799674891"
                  className="hover:text-blue-400 transition-all"
                >
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />
                  <span>Phone: +8801799674891</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kesefsolutionsltd@gmail.com"
                  className="hover:text-blue-400 transition-all"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Email: kesefsolutionsltd@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Feel Free To Contact Us:</h1>
              <hr className="w-10 mt-4 h-[3px] primary-color" />

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name*</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    {...register("mail", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile*</span>
                  </label>
                  <input
                    {...register("mobile", { required: true })}
                    placeholder="mobile"
                    className="input input-bordered"
                  />
                  {errors.mobile && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company</span>
                  </label>
                  <input
                    {...register("company")}
                    placeholder="company"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Inquiry*</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    {...register("inquiry", { required: true })}
                  >
                    <option>Customer Support</option>
                    <option>Back Office Support</option>
                    <option>Telemarketing & Sales</option>
                    <option>Virtual Assistance</option>
                    <option>Digital Marketing</option>
                    <option>Web Design & Development</option>
                  </select>
                  {errors.inquiry && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Info*</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Tell us about your needs"
                    {...register("info", { required: true })}
                  ></textarea>
                  {errors.info && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-neutral" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------- Hero with Form -------------------------------------------*/}
      <div className="h-[400px] px-44 my-20">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6771079692235!2d90.38103387898101!3d23.794509832029046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73a44e2cc81%3A0x547369e51c6cfa6!2s35%20Srijoni%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1691254428477!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
