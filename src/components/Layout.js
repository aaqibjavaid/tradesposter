import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"

const Layout = () => {
  const location = useLocation();
  // console.log("roles", auth?.roles[0]?.roleName)
  if (location?.pathname?.includes("AdminPanel")) {
    return (
      <main className="App grid grid-rows-[0fr,_1fr]">
        <Header  isAdminPanel/>
        <div className="lg:grid lg:grid-cols-[0fr,_1fr] h-[calc(100vh_-_120px)] overflow-auto mx-[5%] lg:mx-[15%] xl:mx-[15%] xxl:mx-[16%] xxxl:mx-[17%] hidden-scrollbar">
          <div className="hidden lg:block mt-16">
            <Sidebar />
          </div>
          <div className="w-full mt-[265px] pb-[100px] ml-[8%]">
            <Outlet />
          </div>
        </div>
      </main>
    );
  } 
};

export default Layout;
