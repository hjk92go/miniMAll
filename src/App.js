import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path="goods/:id" element={<ProductPage />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
