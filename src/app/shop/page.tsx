import React from "react";
import Shop from "../components/Shop/shop";
import Product from "../components/Shop/product";
import Show from "../components/Shop/show";
import Logo from "../components/Shop/logo";
import Logo2 from "../components/Shop/logo2";
import ProductCard from "../components/Shop/product2";
import Pagination from "../components/Shop/next";

export default function ShopPager() {
  return (
    <div>
      <Shop />
      <Product />
      <Show />
      <Logo />
      <ProductCard />
      <Pagination />
      <Logo2 />
      
    </div>
  );
}