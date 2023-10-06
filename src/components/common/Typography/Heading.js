import React from "react";

const Heading = ({ variant, children, className }) => {
  return (
    <>
      {variant === "h1" && (
        <h1
          className={`
          ${className} font-teko font-bold uppercase tracking-[0.5px] text-[80px] leading-[70px] text-left text-offblack`}
        >
          {children}
        </h1>
      )}
      {variant === "h2" && (
        <h2
          className={`
          ${className} font-teko font-bold uppercase tracking-[0.5px] text-[70px] leading-[60px] text-left `}
        >
          {children}
        </h2>
      )}
      {variant === "h3" && (
        <h3
          className={`
         ${className} font-teko font-bold uppercase tracking-[0.5px] text-[60px] leading-[50px] text-left text-offblack`}
        >
          {children}
        </h3>
      )}
      {variant === "h4" && (
        <h4
          className={`
         ${className} font-teko font-semibold capitalize tracking-[0.5px] text-[42px] leading-[42px] text-left text-offblack`}
        >
          {children}
        </h4>
      )}
      {variant === "h5" && (
        <h5
          className={`
         ${className} font-teko font-bold capitalize tracking-[0.5px] text-[30px] leading-[36px] text-left `}
        >
          {children}
        </h5>
      )}
      {variant === "h6" && (
        <h6
          className={`
         ${className} font-teko font-normal capitalize tracking-[0.5px] text-[24px] leading-[30px] text-left `}
        >
          {children}
        </h6>
      )}
    </>
  );
};
export default Heading;
