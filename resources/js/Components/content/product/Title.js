import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mb-8 text-center md:text-right">
      <h1 className="mb-1 text-lg font-bold text-slate-800 md:mb-2 md:text-xl">{title.model}</h1>
      <h2 className="font-thin text-gray-500 md:text-lg">{title.brand}</h2>
    </div>
  );
};

export default Title;
