import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
const ItemCart = ({ id, name, qty, price, img }) => {
  const Dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p- mb-3">
      <MdDelete
        onClick={() => {
          Dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`);
        }}
        className="absolute right-7 text-gray-700 cursor-pointer"
      />
      <img src={img} alt="fooditem" className="w-[50px] h-[50px]"></img>
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaMinus
              onClick={() =>
                qty > 1 ? Dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-mg p-1 text-xl transition-all ease-linear curser-pointer"
            />
            <span>{qty}</span>
            <FaPlus
              onClick={() =>
                qty >= 1 ? Dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-mg p-1 text-xl transition-all ease-linear curser-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
