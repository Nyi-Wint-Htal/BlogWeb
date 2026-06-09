import { useState } from "react";
import logo from "../assets/InsightHubLogo.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="sticky top-0 z-10 shadow-2xs h-fit flex items-center">
      <div className="flex justify-between items-center text-center w-screen h-13 backdrop-blur-lg bg-white/70 px-3 sm:px-5">
        <div className="flex justify-center items-center text-center">
          <div className="w-10 object-contain">
            <img src={logo} alt="My Logo" />
          </div>
          <h1 className="font-bold text-lg">InsightHub</h1>
          <div className="hidden md:visible md:flex flex-row gap-x-5 pl-7 items-center justify-center text-md font-light  text-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/about-us"}>About</Link>
            <Link to={"/contact-us"}>Contact</Link>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="md:hidden">
            <Hamburger size={18} toggle={setOpen} toggled={open} />
          </div>
        </div>
      </div>
      {open && (
        <div className="flex flex-col items-start justify-center gap-y-4 py-4 px-2 border-b bg-white min-w-screen">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/contact-us">Contact</Link>
        </div>
      )}
    </main>
  );
};

export default NavBar;
