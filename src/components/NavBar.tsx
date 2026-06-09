import { useState } from "react";
import logo from "../assets/InsightHubLogo.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="sticky top-0 z-50 border-b border-slate-200/50">
      <div className="flex justify-between items-center text-center w-screen h-16 backdrop-blur-xl bg-white/80 px-4 sm:px-6">
        <div className="flex justify-center items-center text-center">
          <div className="w-10 object-contain rounded-xl overflow-hidden">
            <img src={logo} alt="InsightHub Logo" />
          </div>

          <h1 className="font-bold text-lg">InsightHub</h1>

          <div className="hidden md:flex flex-row gap-x-6 pl-8 items-center justify-center text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-indigo-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Hamburger size={18} toggle={setOpen} toggled={open} />
        </div>
      </div>

      {open && (
        <div className="md:hidden w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
          <div className="flex flex-col gap-y-2 px-5 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              About
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default NavBar;
