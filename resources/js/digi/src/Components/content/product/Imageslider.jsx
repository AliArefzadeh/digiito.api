import React, { useState } from "react";

const Imageslider = ({ images }) => {
  const [items, setItems] = useState(images);

  const changeImage = async (element) => {
    let newImages = images.slice();
    const filteredItemIndex = newImages.findIndex((i) => i === element);
    const temp = newImages[filteredItemIndex];
    newImages[filteredItemIndex] = newImages[0];
    newImages[0] = temp;
    setItems(newImages);
  };

  return (
    <div className="flex w-4/5 max-w-[200px] flex-col md:max-w-[300px] lg:max-w-[200px] xl:mb-8 xl:max-w-xs">
      <img className="mb-4 h-auto w-full" src={items[0]} alt="image1" />
      <div className="flex w-full items-center justify-around gap-x-1">
        <div onClick={() => changeImage(items[0])} className="cursor-pointer rounded-md border-2 p-2 hover:shadow-md ">
          <img src={items[0]} alt="pic1" />
        </div>
        <div onClick={() => changeImage(items[1])} className="cursor-pointer rounded-md border-2 p-2 hover:shadow-md ">
          <img src={items[1]} alt="pic2" />
        </div>
        <div onClick={() => changeImage(items[2])} className="cursor-pointer rounded-md border-2 p-2 hover:shadow-md ">
          <img src={items[2]} alt="pic3" />
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
