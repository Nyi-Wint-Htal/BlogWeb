import { Link } from "react-router-dom";

type SingleArticleProps = {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  profile: string;
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
  time,
}: SingleArticleProps) => {
  return (
    <Link to={`/article/${id}`} className="cardStyle">
      <img src={image} />
      <div className="flex flex-col gap-y-2 px-5">
        <div className="flex flex-row gap-x-1">
          <h2 className="text-sm pl-2">{tags[0]}</h2>
          <h2 className="text-sm pl-2">{tags[1]}</h2>
          <h2 className="text-sm pl-2">{tags[2]}</h2>
        </div>
        <h1>{title}</h1>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
      <div className="flex flex-row justify-around px-3 py-5 text-center items-center border-t">
        <div className="flex flex-row items-center gap-x-1 ">
          <img
            src={`https://picsum.photos/id/${id + 35}/200`}
            className="w-8 object-cover border rounded-4xl"
          />
          <p className="text-xs">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-center min-w-fit gap-x-1">
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-calendar text-xs"></i>
            <p className="text-xs">{date}</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-clock text-xs"></i>
            <p className="text-xs">{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleArticle;
