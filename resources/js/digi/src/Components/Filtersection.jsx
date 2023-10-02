import React from "react";

//Component
import Filters from "./content/sidebar/Filters";

const Filtersection = ({ setActive, active }) => {
  return (
    <div className={` sticky bottom-0 z-50 rounded-t-3xl bg-stone-50 shadow-lg md:hidden ${active ? "block" : "hidden"} `}>
      <div className="p-5">
        <div className="mb-2 px-2 text-lg font-bold text-orange-400">فیلتر</div>
        <Filters title="برند محصول" items={["اپل", "سامسونگ", "شیائومی", "اچ پی", "ایسوس", "مایکروسافت"]} />
        <Filters title="رنگ محصول" items={["نقره ای", "سفید", "قرمز", "خاکستری", "سبز"]} />
        <Filters title="محدوده قیمت" />
        <div className="mt-5 flex  items-center justify-center">
          <button onClick={() => setActive(false)} className="rounded-md bg-orange-400 p-2 text-sm font-bold text-stone-50 shadow-md transition-all hover:bg-orange-100 hover:text-orange-400  ">
            نمایش محصولات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filtersection;
