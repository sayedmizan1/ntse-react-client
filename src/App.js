import { BrowserRouter, Switch, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import React, { useEffect, useContext } from "react";
import AppContext from "./utils/context";
import Products from "./components/Products/Products";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="exam" element={<Home2/>} />
            <Route path="about" element={<About/>} />
            
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          {/* <Newsletter /> */}
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
