import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import UserCart from "./pages/Cart";
import Product from "./pages/Product";
import ProductInfoPage from "../src/features/products/components/ProductInfoPage";
import NotFound from "./pages/NotFound";
import UserAccount from "../src/features/userAccount/UserAccount";


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<UserCart/>}/>
          <Route path="/merchandise" element={<Product />} />
          <Route path="/your-account" element={<UserAccount />} />
          <Route path="/products/:productId/:productSlug" element={<ProductInfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App