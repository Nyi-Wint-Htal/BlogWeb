import myLogo from "../assets/My Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#121827] text-white w-screen px-3 pt-10 items-start md:items-center gap-y-4">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-x-10 md:justify-center md:items-start">
        <div className="w-full flex flex-col md:col-span-2 items-start gap-y-5">
          <div className="flex justify-center items-center text-center gap-x-2">
            <div className="w-7 object-contain bg-white rounded-2xl">
              <img src={myLogo} alt="My Logo" />
            </div>
            <h1>DevBlog</h1>
          </div>
          <p>
            A modern developer blog sharing insights, tutorials, and best
            practices in web development, programming, and technology.
          </p>
          <div className="flex flex-row gap-x-2">
            <i className="fa-brands fa-twitter rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            <i className="fa-brands fa-twitter rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            <i className="fa-brands fa-twitter rounded-md p-2 text-white w-10 bg-[#202937]"></i>
            <i className="fa-brands fa-twitter rounded-md p-2 text-white w-10 bg-[#202937]"></i>
          </div>
        </div>
        <div className="pt-5 md:pt-0 gap-y-2 flex flex-col">
          <h2 className="pb-2">Quick Links</h2>
          <h3>Home</h3>
          <h3>Blog</h3>
          <h3>Categories</h3>
          <h3>About</h3>
        </div>
        <div className="py-5 md:py-0 gap-y-2 flex flex-col">
          <h2 className="pb-2">Categories</h2>
          <h3>Technology</h3>
          <h3>Programming</h3>
          <h3>AI & ML</h3>
          <h3>Web Development</h3>
        </div>
      </div>
      <div className="h-[0.04px] bg-[#202937] w-full"></div>
      <div className="flex items-center text-center justify-center px-10 pt-5 pb-10">
        <h2 className="text-sm">© 2026 DevBlog. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
