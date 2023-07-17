import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { checkout } from "../../../features/cartSlice";

const Operationbtn = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-24 flex md:mt-2">
      {!state.selectedItems.length ? (
        <button disabled className="flex w-full justify-center rounded-md bg-orange-400 p-4   text-xl text-white opacity-50 shadow-md md:py-2">
          پرداخت
        </button>
      ) : (
        <button onClick={() => dispatch(checkout())} className="flex w-full justify-center rounded-md bg-orange-400   p-4 text-xl text-white shadow-md md:py-2">
          پرداخت
        </button>
      )}
    </div>
  );
};

export default Operationbtn;
