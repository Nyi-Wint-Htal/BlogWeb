import SingleArticle from "./SingleArticle";
import myLogo from "../assets/My Logo.png";
import AboutAuthor from "./AboutAuthor";
import RecentArticles from "./RecentArticles";
import { useEffect, useState } from "react";
import fetchBlogs from "../services/fetchBlogs";
import type { Blog } from "../types/blog";
import type { User } from "../types/user";

const AllArticles = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  const [numBlogs, setNumBlogs] = useState(6);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const tags = [...new Set(blogs.map((blog) => blog.tags[0]))];
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs(numBlogs);
        setBlogs(data);
      } catch (error) {
        setError("Failed to load the articles");
      }
    };
    loadBlogs();
  }, [numBlogs]);

  const currentDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (error) {
    return <div>{error}</div>;
  }
  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  let filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );
  if (tag) {
    filteredBlogs = filteredBlogs.filter((blog) => blog.tags.includes(tag));
  }
  return (
    <div className="flex flex-col gap-y-5 justify-center">
      <div className="flex flex-col min-w-full justify-center items-center gap-y-5">
        <div className="flex flex-row w-full max-w-150 border justify-center items-center px-3 py-2 rounded-xl">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div id="tabs" className="flex flex-wrap gap-2 md:w-150">
          <span
            className="px-2.5 py-1.5 rounded-3xl border"
            onClick={() => setTag("")}
          >
            All
          </span>
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="px-2.5 py-1.5 rounded-3xl border"
                onClick={() => setTag(tag)}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-x-5 gap-y-5">
        <div className="flex md:grid md:grid-cols-2 lg:col-span-2 md:gap-x-5 flex-col gap-y-5 pb-5">
          {filteredBlogs.map((blog) => {
            return (
              <SingleArticle
                key={blog.id}
                id={blog.id}
                image={`https://picsum.photos/id/${blog.id + 10}/700/400`}
                tags={blog.tags}
                title={blog.title}
                description={blog.body}
                profile={myLogo}
                name="Samuel Jackson"
                date={currentDate}
                time="12:00PM"
              />
            );
          })}

          <div className="w-full justify-center items-center text-center lg:col-span-2">
            <button
              className="border px-6 py-2 rounded-xl"
              onClick={() => setNumBlogs((prev) => prev + 6)}
            >
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
