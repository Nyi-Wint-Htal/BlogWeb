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
        const random = Math.floor(Math.random() * 30);
        const data = await fetchSingleBlog(random);
        setBlog(data);
      } catch (error) {
        setError("Failed to load article");
      }
    };
    loadBlog();
  }, []);
  let imageSrc = "";

  if (error) {
    return <div>{error}</div>;
  }
  if (!blog) {
    return <div>Loading...</div>;
  } else {
    imageSrc = `https://picsum.photos/id/${blog.id + 10}/700/400`;
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-x-10 mt-10 py-5 gap-y-5">
      <div className="flex flex-col gap-y-5 py-5">
        <h2 className="text-sm">Featured Article</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">{blog.title}</h1>
        <p>{blog.body}</p>
        <Link
          to={`/article/${blog.id}`}
          className="flex items-center border p-2 w-30"
        >
          Read More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="w-full md:w-[clamp(70rem,100vw,120rem)] rounded-2xl object-cover overflow-hidden">
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default FeaturedArticle;
