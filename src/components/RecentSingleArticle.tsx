import { Link } from "react-router-dom";

type RecentSingleArticleProps = {
  id: number;
  title: string;
  date: string;
};

const RecentSingleArticle = ({ id, title, date }: RecentSingleArticleProps) => {
  return (
    <Link to={`/article/${id}`} className="flex flex-col gap-y-2">
      <h1 className="text-sm font-medium">{title}</h1>
      <p className="text-xs text-gray-500">{date}</p>
    </Link>
  );
};

export default RecentSingleArticle;
