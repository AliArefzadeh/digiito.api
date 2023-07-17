import React from "react";

//Component
import Imageslider from "./Imageslider";
import Title from "./Title";
import Colors from "./Colors";
import Sellerdetail from "./Sellerdetail";
import Specification from "./Specification";
import Review from "./Review";
import Description from "./Description";

const Information = ({ productInfo }) => {
  const { model, brand, colors, details, price, images } = productInfo;
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10">
      <div className="flex flex-col rounded-xl md:bg-white md:p-4 lg:flex-row">
        <div className="flex flex-col items-center gap-y-9 px-4 md:flex-auto md:items-start md:justify-start md:p-0 lg:flex-row">
          <Imageslider images={images} />
          <div className="w-full md:mr-8 md:w-auto">
            <Title title={{ model, brand }} />
            <hr className="mb-8 hidden lg:block" />
            <Colors colors={colors} />
            <Sellerdetail scale="mobile" />
            <Specification details={details} />
          </div>
        </div>
        <Sellerdetail scale="T&D" price={price} productInfo={productInfo} />
      </div>
      <div className="flex flex-col">
        <Review />
        <Description />
      </div>
    </div>
  );
};

export default Information;
