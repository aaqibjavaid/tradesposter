import React from "react";
import CircularButton from "../../components/common/MainButton/CircularButton";
import PasswordField from "../../components/common/PasswordField/PasswordField";
import Heading from "../../components/common/Typography/Heading";
import TextFiled from "../../components/common/InputField/TextFiled";
import SecondaryHeading from "../../components/common/Typography/SecondaryHeading";
import MainButton from "../../components/common/MainButton/MainButton";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      <div
        className={`bg-white fixed w-screen h-screen hidden-scrollbar shadow-2xl`}
      >
        <div className="flex items-center justify-between max-h-[120px] mt-10 mx-[10%]">
          <div>
            <img
              className="w-[100px] h-[40px] cursor-pointer"
              src={require("../../assets/img/trades-poster.png")}
              alt="trade-poster"
            />
          </div>
          {/* <div className="m-5">
            <div>
              <Link to={"/AdminPanel/Dashboard"}>
                <CircularButton variant={"cross"}></CircularButton>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="my-auto">
          <Heading
            variant={"h4"}
            className={"flex items-center justify-center my-20"}
          >
            Admin portal 
          </Heading>
          <div
            id="#overflow"
            className="h-[calc(100vh_-_120px)] overflow-y-auto max-w-[650px] rounded-lg fixed left-1/2 -translate-x-1/2 hidden-scrollbar pb-[600px]"
          >
            <div className="max-w-[650px] bg-white mx-auto">
              <form>
                <div className="flex justify-center">
                  <div>
                    <TextFiled label={"Email"} variant={"small"} />
                  </div>
                </div>
                <div className="my-5 flex justify-center">
                  <div>
                    <label className="mb-2 block">
                      <SecondaryHeading variant={"Subheadingsmall"}>
                        Password
                      </SecondaryHeading>
                    </label>
                    <PasswordField />
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <Link to={"/AdminPanel/Dashboard"}>
                    <MainButton variant={"large"}>Sign in</MainButton>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
