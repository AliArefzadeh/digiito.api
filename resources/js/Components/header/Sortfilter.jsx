import React from "react";
import { useDispatch } from "react-redux";

//Redux
import { searchInput } from "../../features/filtersSlice";

const Sortfilter = ({ setActive }) => {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(searchInput(e.target.value));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-x-4 px-4 md:hidden">
        <div className="flex w-1/2 items-center justify-start rounded bg-stone-50 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7 cursor-pointer stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input onChange={inputHandler} className="w-full border-transparent bg-transparent p-2 text-sm text-slate-800 focus:border-transparent focus:outline-none focus:ring-0" type="text" name="" id="" placeholder="جستجوی نام محصول، نام برند، نام مدل و..." />
        </div>
        <div className="flex w-1/2 items-center justify-start rounded bg-stone-50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span onClick={() => setActive(true)} className="mr-2 cursor-pointer text-sm text-slate-700">
            افزودن فیلتر
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sortfilter;
