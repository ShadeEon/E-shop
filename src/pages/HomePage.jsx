import CategoryList from "../features/products/CatergoryList"
import ProductList from "../features/products/ProductList"
import MainBanner from "../features/home/MainBanner"

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
