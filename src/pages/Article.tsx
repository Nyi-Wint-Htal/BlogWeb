import { Link } from "react-router-dom";
import logo from "../assets/My Logo.png";
import AboutAuthor from "../components/AboutAuthor";
import { useParams } from "react-router-dom";
import fetchSingleBlog from "../services/fetchSingleBlog";
import { useEffect, useState } from "react";
import type { Blog } from "../types/blog";

const Article = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await fetchSingleBlog(Number(id));
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-5 gap-y-5 flex flex-col sm:p-10 max-w-200">
        <Link to={"/"} className="flex flex-row gap-x-3 items-center">
          <i className="fa-solid fa-arrow-left"></i>
          <p>Back to Blog</p>
        </Link>
        <div className="cardStyle">
          <img src={`https://picsum.photos/id/${blog.id + 10}/700/400`} />
          <div className="p-5 flex flex-col gap-y-5">
            <h2>{blog.tags[0]}</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              {blog.title}
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
            <div>{blog.body}</div>
          </div>
        </div>
        <AboutAuthor />
      </div>
    </div>
  );
};

export default Article;
