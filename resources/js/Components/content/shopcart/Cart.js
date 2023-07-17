import React from "react";
import { useDispatch } from "react-redux";

//Helper
import { enTofn } from "../../helper/functions";

//Redux
import { decrease, increase, remove } from "../../../features/cartSlice";

const Cart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-2 flex items-center justify-between rounded-md bg-white p-2 shadow-md">
      <div className="flex  items-center gap-x-10">
        <img className="w-20" src={product.images[0]} alt="pic" />
        <div className="flex flex-col gap-y-2">
          <span className="text-sm font-bold text-slate-700 md:text-base">{product.model}</span>
          <span className="text-sm text-slate-700">رنگ: {product.color}</span>
          <span className="text-sm font-semibold text-orange-500">{enTofn(product.price)} تومان</span>
        </div>
      </div>
      <div className="flex h-full flex-col items-end justify-between">
        <svg onClick={() => dispatch(remove(product))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <div className="flex items-center justify-between gap-x-2">
          <div onClick={() => dispatch(increase(product))} className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="border-1 rounded-md border border-orange-500 px-1 text-slate-700">{product.quantity}</div>
          {product.quantity > 1 ? (
            <div onClick={() => dispatch(decrease(product))} className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          ) : (
            <div onClick={() => dispatch(remove(product))} className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
