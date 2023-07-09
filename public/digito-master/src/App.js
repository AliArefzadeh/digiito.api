import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Productdetail from "./Pages/Productdetail";
import Shopcart from "./Pages/Shopcart";
import BottomNav from "./Components/content/BottomNav";
import Footer from "./Components/content/Footer";

function App() {
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home active={active} setActive={setActive} />} />
        <Route path="/products/:id" element={<Productdetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shopcart" element={<Shopcart />} />
      </Routes>
      <BottomNav active={active} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
