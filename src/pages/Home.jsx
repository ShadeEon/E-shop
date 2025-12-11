import CategoryList from "../features/products/components/CatergoryList"
import ProductList from "../features/products/components/ProductList"
import MainBanner from "../features/banner/components/MainBanner"

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
