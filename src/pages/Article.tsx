import { Link } from "react-router-dom";
import AboutAuthor from "../components/AboutAuthor";
import { useParams } from "react-router-dom";
import fetchSingleBlog from "../services/fetchSingleBlog";
import { useEffect, useState } from "react";
import type { Blog } from "../types/blog";
import { authors } from "../utils/authors";
import { getDate } from "../utils/getDate";
import { aboutAuthors } from "../utils/aboutAuthors";

const Article = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!id) {
      setError("Arcticle not found!");
      return;
    }
    const loadBlog = async () => {
      try {
        const data = await fetchSingleBlog(Number(id));
        setBlog(data);
      } catch (error) {
        setError("Article Not Found!");
      }
    };
    loadBlog();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!blog) {
    return <div>Loading</div>;
  }
  const author = authors[(blog.id - 1) % authors.length];
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
            <h2>
              {blog.tags[0]}, {blog.tags[1]}, {blog.tags[2]}
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              {blog.title}
            </h1>
            <div className="w-full flex flex-row justify-between items-center gap-x-2">
              <div className="flex gap-x-3 items-center">
                <img
                  src={`https://picsum.photos/id/${blog.id + 35}/200`}
                  className="object-cover border w-10 rounded-4xl"
                />
                <div className="flex flex-col">
                  <p>{author}</p>
                  <div className="flex flex-row gap-x-2">
                    <div>
                      <i className="fa-regular fa-calendar"></i>
                      {getDate(blog.id)}
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
        <AboutAuthor
          name={author}
          imageId={blog.id}
          description={aboutAuthors[blog.id]}
        />
      </div>
    </div>
  );
};

export default Article;
