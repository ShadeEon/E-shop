import CategoryList from "../components/CatergoryList"
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <section className="flex flex-col px-8 py-6 gap-6">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-6 lg:h-[260px]">
        <div className="lg:col-span-3 lg:row-span-6">
          <img
            src="/src/assets/react.svg"
            alt="Main Banner"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4">
          <img
            src="/src/assets/react.svg"
            alt="Banner 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-4">
          <img
            src="/src/assets/react.svg"
            alt="Banner 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <CategoryList/>
      <ProductList/>
    </section>
  );
};

export default Home
