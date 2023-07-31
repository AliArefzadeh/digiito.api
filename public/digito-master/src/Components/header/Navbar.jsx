import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { searchInput } from "../../features/filtersSlice";

//Images
import Shopicon from "../../assets/images/shopping-cart.png";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const inputHandler = async (e) => {
    await dispatch(searchInput(e.target.value));
  };

  return (
    <nav className="mb-9 hidden bg-white p-4 shadow-lg md:block">
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between">
        <ul className="flex items-center justify-center gap-x-2 text-slate-800 lg:gap-x-3 lg:text-lg">
          <li>
            <Link className="block rounded px-3 py-2 drop-shadow-md transition-all duration-500" to="/">
              <img className="w-14" src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" to="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100">درباره ما</Link>
          </li>
          <li>
            <Link className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100">تماس با ما</Link>
          </li>
        </ul>
        <div className="mr-4 max-w-xl flex-1">
          <div className="flex items-center rounded-lg bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7 cursor-pointer stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input onChange={inputHandler} className="mr-4 w-full border-transparent bg-transparent p-2 text-slate-800 focus:border-transparent focus:outline-none focus:ring-0" type="text" name="" id="" placeholder="جستجوی نام محصول، نام برند، نام مدل و..." />
          </div>
        </div>
        <div className="relative mr-4">
          <Link to="/shopcart">
            <span className="absolute bottom-6 right-[-7px] z-50 flex items-center justify-center rounded-full bg-slate-700 px-2 text-white">{state.itemsCounter}</span>
            <img className="ml-4 w-10 cursor-pointer drop-shadow-md" src={Shopicon} alt="shopcart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
