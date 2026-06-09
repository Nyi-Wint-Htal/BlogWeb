import AllArticles from "../components/AllArticles";
import FeaturedArticle from "../components/FeaturedArticle";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col gap-y-5 pb-25 ">
      <FeaturedArticle />
      <AllArticles />
      <Newsletter />
    </main>
  );
};

export default Home;
