import React from "react";

const Specification = ({ details }) => {
  return (
    <div className=" rounded-xl bg-white p-4 text-slate-800 md:mb-3 md:bg-transparent md:p-0">
      <div className="mb-4 text-lg xl:text-xl">ویژگی های کالا :</div>
      <ul>
        {details.map((item, id) => (
          <li key={id} className="mb-2 flex flex-col lg:flex-row">
            <div className="flex items-center gap-x-1">
              <span className="ml-2 flex h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="mb-1 text-sm">{Object.keys(item)} :</span>
            </div>
            <span className="mr-2 text-sm font-bold">{Object.values(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specification;
