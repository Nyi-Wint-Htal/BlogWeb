import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingleBlog from "../services/fetchSingleBlog";
import type { Blog } from "../types/blog";

const FeaturedArticle = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const random = Math.floor(Math.random() * 30) + 1;
        const data = await fetchSingleBlog(random);
        setBlog(data);
      } catch {
        setError("Failed to load article");
      }
    };
    loadBlog();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-x-10 py-15 px-5 sm:px-10 pb-5 gap-y-5 bg-linear-to-r from-[#F3F5FF] overflow-auto to-white">
      <div className="flex flex-col gap-y-5 py-5">
        <h2 className="tagStyle">Featured Article</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          {blog.title}
        </h1>
        <p className="line-clamp-2 text-gray-600">{blog.body}</p>
        <Link
          to={`/article/${blog.id}`}
          className="flex items-center font-light px-4.5 py-2.5 gap-x-2 w-fit rounded-xl bg-linear-to-r from-[#4F46E5] to-[#5B3DF5] text-white shadow-lg shadow-indigo-500/25 hover:scale-105 duration-300 transition-all ease-out inset-shadow-xs inset-shadow-indigo-300/50 hover:from-[#5B3DF5] hover:to-[#6D28D9] active:scale-95"
        >
          Read More <i className="fa-solid fa-arrow-right  text-xs"></i>
        </Link>
      </div>
      <div className="w-full md:w-[clamp(70rem,100vw,120rem)] rounded-2xl object-cover overflow-hidden shadow-md shadow-current/30">
        <img src={`https://picsum.photos/id/${blog.id + 10}/700/400`} />
      </div>
    </div>
  );
};

export default FeaturedArticle;
