import React from "react";
import { Link } from "react-router-dom";

//Helper
import { textSplitter, toInteger, colorConverter } from "../helper/functions";

const Product = ({ productData }) => {
  const { id, brand, colors, images, price, model } = productData;
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-md">
      {/*image section*/}
      <div className="relative m-1 rounded-lg bg-slate-200">
        <img className="w-full px-9 py-3" src={images[0]} alt={id} />
      </div>
      {/*color information*/}

      <div className="flex justify-between p-2">
        <span className="text-xs text-slate-200 sm:text-base">{brand}</span>
        <div className="flex items-center justify-center">
          {colors.map((item, id) => (
            <span key={id} className={`ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full ${colorConverter(item)} border border-white  sm:h-7 sm:w-7`}></span>
          ))}
        </div>
      </div>
      {/*details*/}

      <div className="flex items-center p-2">
        <span className="text-[10px] text-slate-900 sm:text-base">{textSplitter(model)}</span>
      </div>
      <div className="mb-2 flex items-center justify-end px-2">
        <span className="text-sm text-orange-700 sm:text-base">{toInteger(price)}</span>
        <span className="mr-1 text-xs text-orange-700 sm:text-sm">تومان</span>
      </div>
      <hr className="mx-2" />
      <Link to={`/products/${id}`} className="w-full py-2 text-center text-sm font-bold text-orange-400 sm:text-lg">
        مشاهده محصول
      </Link>
    </div>
  );
};

export default Product;
