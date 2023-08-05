import React from "react";
import banner from "../../assets/images/contact.jpg";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                <span>Address: 35\1 Ibrahimpur,Kafrul Dhaka-1206</span>
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
                  href="mailto:info.kasefbusiness@gmail.com"
                  className="hover:text-blue-400 transition-all"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Email: info.kasefbusiness@gmail.com</span>
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
                    {...register("email", { required: true })}
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
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  {errors.inquiry && (
                    <span className="text-red-700 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Info</span>
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
      <div class="h-[400px] px-44 my-20">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.676878853302!2d90.3830739749253!3d23.794517987082052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73a4181b93b%3A0x93683c1dc2e1f941!2s35%2C%201%20Ibrahimpur%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1691243091369!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
