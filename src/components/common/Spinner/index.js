import React from "react";
const Spinner = () => {
  return (
    <div class=" absolute right-1/2 bottom-1/2 my-auto transform translate-x-1/2 translate-y-1/2 z-50  w-screen h-screen overflow-x-hidden overflow-y-hidden flex justify-center items-center ">
      <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 "></div>
    </div>
  );
};

export default Spinner;
