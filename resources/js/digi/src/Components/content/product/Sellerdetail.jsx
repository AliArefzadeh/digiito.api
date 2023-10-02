import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Helper
import { enTofn, ifExist } from "../../helper/functions";

//Redux
import { addItems } from "../../../features/cartSlice";

const Sellerdetail = ({ scale, price, productInfo }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const color = useSelector((state) => state.color.color);

  return (
    <React.Fragment>
      {/* for mobile Scale */}
      {scale === "mobile" && (
        <div className="col-span-8 mb-8 flex flex-wrap gap-x-2 gap-y-3 px-4 text-xs text-slate-800 md:col-span-2 md:hidden">
          <div className="flex flex-auto items-center justify-center">
            <div className="flex items-center">
              <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                <svg className="absolute -bottom-0.5 -left-0.5" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.756 6.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897C5.144 6.13 5.932 6.999 7 6.999Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.681 7c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 7c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 4.87C1.248 6.043 2.112 7 3.29 7ZM7 9.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="mr-2">فروشنده :</span>
            </div>
            <span className="mr-4 font-thin">دیجیتو</span>
          </div>
          <div className="flex flex-auto items-center justify-center">
            <div className="flex items-center">
              <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                <svg className="absolute -bottom-0.5 -left-0.5" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.43 1.58 3.897 2.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V5.043c0-.87-.666-1.834-1.48-2.139L9.583 1.58c-.602-.22-1.566-.22-2.153 0Z" stroke="#222F5D" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="mr-2">گارانتی :</span>
            </div>
            <span className="mr-4 font-thin">18 ماهه زرین خدمت</span>
          </div>
          <div className="flex flex-auto items-center justify-center">
            <div className="flex items-center">
              <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                <svg className="absolute -bottom-0.5 -left-0.5" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.333V8c0 .733-.6 1.333-1.333 1.333H1.334V5.08a2.6 2.6 0 0 0 2.06.92 2.562 2.562 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.667 9.333v2c0 1.107-.893 2-2 2H12C12 12.6 11.4 12 10.667 12s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 12 4 12.6 4 13.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 9.333 10 8.733 10 8V3.333h1.227c.48 0 .92.26 1.16.673L13.527 6h-.86C12.3 6 12 6.3 12 6.666v2c0 .367.3.667.667.667h2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.333 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 8v1.333h-2A.669.669 0 0 1 12 8.667v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 3.333c0 .8-.353 1.513-.906 2A2.666 2.666 0 1 1 3.334.666 2.666 2.666 0 0 1 6 3.333Z" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 2.499v1l-.833.5" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="mr-2">ارسال توسط :</span>
            </div>
            <span className="mr-4 font-thin">انبار</span>
          </div>
        </div>
      )}

      {/* for tablet & desktop scale */}
      {scale === "T&D" && (
        <div className="hidden text-sm md:flex lg:w-1/3 xl:w-1/4">
          <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-gray-50 p-4 text-slate-800">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                  <svg className="absolute -bottom-0.5 -left-0.5" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.756 6.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897C5.144 6.13 5.932 6.999 7 6.999Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.681 7c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 7c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 4.87C1.248 6.043 2.112 7 3.29 7ZM7 9.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="mr-2">فروشنده :</span>
              </div>
              <span className="mr-2 font-thin">دیجیتو</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                  <svg className="absolute -bottom-0.5 -left-0.5" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.43 1.58 3.897 2.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V5.043c0-.87-.666-1.834-1.48-2.139L9.583 1.58c-.602-.22-1.566-.22-2.153 0Z" stroke="#222F5D" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="mr-2">گارانتی :</span>
              </div>
              <span className="mr-2 font-thin">18 ماهه زرین خدمت</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="relative flex h-5 w-5 rounded-full bg-gray-200">
                  <svg className="absolute -bottom-0.5 -left-0.5" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.333V8c0 .733-.6 1.333-1.333 1.333H1.334V5.08a2.6 2.6 0 0 0 2.06.92 2.562 2.562 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.667 9.333v2c0 1.107-.893 2-2 2H12C12 12.6 11.4 12 10.667 12s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 12 4 12.6 4 13.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 9.333 10 8.733 10 8V3.333h1.227c.48 0 .92.26 1.16.673L13.527 6h-.86C12.3 6 12 6.3 12 6.666v2c0 .367.3.667.667.667h2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.333 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 14.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 8v1.333h-2A.669.669 0 0 1 12 8.667v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 3.333c0 .8-.353 1.513-.906 2A2.666 2.666 0 1 1 3.334.666 2.666 2.666 0 0 1 6 3.333Z" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 2.499v1l-.833.5" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="mr-2">ارسال توسط :</span>
              </div>
              <span className="mr-2 font-thin">انبار</span>
            </div>
            <div className="mt-10">
              <div className="text mb-4 w-full text-center text-xl font-bold text-orange-500">{enTofn(price)} تومان</div>
              {ifExist(state.selectedItems, { ...productInfo, color }) ? (
                <button className="w-full rounded-md border border-orange-500 bg-transparent py-4 text-lg text-orange-500">موجود در سبد خرید</button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(addItems({ ...productInfo, color }));
                  }}
                  className="w-full rounded-md bg-orange-500 py-4 text-lg text-white"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sellerdetail;
