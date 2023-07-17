import React from "react";

//Components
import Categories from "./Categories";
import Filters from "./Filters";

const Sidebar = () => {
  return (
    <div className="col-span-4 row-span-2 hidden md:block lg:col-span-3 xl:col-span-2">
      <div className="sticky top-28 max-h-[calc(100vh_-_140px)] overflow-auto rounded-xl bg-white p-5">
        <Categories />
        <div className="mb-5">
          <div className="mb-5 text-xl font-bold text-orange-400">فیلتر</div>
          <Filters title="برند محصول" items={["اپل", "سامسونگ", "شیائومی", "اچ پی", "ایسوس", "مایکروسافت"]} />
          <Filters title="رنگ محصول" items={["نقره ای", "سفید", "قرمز", "خاکستری", "سبز"]} />
          <Filters title="محدوده قیمت" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
