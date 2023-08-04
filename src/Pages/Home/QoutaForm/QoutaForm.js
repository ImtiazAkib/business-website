import React from "react";
import { useForm } from "react-hook-form";

const QoutaForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center relative bottom-20 lg:bottom-10"
      >
        <div className="flex justify-between items-center flex-col lg:flex-row shadow-md rounded-md p-10 primary-color">
          <div className="w-full mb-3 lg:mb-0 mr-0 lg:mr-3">
            <input
              placeholder="Name*"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Your Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500">
                Your name is required
              </p>
            )}
          </div>

          <div className="w-full mb-3 lg:mb-0 mr-0 lg:mr-3">
            <input
              placeholder="Email*"
              className="input input-bordered w-full max-w-xs"
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p role="alert" className="text-red-500">
                {errors.mail?.message}
              </p>
            )}
          </div>

          <div className="w-full mb-3 lg:mb-0 mr-0 lg:mr-3">
            <input
              placeholder="Phone*"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", { required: "Phone number is required" })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="text-red-500">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="w-full mb-3 lg:mb-0 mr-0 lg:mr-3">
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("inquiry")}
            >
              <option disabled>Your Inquiry About</option>
              <option>Customer Support</option>
              <option>Back Office Support</option>
              <option>Telemarketing & Sales</option>
              <option>Virtual Assistance</option>
              <option>Digital Marketing</option>
              <option>Web Design & Development</option>
            </select>
          </div>

          <input
            type="submit"
            value="Get a Qouta"
            className="btn btn-neutral uppercase"
          />
        </div>
      </form>
    </div>
  );
};

export default QoutaForm;
