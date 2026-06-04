import AllArticles from "../components/AllArticles";
import FeaturedAritcle from "../components/FeaturedAritcle";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-3 sm:p-5 flex flex-col gap-y-5 pb-25">
      <FeaturedAritcle />
      <AllArticles />
      <Newsletter />
    </main>
  );
};

export default Home;
