/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  useLocation } from "react-router-dom";
import Avtar from "../../assets/img/Avtar.png";
const Header = ({ isAdminPanel }) => {
 
  return (
    <>
      {/* scrolledVersion={scrolledVersion || isOpen} */}
      <HeaderContainer>
        <div
          className={`grid grid-cols-12 py-5 pt-5 ${
            isAdminPanel ? "bg-white" : ""
          } `}
        >

          <div
            className={`${
              isAdminPanel
                ? "flex justify-between col-span-11 lg:col-span-12  max-w-screen-xl lg:max-w-screen-lg xl:max-w-full px-3 lg:px-0 xl:px-1 mx-[5%] lg:mx-[10%]"
                : "flex justify-between col-span-11 lg:col-span-12 mx-[5%] lg:mx-[10%]"
            }`}
          >
            <div>
              <img
                className="w-[100px] h-[40px] cursor-pointer"
                src={require("../../assets/img/trades-poster.png")}
                alt="trades-poster"
                onClick={() => window.scrollTo(0, 0)}
              />
            </div>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = ({ isMobile, children }) => {
  const location = useLocation();
  const isAdminPanel = location.pathname.includes("AdminPanel");
  if (!isAdminPanel) {
    return (
      <div
        className={` fixed bg-white top-0 w-full  z-40`}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={`${isAdminPanel ? "" : "absolute top-0"} w-full z-40 ${
        isMobile ? "bg-white" : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default Header;
