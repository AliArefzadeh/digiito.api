import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Component
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";
import Cart from "../Components/content/shopcart/Cart";
import Totalprice from "../Components/content/shopcart/Totalprice";
import Operationbtn from "../Components/content/shopcart/Operationbtn";

//Images
import Shopping from "../assets/images/shopping.png";

//Redux
import { clear } from "../features/cartSlice";

const Shopcart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch =useDispatch()
  return (
    <div>
      <Appbar />
      <Navbar />
      {!state.checkout ? (
        <div className="container mx-auto mb-24 md:mb-9 grid max-w-screen-2xl grid-cols-12 gap-4  md:px-4 ">
          <div className="col-span-12 mt-10 flex flex-col px-4 md:col-span-8">
            {state.selectedItems.length === 0 && (
              <div className="flex w-full flex-col items-center justify-center text-center text-gray-400">
                <div className="flex items-center justify-center drop-shadow-md">
                  <h1 className="text-lg font-bold md:text-2xl ">محصولی در سبد خرید شما موجود نیست !</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-7 w-7 md:h-10 md:w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <Link to="/" className="mt-10 rounded-md bg-orange-400 p-2 text-white shadow-md">
                  <p>صفحه محصولات</p>
                </Link>
              </div>
            )}
            {state.selectedItems.map((item, id) => (
              <Cart key={id} product={item} />
            ))}
          </div>
          <div className="col-span-12 mt-10 flex flex-col px-4 md:col-span-4">
            <Totalprice />
            <Operationbtn />
          </div>
        </div>
      ) : (
        <div className="container mx-auto mb-9 mt-20 grid max-w-screen-2xl  grid-cols-12 gap-4 md:mt-0 md:px-4 ">
          <div className="col-span-12 flex flex-col items-center justify-center ">
            <div className="flex w-full flex-col items-center justify-between md:w-2/3 md:flex-row">
              <p className="mb-16 text-2xl font-bold text-slate-700 md:text-3xl">با تشکر از خرید شما</p>
              <img className="w-1/2" src={Shopping} alt="shopping" />
            </div>
            <Link onClick={() => dispatch(clear())} to="/" className="mt-6 cursor-pointer rounded-md bg-orange-400 p-4 text-white shadow-md md:text-lg lg:text-xl">
              رفتن به صفحه محصولات
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopcart;
