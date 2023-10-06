/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Login from "./pages/Login";

const Roles = {
  ADMIN: "a69f063d-e59b-4831-8c58-726cb245f2e5",
};

function App() {
  return (
    <>
      <ScrollTop />
      <div className="font-main text-text-black App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="AdminPanel/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;

export const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") {
      const time = setTimeout(() => {
        window.scrollTo(0, 0);
        clearTimeout(time);
      }, 200);
    }
  }, [pathname]);
  return null;
};
