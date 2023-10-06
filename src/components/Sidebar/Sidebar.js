import { useState } from "react";
import { Link } from "react-router-dom";
import useSidebarData from "./Data";
import { NavHashLink } from "react-router-hash-link";
import SecondaryHeading from "../common/Typography/SecondaryHeading";
import CustomerProfile from "../common/Profile/CustomerProfile";
export default function CustomerSidebar({ children }) {
  const [open, setOpen] = useState(false);
  const [ClickIndex, setClickIndex] = useState(null);

  const sidebarLink = useSidebarData();

  const toggleHandler = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <>
      <div
        id="default-sidebar"
        className={`overflow-auto sticky top-0 left-0  w-[300px] transition-transform -translate-x-full md:translate-x-0`}
      >
       <CustomerProfile/>
        <div className="col-span-3 h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-2xl bg-pastalblue text-offblack mt-10">
          <ul className="pt-2 pb-4 space-y-1 text-sm ml-3">
            <li>
              {sidebarLink?.map((e, index) => {
                if (e.subMenu) {
                  return (
                    <li>
                      <button
                        type="button"
                        className="flex items-center p-2 space-x-3 my-1 hover:text-primaryblue w-full"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                        onClick={() => {
                          toggleHandler(index);
                        }}
                      >
                        {/* {e.icon} */}
                        <span
                          className="flex-1 text-left text-offblack whitespace-nowrap"
                          sidebar-toggle-item
                        >
                          <SecondaryHeading variant={"Paragrapheading"}>
                            {e.linkName}
                          </SecondaryHeading>
                        </span>
                        <svg
                          sidebar-toggle-item
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {open === index && (
                        <ul
                          id="dropdown-example"
                          className="transition duration-150 ease-in-out py-2 space-y-2 flex justify-center flex-col w-full "
                        >
                          {e.subMenu.map((sub) => (
                            <li>
                              <NavHashLink
                                key={sub.id}
                                to={sub.link}
                                onClick={() => setClickIndex(sub.id)}
                                className={`flex items-center p-2 space-x-3 hover:text-primaryblue  text-offblack w-full px-5 ${
                                  sub.id === ClickIndex && "text-primaryblue "
                                }`}
                              >
                                <SecondaryHeading variant={"Subheadingsmall"}>
                                  {/* {sub.icon} */}
                                  {sub.linkName}
                                </SecondaryHeading>
                              </NavHashLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <Link
                      key={index}
                      to={e.link}
                      onClick={() => {
                        setClickIndex(index);
                        if (e.onClick) {
                          e.onClick();
                        }
                      }}
                      className={`flex items-center p-2 space-x-3 hover:text-primaryblue  text-offblack  ${
                        index === ClickIndex && "text-primaryblue"
                      }`}
                    >
                      <SecondaryHeading variant={"Paragrapheading"}>
                        {/* {e.icon} */}
                        {e.linkName}
                      </SecondaryHeading>
                    </Link>
                  );
                }
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
