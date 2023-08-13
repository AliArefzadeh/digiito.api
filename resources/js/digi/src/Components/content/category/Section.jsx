import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import Links from "./Links";

//Redux
import { categories, clear } from "../../../features/filtersSlice";

const clickHandler = (dispatch, cluster) => {
  dispatch(clear());
  dispatch(categories(cluster));
};

const Section = ({ Image, CatName, Categories, Cluster }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative my-8  flex items-end text-slate-700 ">
      <div className=" flex overflow-x-auto p-3">
        <Link className="mt-6 flex flex-shrink-0 flex-grow-0 flex-col items-center  justify-between overflow-hidden rounded-xl bg-gray-300 shadow-md">
          <p className="mt-8 font-semibold">{CatName}</p>
          <img className="w-40 " src={Image} alt="catName" />
        </Link>
        <div className="flex flex-shrink-0 flex-grow-0">
          {Categories.map((item, id) => (
            <Links key={id} item={item} cluster={Cluster} />
          ))}
        </div>
      </div>

      <Link to="/" onClick={() => clickHandler(dispatch, Cluster)} className=" absolute top-1 left-3 text-orange-500">
        مشاهده همه
      </Link>
    </div>
  );
};

export default Section;
