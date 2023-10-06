import React from "react";
import SecondaryHeading from "../Typography/SecondaryHeading";
import Paragraph from "../Typography/Paragraph";

const Snippet = ({ variant, label, text, snippet }) => {
  return (
    <>
      {variant === "label" && (
        <div className="flex mb-2">
          <div>
            <label className={`block mr-2`}>
              <SecondaryHeading variant={"Subheadingsmall"}>
                {label}
              </SecondaryHeading>
            </label>
          </div>
          {snippet && (
            <div className="pt-[2px] group relative">
              <i className="fi fi-rr-info text-[15px] text-brightblue"></i>
              <div className="w-[100px] h-[100px] bg-pastalblue text-offblack shadow-md absolute rounded-2xl p-3 -mt-32 ml-1 hidden group-hover:block">
                <Paragraph variant={"Smaller"}>{text}</Paragraph>
              </div>
            </div>
          )}
        </div>
      )}
      {variant === "general" && (
        <div className="flex ">
          <div className="mr-2">
            <SecondaryHeading variant={"Paragrapheading"}>
              {label}
            </SecondaryHeading>
          </div>
          <div className="group relative pt-[5px]">
            <i className="fi fi-rr-info text-[15px] text-brightblue"></i>
            <div className="w-[100px] h-[100px] bg-pastalblue text-offblack shadow-md absolute rounded-2xl p-3 -mt-32 ml-1 hidden group-hover:block">
              <Paragraph variant={"Smaller"}>{text}</Paragraph>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Snippet;
