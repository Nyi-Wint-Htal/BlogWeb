import { Link } from "react-router-dom";
import logo from "../assets/InsightHubLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#121827] text-white w-screen px-3 pt-10 items-start md:items-center gap-y-4">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-x-10 md:justify-center md:items-start">
        <div className="w-full flex flex-col md:col-span-2 items-start gap-y-5">
          <div className="flex justify-center items-center text-center gap-x-1">
            <div className=" object-cover w-20 rounded-2xl">
              <img src={logo} alt="My Logo" />
            </div>
            <h1>InsightHub</h1>
          </div>
          <p>
            A modern developer blog sharing insights, tutorials, and best
            practices in web development, programming, and technology.
          </p>
          <div className="flex flex-row gap-x-2">
            <a href="https://www.facebook.com/nyiwint.htal.12/" target="_blank">
              <i className="fa-brands fa-facebook rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            </a>
            <a href="https://www.instagram.com/nyiwinthtal/" target="_blank">
              <i className="fa-brands fa-instagram rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            </a>
            <a
              href="https://github.com/Nyi-Wint-Htal?tab=repositories"
              target="_blank"
            >
              <i className="fa-brands fa-github rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nyi-wint-htal-a05a05196/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            </a>
          </div>
        </div>
        <div className="pt-5 md:pt-0 gap-y-2 flex flex-col">
          <h2 className="pb-2">Quick Links</h2>
          <Link to={"/"}>Home</Link>
          <Link to={"/about-us"}>About</Link>
          <Link to={"/contact-us"}>Contact</Link>
        </div>
        {/*  <div className="py-5 md:py-0 gap-y-2 flex flex-col">
          <h2 className="pb-2">Categories</h2>
          <h3>Technology</h3>
          <h3>Programming</h3>
          <h3>AI & ML</h3>
          <h3>Web Development</h3>
        </div> */}
      </div>
      <div className="h-[0.04px] bg-[#202937] w-full"></div>
      <div className="flex items-center text-center justify-center px-10 pt-5 pb-10">
        <h2 className="text-sm">© 2026 DevBlog. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
