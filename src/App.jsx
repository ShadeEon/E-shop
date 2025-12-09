import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UserCart from "./pages/UserCart";
import ProductInfoPage from "./pages/ProductInfoPage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<UserCart/>}/>
          <Route path="/products/:productId/:productSlug" element={<ProductInfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App