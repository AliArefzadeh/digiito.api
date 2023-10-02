import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { brands, categories, clear } from "../../../features/filtersSlice";

const typeModel = (model) => {
  if (model.includes("موبایل")) return "تلفن همراه";
  else if (model.includes("لپ تاپ")) return "لپ تاپ";
  else return "ساعت هوشمند";
};

const selectFilter = (model, brand, dispatch) => {
  if (model === "تلفن همراه") {
    brand ? dispatch(brands({ name: brand, check: true })) : dispatch(clear());
    dispatch(categories("mobile"));
  } else if (model === "لپ تاپ") {
    brand ? dispatch(brands({ name: brand, check: true })) : dispatch(clear());
    dispatch(categories("laptop"));
  } else {
    brand ? dispatch(brands({ name: brand, check: true })) : dispatch(clear());
    dispatch(categories("watch"));
  }
};

const Breadcrumbs = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10">
      <div className="mb-6 flex h-14 items-center rounded-md px-4 md:bg-white">
        <Link to="/" onClick={() => selectFilter(typeModel(productInfo.model), 0, dispatch)} className="cursor-pointer text-sm text-orange-400 md:text-base">
          {typeModel(productInfo.model)}
        </Link>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-3 w-3 stroke-slate-800" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        <Link to="/" onClick={() => selectFilter(typeModel(productInfo.model), productInfo.brand, dispatch)} className="cursor-pointer text-sm text-orange-400 md:text-base">
          برند {productInfo.brand}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
