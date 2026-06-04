import SingleArticle from "./SingleArticle";
import computers from "../assets/computers.png";
import myLogo from "../assets/My Logo.png";
import AboutAuthor from "./AboutAuthor";
import RecentArticles from "./RecentArticles";

const AllArticles = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex flex-col gap-y-5 justify-center">
      <div className="flex flex-col min-w-full justify-center items-center gap-y-5">
        <div className="flex flex-row w-full max-w-150 border justify-center items-center px-3 py-2 rounded-xl">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full"
          />
        </div>
        <div id="tabs" className="flex flex-wrap gap-2 md:w-150">
          <span className="px-2.5 py-1.5 rounded-3xl border">All</span>
          <span className="px-2.5 py-1.5 rounded-3xl border">Technology</span>
          <span className="px-2.5 py-1.5 rounded-3xl border">Programming</span>
          <span className="px-2.5 py-1.5 rounded-3xl border">AI</span>
          <span className="px-2.5 py-1.5 rounded-3xl border">
            Web Development
          </span>
          <span className="px-2.5 py-1.5 rounded-3xl border">Lifestyle</span>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-x-5 gap-y-5">
        <div className="flex md:grid md:grid-cols-2 lg:col-span-2 md:gap-x-5 flex-col gap-y-5 pb-5">
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <SingleArticle
            image={computers}
            tag="Programming"
            title="Modern JavaScript: ES2024 Features You Should Know"
            description="JavaScript continues to evolve rapidly, and ES2024 brings several exciting features that will change how we write code. In this comprehensive guide, we'll explore the most important additions to the language."
            profile={myLogo}
            name="Sarah Chen"
            date={currentDate}
            time="12:00PM"
          />
          <div className="w-full justify-center items-center text-center lg:col-span-2">
            <button className="border px-6 py-2 rounded-xl">
              Load More Articles
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <AboutAuthor />
          <RecentArticles />
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
