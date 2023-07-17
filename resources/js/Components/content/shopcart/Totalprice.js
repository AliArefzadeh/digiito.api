import React, { useState } from "react";
import { useSelector } from "react-redux";

//Redux

//Helper
import { enTofn } from "../../helper/functions";

const Totalprice = () => {
  const [visible, setVisible] = useState(false);
  const state = useSelector((state) => state.cart);

  return (
    <div className=" flex flex-col justify-center gap-y-6 rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900">مجموع قیمت :</span>
        <span className="font-bold text-orange-500">{enTofn(state.total)} تومان</span>
      </div>
      <div className=" flex items-center justify-between text-slate-800">
        <p className="">کد تخفیف :</p>
        <div className="mr-5  flex items-center justify-between rounded-md bg-stone-100 ">
          <input type="text" placeholder="123ABC" className=" w-full border-transparent bg-transparent p-0 text-center text-slate-800 focus:border-transparent focus:outline-none focus:ring-0"></input>
          <button
            onClick={() => {
              setVisible(true);
            }}
            className="h-full rounded-l-md bg-orange-400 p-2 text-white transition-all hover:bg-orange-500"
          >
            تایید
          </button>
        </div>
      </div>
      {visible && (
        <div>
          <div className="flex items-center justify-between">
            <p>تخفیف : </p>
            <p className="font-bold text-orange-500">{enTofn(4500000)} تومان</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p>قیمت نهایی : </p>
            <p className="font-bold text-orange-500">{enTofn(4500000)} تومان</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Totalprice;
