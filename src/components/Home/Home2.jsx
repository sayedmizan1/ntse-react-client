import "./Home.scss";
import React, { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home2 = () => {
  const { products, setProducts } = useContext(Context);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  return (
    <div>
      <div className="main-content">
        <div className="layout">
          <Products products={products} heading={"Popular Exam"} />
        </div>
      </div>
    </div>
  );
};

export default Home2;
