import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UserCart from "./pages/UserCart";
import ProductInfoPage from "./pages/ProductInfoPage";


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<UserCart/>}/>
          <Route path="/products/:productId/:productSlug" element={<ProductInfoPage />} />
          <Route path="*" element={<h1 className="text-center mt-20">Page Not Found</h1>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App