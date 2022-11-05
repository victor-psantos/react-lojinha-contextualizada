import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from "./../pages/ProductsPage";
import CheckoutPage from "./../pages/CheckoutPage";
import CartContext from "../../contexts/CartContext";

import './App.css';
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
