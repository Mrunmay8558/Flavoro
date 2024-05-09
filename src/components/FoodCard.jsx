import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/CartSlice";
const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const Dispatch = useDispatch();
  const addingToCart = () => {
    Dispatch(addToCart({ id, name, price, rating, price, qty: 1, img }));
    handleToast(name);
  };
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col gap-2 rounded-lg ">
      <img
        src={img}
        alt="FoodItem"
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      ></img>
      <div className="text-sm flex justify-between ">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={addingToCart}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
