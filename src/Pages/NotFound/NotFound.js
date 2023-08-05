import React from "react";
import img from "../../assets/images/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <img className="w-full h-full" src={img} alt="not found" />
    </div>
  );
};

export default NotFound;
