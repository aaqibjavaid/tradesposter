/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import SecondaryHeading from "../../../components/common/Typography/SecondaryHeading";

const Dashboard = () => {
  const data = [
    {
      heading: "Account",
      icon: (
        <i className="fi fi-rr-user-gear text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Account",
      count: false,
    },
    {
      heading: "Deactivation",
      icon: (
        <i className="fi fi-rr-user-slash text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Dashboard/Deactivation",
      count: false,
    },
    {
      heading: "Email",
      icon: (
        <i className="fi fi-rr-envelope text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Dashboard/Settings/Email",
      count: false,
    },
    {
      heading: "Messages",
      icon: (
        <i className="fi fi-rr-comment-alt-dots text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Inbox/Messages",
      count: true,
      number: 20,
    },
    {
      heading: "Mobile",
      icon: (
        <i className="fi fi-rr-mobile-button text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Dashboard/Settings/Mobile",
      count: false,
    },
    {
      heading: "Notifications",
      icon: (
        <i className="fi fi-rr-bell text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Inbox/Notifications",
      count: true,
      number: 36,
    },
    {
      heading: "Password",
      icon: (
        <i className="fi fi-rr-lock text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Dashboard/Settings/ResetPassword",
      count: false,
    },
    {
      heading: "Reviews",
      icon: (
        <i className="fi fi-rr-star text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Inbox/Review",
      count: false,
    },
    {
      heading: "Saved post",
      icon: (
        <i className="fi fi-rr-disk text-[20px] cursor-pointer hover:text-brightblue"></i>
      ),
      link: "/CustomerDashboard/Dashboard/SavedPosts",
      count: true,
      number: 23,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 xmd:grid-cols-3 xl:grid-cols-4 w-[320px] xmd:w-[500px] xl:w-[650px] gap-8 md:gap-4 ">
        {data?.map((item) => {
          return (
            <>
              <div className="col-span-1 w-[150px] relative ">
                {item.count && (
                  <div className="w-[25px] h-[25px] rounded-full z-10 top-2 left-2 bg-primaryblue text-white absolute flex justify-center items-center">
                    <p className="text-[12px]">{item.number}</p>
                  </div>
                )}
                <Link to={item.link}>
                  <div className="flex flex-col items-center shadow-lg bg-pastalblue text-offblack rounded-2xl py-14">
                    <>{item.icon}</>
                    <SecondaryHeading variant={"Paragrapheading"} className={"mt-3 text-offblack"}>
                      {item.heading}
                    </SecondaryHeading>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
