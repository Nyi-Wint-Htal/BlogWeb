import AllArticles from "../components/AllArticles";
import FeaturedArticle from "../components/FeaturedArticle";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-3 sm:p-5 flex flex-col gap-y-5 pb-25">
      <FeaturedArticle />
      <AllArticles />
      <Newsletter />
    </main>
  );
};

export default Home;
