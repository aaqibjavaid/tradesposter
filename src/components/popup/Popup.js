import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularButton from "../common/MainButton/CircularButton";

const Popup = (props) => {
  const navigate = useNavigate();
  const dropIn = {
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.9,
        type: "ease",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.9,
        type: "ease",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center p-3 z-50 backdrop-blur-sm bg-neutral-900 bg-opacity-75`}
    >
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
          <div
            className="m-5"
            onClick={() => {
              props.setTrigger(false);
              props.onClose();
              navigate("/");
            }}
          >
            <div className={`${!props?.ShowCrossButton ? "hidden" : "block"}`}>
              <CircularButton variant={"cross"}></CircularButton>
            </div>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </motion.div>
  );
};
export default Popup;
