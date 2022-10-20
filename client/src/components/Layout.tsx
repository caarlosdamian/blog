import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
