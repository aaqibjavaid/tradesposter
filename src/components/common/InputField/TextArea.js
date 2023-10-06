import React from "react";
import SecondaryHeading from "../Typography/SecondaryHeading"
import Snippet from "../SnippetIcon/Snippet";

const TextArea = ({ className, label, placeholder,variant,snippet,SnippetText, ...restProps }) => {
  return (
    <>
        <Snippet
        variant={"label"}
        label={label}
        text={SnippetText}
        snippet={snippet}
      />
      {
        variant === "large" &&
      <textarea
        {...restProps}
        name={restProps?.name}
        placeholder={placeholder}
        className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-base font-ibmplex font-normal tracking-[0.25px] normal-case  text-offblack rounded-lg block p-2.5 w-full lg:w-[468px] min-h-[150px]  ${className}`}
      />
      }
      {
        variant === "general" &&
        <textarea
        {...restProps}
        name={restProps?.name}
        placeholder={placeholder}
        className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-base font-ibmplex font-normal tracking-[0.25px] normal-case  text-offblack rounded-lg block p-2.5 w-full min-h-[150px] ${className}`}
      />
      }
    </>
  );
};

export default TextArea;
