import React from "react";

const Button = ({ title }) => {
  return (
    <button className="left-0 max-w-full rounded-md bg-sky-500 px-6 py-2 text-md font-medium text-white hover:bg-sky-600">
      {title}
    </button>
  );
};

export default Button;
