import CategoryList from "../components/CatergoryList"
import ProductList from "../components/ProductList"
import MainBanner from "../components/MainBanner"

const Home = () => {
  return (
    <section className="flex flex-col px-8 py-6 gap-6">
      <MainBanner/>
      <CategoryList/>
      <ProductList/>
    </section>
  );
};

export default Home
