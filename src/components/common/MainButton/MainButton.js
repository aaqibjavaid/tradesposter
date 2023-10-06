import React from "react";

const MainButton = ({
  variant,
  children,
  className,
  onClick,
  type = "",
  disabled,
}) => {
  return (
    <>
      {/* Latest Buttons Started*/}
      {/* Large filled button for Desktop, Tabs & Mobiles */}
      {variant === "large" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
    ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Medium filled button for Desktop, Tabs & Mobiles */}
      {variant === "medium" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white  text-center w-[130px] h-[48px] md:w-[164px] md:h-[50px] lg:w-[214px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Small filled button for Desktop, Tabs & Mobiles */}
      {variant === "small" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-sm font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white  text-center w-[100px] h-[42px] md:w-[130px] md:h-[46px] lg:w-[164px] lg:h-[50px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Extra Small filled button for Desktop, Tabs & Mobiles */}
      {variant === "extrasmall" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs font-ptsans font-bold tracking-[1px] rounded-[30px] md:rounded-[25px] lg:rounded-[30px] bg-primaryblue text-white  text-center w-[80px] h-[38px] md:w-[100px] md:h-[40px] lg:w-[120px] lg:h-[45px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* filled buttons with justify between text */}
      {variant === "largebetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
    ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Medium filled button for Desktop, Tabs & Mobiles */}
      {variant === "mediumbetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white  text-center w-[130px] h-[48px] md:w-[164px] md:h-[50px] lg:w-[214px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Small filled button for Desktop, Tabs & Mobiles */}
      {variant === "smallbetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-sm font-ptsans font-bold tracking-[1px] rounded-[35px] bg-primaryblue text-white  text-center w-[100px] h-[42px] md:w-[130px] md:h-[46px] lg:w-[164px] lg:h-[50px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}

      {/* Large outlined button for Desktop, Tabs & Mobiles */}
      {variant === "outlinelarge" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Medium outlined button for Desktop, Tabs & Mobiles */}
      {variant === "outlinemedium" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[130px] h-[48px] md:w-[164px] md:h-[50px] lg:w-[214px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Small outlined button for Desktop, Tabs & Mobiles */}
      {variant === "outlinesmall" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-sm font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[100px] h-[42px] md:w-[130px] md:h-[46px] lg:w-[164px] lg:h-[50px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {/* Extra Small oulined button for Desktop, Tabs & Mobiles */}
      {variant === "oulineextrasmall" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs font-ptsans font-bold tracking-[1px] rounded-[30px] md:rounded-[25px] lg:rounded-[30px] border border-offblack hover:border-brightblue text-offblack  text-center w-[80px] h-[38px] md:w-[100px] md:h-[40px] lg:w-[120px] lg:h-[45px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {variant === "outlinelargebetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {variant === "outlinemediumbetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[130px] h-[48px] md:w-[164px] md:h-[50px] lg:w-[214px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {variant === "outlinesmallbetween" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-sm font-ptsans font-bold tracking-[1px] rounded-[35px] border border-offblack hover:border-brightblue text-offblack  text-center w-[100px] h-[42px] md:w-[130px] md:h-[46px] lg:w-[164px] lg:h-[50px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-brightblue group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-between px-5 transition-all duration-300">
            {children}
          </span>
        </button>
      )}
      {variant === "facebook" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] text-white bg-[#1877F2]  text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center">
            {children}
          </span>
        </button>
      )}
      {variant === "google" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} relative group overflow-hidden text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px]  text-white bg-[#d4564b]  text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          <span className="rounded-t-full group-hover:rounded-t-none absolute bottom-0 left-1/2 group-hover:left-0 flex w-[1px] group-hover:w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-offblack group-hover:h-[150%]"></span>
          <span className="relative group-hover:text-white flex items-center justify-center">
            {children}
          </span>
        </button>
      )}
      {/* Special red button  */}
      {variant === "specialredbutton" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} text-xs md:text-base font-ptsans font-bold tracking-[1px] rounded-[35px] bg-red-600 text-[#FFFFFF] hover:bg-primary hover:text-black text-center w-[160px] h-[48px] md:w-[200px] md:h-[50px] lg:w-[278px] lg:h-[53px] uppercase disabled:hidden`}
        >
          {children}
        </button>
      )}
      {/* Latest Buttons Ended*/}
      {/* Old Buttons */}
      {variant === "filled" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#232A2E] hover:border-black hover:text-[#FFFFFF] px-4 min-w-[109px] py-1 text-[16px] rounded-lg border bg-[#2E00FF] text-slate-50 border-blue-500  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "general" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#232A2E] hover:border-black hover:text-[#FFFFFF] px-4 w-[164px] h-[43px] py-1 text-[18px] rounded-lg border bg-[#2E00FF] text-slate-50 border-blue-500  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "Bgeneral" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#2E00FF] hover:border-blue-500 hover:text-[#FFFFFF] px-4 w-[164px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border bg-black text-slate-50 border-black  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "deactivate" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#2E00FF] hover:border-blue-500 hover:text-[#FFFFFF] px-4 min-w-[109px] w-[278px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border bg-black text-slate-50 border-black  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "Gdeactivate" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#232A2E] hover:border-black hover:text-[#FFFFFF] px-4 min-w-[109px] w-[278px] h-[43px] py-1 text-[18px] rounded-lg border bg-[#2E00FF] text-slate-50 border-blue-500  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "Specialdeactivate" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-primary hover:border-primary hover:text-black px-4 min-w-[109px] w-[278px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border bg-black text-slate-50 border-black  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "Special" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} bg-[#2E00FF] border-blue-500 text-[#FFFFFF] hover:text-black px-4 w-[164px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border hover:bg-primary  hover:border-primary  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "LargeYTB" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-[#2E00FF] hover:border-blue-500 hover:text-[#FFFFFF] px-4 min-w-[109px] w-[278px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border bg-primary text-black border-primary  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "JustDeactivate" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} hover:bg-primary hover:border-primary hover:text-black px-4 min-w-[109px] w-[278px] h-[43px] text-[18px] flex items-center justify-center rounded-lg border bg-red-600 text-slate-50 border-red-600  font-bold  transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
      {variant === "outlined" && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`
          ${className} text-black px-4 min-w-[109px] py-1 text-[16px] rounded-full border border-black bg-transparent font-semibold hover:bg-[#232A2E] hover:text-[#FFFFFF] transition-all font-montseorrat disabled:hidden`}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default MainButton;
