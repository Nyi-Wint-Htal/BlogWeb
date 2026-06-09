import { Link } from "react-router-dom";

type SingleArticleProps = {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  name: string;
  date: string;
  time: string;
};

const SingleArticle = ({
  id,
  image,
  tags,
  title,
  description,
  name,
  date,
}: SingleArticleProps) => {
  const blogReadTime = Math.floor(description.length / 90);
  return (
    <Link
      to={`/article/${id}`}
      className="cardStyle gap-y-5 hover:shadow-lg/20 transition-all duration-500 ease-out group"
    >
      <div className="w-full h-60 overflow-hidden">
        <img
          src={image}
          className="group-hover:scale-105 transition-all duration-500 ease-out"
        />
      </div>
      <div className="flex flex-col gap-y-2 px-5">
        <div className="flex flex-row gap-x-1">
          <h2 className="tagStyle ">{tags[0]}</h2>
          <h2 className="tagStyle">{tags[1]}</h2>
          <h2 className="tagStyle">{tags[2]}</h2>
        </div>

        <h1 className="font-semibold text-lg line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {title}
        </h1>
        <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <span className="w-[90%] h-[0.1px] bg-gray-200"></span>
      </div>
      <div className="flex flex-row justify-between px-5 pb-5 text-center items-center">
        <div className="flex flex-row items-center gap-x-3">
          <img
            src={`https://picsum.photos/id/${id + 35}/200`}
            className="w-8 object-cover border rounded-4xl"
          />
          <p className="text-xs font-semibold">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-center text-gray-500 min-w-fit gap-x-4">
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-calendar text-xs"></i>
            <p className="text-xs">{date}</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-clock text-xs"></i>
            <p className="text-xs">{blogReadTime} min</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleArticle;
