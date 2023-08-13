import React, {  useState } from "react";
import { useDispatch,useSelector } from "react-redux";

//Redux
import { categories } from "../../../features/filtersSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const state= useSelector((state)=>state.filters)
  const [selected, setSelected] = useState(state.category);

  const selectHandler = (value) => {
    setSelected(value);
    dispatch(categories(value));
  };

  return (
    <div className="mb-7">
      <div className="mb-5 text-xl font-bold text-orange-400">دسته بندی</div>
      <ul>
        <li className="mb-2" onClick={() => selectHandler("all")}>
          <div className="flex items-center rounded-md p-2 cursor-pointer">
            <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className={selected === "all" ? "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800" : "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            <span className={selected === "all" ? "mr-3 text-lg text-slate-800" : "mr-3 text-lg text-gray-300"}>تمام محصولات</span>
          </div>
        </li>
        <li className="mb-2" onClick={() => selectHandler("mobile")}>
          <div className="flex items-center rounded-md p-2 cursor-pointer">
            <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className={selected === "mobile" ? "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800" : "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
            <span className={selected === "mobile" ? "mr-3 text-lg text-slate-800" : "mr-3 text-lg text-gray-300"}>تلفن همراه</span>
          </div>
        </li>
        <li className="mb-2" onClick={() => selectHandler("laptop")}>
          <div className="flex items-center rounded-md p-2 cursor-pointer">
            <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className={selected === "laptop" ? "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800" : "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className={selected === "laptop" ? "mr-3 text-lg text-slate-800" : "mr-3 text-lg text-gray-300"}>لپ تاپ</span>
          </div>
        </li>
        <li className="mb-2" onClick={() => selectHandler("watch")}>
          <div className="flex items-center rounded-md p-2 cursor-pointer">
            <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className={selected === "watch" ? "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800" : "absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-300"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className={selected === "watch" ? "mr-3 text-lg text-slate-800" : "mr-3 text-lg text-gray-300"}>ساعت هوشمند</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
