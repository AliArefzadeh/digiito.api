import React from "react";

//Components
import Product from "../shared/Product";

const Products = ({ products }) => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 px-4 sm:gap-x-4 sm:gap-y-11 md:p-0 lg:grid-cols-4">
        {products.map((item) => (
          <Product key={item.id} productData={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
