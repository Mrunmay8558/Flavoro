import React from "react";
import Navbar from "../components/navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
}
