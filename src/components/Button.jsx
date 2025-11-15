import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className=" bg-blue-600 text-white
              font-semibold
              py-2
              px-4
              rounded-xl
              shadow-md
              hover:bg-blue-700
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              focus:ring-offset-2
              transition-all
              duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
