import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchFeaturedBlog from "../services/fetchFeaturedBlog";

type blogData = {
  body: string;
  tags: string[];
  title: string;
};

const FeaturedAritcle = () => {
  const imageSrc = `https://picsum.photos/700/400?random=1`;
  const random = Math.floor(Math.random() * 30);
  const [blog, setBlog] = useState<blogData>({
    body: "",
    tags: [""],
    title: "",
  });

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await fetchFeaturedBlog(random);
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadBlog();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-x-10 mt-10 py-5 gap-y-5">
      <div className="flex flex-col gap-y-5 py-5">
        <h2 className="text-sm">Featured Article</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">{blog.title}</h1>
        <p>{blog.body}</p>
        <Link to="/article" className="flex items-center border p-2 w-30">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="w-full md:w-[clamp(70rem,100vw,120rem)] rounded-2xl object-cover overflow-hidden">
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default FeaturedAritcle;
