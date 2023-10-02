import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = ({ active }) => {
  let { pathname } = useLocation();
  const id = pathname.split("/products/")[1];

  return (
    <div className={`fixed bottom-0 right-0 left-0 w-full rounded-tl-md rounded-tr-md border border-t-2 bg-white px-4 py-2 shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)] md:hidden ${active || pathname === `/products/${id}` ? "hidden" : "block"}`}>
      <nav className="w-full">
        <ul className="flex w-full items-center justify-between gap-x-2">
          <li className={`${pathname === "/" ? "text-slate-800" : "text-gray-400"} flex-auto text-sm `}>
            <Link className="flex w-full items-center justify-center py-4" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {pathname === "/" && <span className="mr-2 text-lg font-bold">خانه</span>}
            </Link>
          </li>
          <li className={`${pathname === "/category" ? "text-slate-800" : "text-gray-400"} flex-auto text-sm`}>
            <Link className="flex w-full items-center justify-center py-4" to="/category">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              {pathname === "/category" && <span className="mr-2 text-lg font-bold">دسته بندی</span>}
            </Link>
          </li>
          <li className={`${pathname === "/shopcart" ? "text-slate-800" : "text-gray-400"} flex-auto text-sm`}>
            <Link className="flex w-full items-center justify-center py-4" to="/shopcart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              {pathname === "/shopcart" && <span className="mr-2 text-lg font-bold">سبد خرید</span>}
            </Link>
          </li>
          {/* <li className={`${pathname === "/interest" ? "text-slate-800" : "text-gray-400"} flex-auto text-sm`}>
            <Link className="flex w-full items-center justify-center py-4" to="/interest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {pathname === "/interest" && <span className="mr-2 text-lg font-bold">علاقه مندی ها</span>}
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
