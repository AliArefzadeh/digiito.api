import React from "react";

//Images
import Advertise from "../../assets/images/advertising.png";

const Advertising = () => {
  return (
    <div className="col-span-4 row-span-2 hidden md:block lg:col-span-2 xl:col-span-2">
      <div className="top-27 sticky max-h-[calc(100vh_-_140px)] overflow-auto rounded-xl bg-gradient-to-r from-slate-800 to-cyan-500 p-5 shadow-lg">
        <div className="flex h-28 flex-col items-center justify-between text-center">
          <img className="absolute top-3 left-3 w-14" src={Advertise} alt="advertising" />
          <div></div>
          <p className="bottom-0 text-sm text-white">جدیدترین ساعت های هوشمند</p>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
