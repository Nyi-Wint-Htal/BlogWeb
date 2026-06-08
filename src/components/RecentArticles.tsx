import { useEffect, useState } from "react";
import RecentSingleArticle from "./RecentSingleArticle";
import type { Blog } from "../types/blog";
import fetchBlogs from "../services/fetchBlogs";
import { getDate } from "../utils/getDate";

const RecentArticles = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs(3, 0);
        setBlogs(data);
      } catch (error) {
        setError("Could not fetch the blogs");
      }
    };
    loadBlogs();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (blogs.length === 0) {
    return <div>Loading Recent Articles...</div>;
  }

  return (
    <div className="cardStyle p-5 gap-y-3">
      <div className="flex flex-row gap-x-2 items-center">
        <i className="fa-solid fa-arrow-trend-up"></i>
        <h1>Recent Posts</h1>
      </div>
      {blogs.map((blog) => {
        return (
          <RecentSingleArticle
            key={blog.id}
            id={blog.id}
            title={blog.title}
            date={getDate(blog.id)}
          />
        );
      })}
    </div>
  );
};

export default RecentArticles;
