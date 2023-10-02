import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { brands, colors, price } from "../../../features/filtersSlice";

//Helper
import { enTofn } from "../../helper/functions";

const Filters = ({ items, title }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filters);
  const [pricevalue, setPriceValue] = useState(state.priceRange);

  const selectHandler = () => {
    setSelected(!selected);
  };


  const changeHandler = (event, status) => {
    if (status === "min") setPriceValue({ min: event.target.value, max: pricevalue.max });
    else setPriceValue({ min: pricevalue.min, max: event.target.value });
    dispatch(price(pricevalue));
  };

  const checkHandler = (event, item) => {
    if (event.target.checked)
      title === "برند محصول"
        ? dispatch(brands({ name: item, check: true }))
        : title === "رنگ محصول" && dispatch(colors({ name: item, check: true }));
    else {
      title === "برند محصول"
        ? dispatch(brands({ name: item, check: false }))
        : title === "رنگ محصول" && dispatch(colors({ name: item, check: false }));
    }
  };

  const ifChecked = (list, item) => {
    if (list.find((i) => i === item)) return "checked";
    else return "";
  };

  return (
    <div>
      <div>
        <div
          onClick={selectHandler}
          className="mb-3 flex w-full cursor-pointer items-center justify-between p-2"
        >
          <div className="flex items-center justify-center">
            <div className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {title === "برند محصول" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                )}
                {title === "رنگ محصول" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                )}
                {title === "محدوده قیمت" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                )}
              </svg>
            </div>
            <span className="text-md mr-3 font-semibold text-slate-800 md:text-lg">{title}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 stroke-slate-700 transition-all duration-500 ${
              selected === false && "rotate-180"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="mb-2 px-2">
          <ul>
            {title !== "محدوده قیمت" &&
              items.map((item) => (
                <li key={item} className={`mb-2 md:mb-3 ${selected ? "block" : "hidden"}`}>
                  <input
                    checked={ifChecked(state.brands, item) || ifChecked(state.colors, item)}
                    onChange={(event) => checkHandler(event, item)}
                    type="checkbox"
                    className="rounded text-orange-500 focus:ring-orange-500"
                    name={title}
                    id={item}
                  />
                  <label className="mr-2 text-slate-800" htmlFor={item}>
                    {item}
                  </label>
                </li>
              ))}

            {title === "محدوده قیمت" && (
              <div className={`${selected ? "block" : "hidden"}`}>
                <div className="flex items-center justify-between">
                  <span className="mx-1">{enTofn(0)}</span>
                  <div className="flex w-full">
                    <input
                      onChange={(event) => changeHandler(event, "min")}
                      id="minmax-range"
                      type="range"
                      min="0"
                      max="50"
                      value={pricevalue.min}
                      className=" h-1 w-full cursor-pointer appearance-none rounded-lg bg-orange-500 dark:bg-slate-800"
                    />
                    <input
                      onChange={(event) => changeHandler(event, "max")}
                      id="minmax-range"
                      type="range"
                      min="50"
                      max="100"
                      value={pricevalue.max}
                      className=" h-1 w-full cursor-pointer appearance-none rounded-lg bg-orange-500 dark:bg-slate-800"
                    />
                  </div>
                  <span className="mx-1">{enTofn(100)}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3">
                  <p className="text-lg font-bold">
                    از {enTofn(pricevalue.min)} تا {enTofn(pricevalue.max)}
                  </p>
                  <p className="md:text-md text-sm font-bold ">میلیون تومان</p>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
