type RecentSingleArticleProps = {
  title: string;
  date: string;
};

const RecentSingleArticle = ({ title, date }: RecentSingleArticleProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-sm">{title}</h1>
      <p className="text-xs">{date}</p>
    </div>
  );
};

export default RecentSingleArticle;
