import RecentSingleArticle from "./RecentSingleArticle";

const RecentArticles = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="cardStyle p-5 gap-y-3">
      <div className="flex flex-row gap-x-2 items-center">
        <i className="fa-solid fa-arrow-trend-up"></i>
        <h1>Recent Posts</h1>
      </div>
      <RecentSingleArticle
        title="Getting started with TypeScript"
        date={currentDate}
      />
      <RecentSingleArticle title="Modern Css Techniques" date={currentDate} />
      <RecentSingleArticle title="React Performance Tips" date={currentDate} />
    </div>
  );
};

export default RecentArticles;
