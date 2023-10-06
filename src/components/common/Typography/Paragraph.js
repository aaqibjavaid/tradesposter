import React from "react";

const Paragraph = ({ variant, children, className }) => {
  return (
    <>
      {variant === "Main" && (
        <p
          className={`
          ${className} font-ibmplex text-base font-normal tracking-[0.25px] text-left`}
        >
          {children}
        </p>
      )}
      {variant === "Smaller" && (
        <p
          className={`
          ${className} font-ibmplex text-sm font-normal tracking-[0.25px] text-left`}
        >
          {children}
        </p>
      )}
      {variant === "ExtraSmaller" && (
        <p
          className={`
          ${className} font-ibmplex text-xs font-normal tracking-[0.25px] text-left`}
        >
          {children}
        </p>
      )}
    </>
  );
};
export default Paragraph;
