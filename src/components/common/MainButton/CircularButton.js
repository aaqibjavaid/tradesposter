import React from "react";

const CircularButton = ({ variant, onClick, disabled }) => {
  return (
    <>
      {variant === "prev" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type="button"
          className="relative group overflow-hidden border hover:border-primaryblue w-[45px] h-[45px] rounded-full text-center pt-1"
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-in-out transform translate-y-0 bg-brightblue group-hover:h-[120%]"></span>
          <span className="relative group-hover:text-white transition-all duration-300">
            <i className="fi fi-ts-angle-small-left cursor-pointer text-[30px] hover:text-white"></i>
          </span>
        </button>
      )}

      {variant === "next" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type="button"
          className="relative group overflow-hidden border hover:border-primaryblue w-[45px] h-[45px] rounded-full text-center pt-1"
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-in-out transform translate-y-0 bg-brightblue group-hover:h-[120%]"></span>
          <span className="relative group-hover:text-white transition-all duration-300">
            <i className="fi fi-ts-angle-small-right cursor-pointer text-[30px] hover:text-white"></i>
          </span>
        </button>
      )}
      {variant === "cross" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type="button"
          className="relative group overflow-hidden border hover:border-primaryblue w-[40px] h-[40px] rounded-full text-center pt-1"
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-in-out transform translate-y-0 bg-brightblue group-hover:h-[120%]"></span>
          <span className="relative group-hover:text-white transition-all duration-300">
            <i className="fi fi-rr-cross cursor-pointer text-[15px] hover:text-white"></i>
          </span>
        </button>
      )}
    </>
  );
};
export default CircularButton;
