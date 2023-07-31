import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Helper
import { enTofn, ifExist } from "../../helper/functions";

//Redux
import { addItems } from "../../../features/cartSlice";

const Addbtn = ({ productInfo }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const color = useSelector((state) => state.color.color);

  return (
    <div className="fixed bottom-0 right-0 left-0 flex w-full items-center justify-between gap-x-4 rounded-tl-md rounded-tr-md border border-t-2 bg-white px-4 py-2 shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)] md:hidden">
      {ifExist(state.selectedItems, { ...productInfo, color }) ? (
        <button className="flex-auto rounded-md border border-orange-500 bg-transparent py-4 text-lg text-orange-500">موجود در سبد خرید</button>
      ) : (
        <button
          onClick={() => {
            dispatch(addItems({ ...productInfo, color }));
          }}
          className="flex-auto rounded-md bg-orange-500 py-4 text-lg text-white"
        >
          افزودن به سبد خرید
        </button>
      )}
      <div className="flex flex-col items-end text-slate-800">
        <span className="font-bold">{enTofn(productInfo.price)}</span>
        <span className="text-sm text-gray-400">تومان</span>
      </div>
    </div>
  );
};

export default Addbtn;
