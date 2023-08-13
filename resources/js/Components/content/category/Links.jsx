import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { brands, categories } from "../../../features/filtersSlice";

const clickHandler = (state, dispatch, item, cluster) => {
  if (!state.brands.find((i) => i === item.brand)) {
    dispatch(brands({ name: item.brand, check: true }));
    dispatch(categories(cluster));
  }
};

const Links = ({ item, cluster }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filters);
  return (
    <Link to="/" onClick={() => clickHandler(state, dispatch, item, cluster)} className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
      <img className="mb-4 w-20" src={item.image} alt="catName" />
      <p>{item.brand}</p>
    </Link>
  );
};

export default Links;
