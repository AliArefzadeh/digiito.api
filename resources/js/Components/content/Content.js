import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Gif
import Spinner from "../../assets/images/spinner.gif";

//Components
import Sidebar from "./sidebar/Sidebar";
import Products from "./Products";

//redux
import { fetchProducts } from "../../features/productsSlice";

//Helper
import { searchFilter } from "../helper/functions";

const Content = () => {
  const state = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    !state.products.length && dispatch(fetchProducts());
  }, []);

  const filteredProducts = searchFilter(filters, state.products);

  return (
    <div className="container mx-auto mb-32 grid max-w-screen-2xl grid-cols-12 gap-4 md:mb-9 md:px-4 lg:px-6">
      <Sidebar />
      {state.loading ? (
        <div className="col-span-12 flex h-[100vh] items-center justify-center md:col-span-8 lg:col-span-9 xl:col-span-10">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : null}
      {state.products.length ? <Products products={filteredProducts} /> : null}
      {state.error ? <p>{state.error}</p> : null}
    </div>
  );
};

export default Content;
