import React from "react";
import Snippet from "../SnippetIcon/Snippet";

const TextFiled = ({
  className,
  label,
  placeholder,
  variant,
  snippet,
  SnippetText,
  ...restProps
}) => {
  return (
    <>
      <Snippet
        variant={"label"}
        label={label}
        text={SnippetText}
        snippet={snippet}
      />
      {variant === "large" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg lg:h-[56px] lg:w-[468px] block  p-2.5  ${className}`}
          />
        </>
      )}
      {variant === "medium" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg lg:h-[56px] lg:w-[400px] block  p-2.5  ${className}`}
          />
        </>
      )}
      {variant === "small" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg lg:h-[53px] lg:w-[344px] block  p-2.5  ${className}`}
          />
        </>
      )}
      {variant === "exsmall" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg h-[53px] w-[300px] block  p-2.5  ${className}`}
          />
        </>
      )}
      {variant === "extrasmall01" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg text-center w-[70px] lg:h-[53px] block p-2.5 ${className}`}
          />
        </>
      )}
      {variant === "extrasmall02" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg text-center w-[90px] lg:h-[53px] block p-2.5 ${className}`}
          />
        </>
      )}
      {variant === "smallest" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case  rounded-lg text-left w-[227px] lg:h-[53px] block p-2.5 ${className}`}
          />
        </>
      )}
      {variant === "general" && (
        <>
          <input
            {...restProps}
            name={restProps?.name}
            placeholder={placeholder}
            className={`bg-pastalblue focus:border focus:border-brightblue placeholder-midgray text-offblack text-base font-ibmplex font-normal tracking-[0.25px] normal-case rounded-lg w-full h-[53px] block  p-2.5  ${className}`}
          />
        </>
      )}
    </>
  );
};

export default TextFiled;
