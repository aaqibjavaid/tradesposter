import React from "react";

const SecondaryHeading = ({ variant, children, className }) => {
  return (
    <>
     {variant === "ExtraLargeParagrapHeading" && (
        <span
          className={`
          ${className} font-ptsans text-xl font-bold uppercase tracking-[1px]`}
        >
          {children}
        </span>
      )}
      {variant === "Paragrapheading" && (
        <span
          className={`
          ${className} font-ptsans text-base font-bold uppercase tracking-[1px] `}
        >
          {children}
        </span>
      )}
      {variant === "Subheadingsmall" && (
        <span
          className={`
          ${className} font-ptsans text-sm font-bold uppercase tracking-[1px] `}
        >
          {children}
        </span>
      )}
    </>
  );
};
export default SecondaryHeading;
