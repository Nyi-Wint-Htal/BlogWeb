import { Link } from "react-router-dom";
import computer from "../assets/computers.png";
import logo from "../assets/My Logo.png";
import AboutAuthor from "../components/AboutAuthor";

const Article = () => {
  return (
    <div className="flex justify-center">
      <div className="p-5 gap-y-5 flex flex-col sm:p-10 max-w-200">
        <Link to={"/"} className="flex flex-row gap-x-3 items-center">
          <i className="fa-solid fa-arrow-left"></i>
          <p>Back to Blog</p>
        </Link>
        <div className="cardStyle">
          <img src={computer} />
          <div className="p-5 flex flex-col gap-y-5">
            <h2>Web Development</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              Optimizing React Performance: Tips and Tricks
            </h1>
            <div className="w-full flex flex-row justify-between items-center gap-x-2">
              <div className="flex gap-x-3">
                <img src={logo} className="object-cover w-8" />
                <div className="flex flex-col">
                  <p>Lisa Park</p>
                  <div className="flex flex-row gap-x-2">
                    <div>
                      <i className="fa-regular fa-calendar"></i> May 20, 2026
                    </div>
                    <div>
                      <i className="fa-regular fa-clock"></i> 9 min
                    </div>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-share-nodes "></i>
            </div>
            <div className="w-full h-[0.3px] bg-amber-800"></div>
            <div>
              React performance optimization is crucial for delivering smooth
              user experiences. Let's explore practical techniques to make your
              React apps faster. Understanding Re-renders React re-renders
              components when state or props change. Understanding this
              mechanism is the first step to optimization.
            </div>
          </div>
        </div>
        <AboutAuthor />
      </div>
    </div>
  );
};

export default Article;
