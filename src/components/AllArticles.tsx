import SingleArticle from "./SingleArticle";
import myLogo from "../assets/My Logo.png";
import AboutAuthor from "./AboutAuthor";
import RecentArticles from "./RecentArticles";
import { useEffect, useState } from "react";
import fetchBlogs from "../services/fetchBlogs";
import type { Blog } from "../types/blog";
import { authors } from "../utils/authors";
import { getDate } from "../utils/getDate";

const AllArticles = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  const limit = 6;
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const tags = [...new Set(blogs.map((blog) => blog.tags[0]))];
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs(limit, skip);
        if (skip === 0) {
          setBlogs(data);
        } else {
          setBlogs((prev) => [...prev, ...data]);
        }
      } catch (error) {
        setError("Failed to load the articles");
      }
    };
    loadBlogs();
  }, [skip]);

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
                name={authors[(blog.id - 1) % authors.length]}
                date={getDate(blog.id)}
                time="12:00PM"
              />
            );
          })}
          {blogs.length < 251 && (
            <div className="w-full justify-center items-center text-center lg:col-span-2">
              <button
                className="border px-6 py-2 rounded-xl"
                onClick={() => {
                  setSkip((prev) => prev + 6);
                }}
              >
                Load More Articles
              </button>
            </div>
          )}
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
