import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//Redux
import { categories, clear } from "../features/filtersSlice";

//Component
import Appbar from "../Components/header/Appbar";
import Section from "../Components/content/category/Section";

//images
import Phone from "../assets/images/categories/phone.png";
import Laptop from "../assets/images/categories/laptop.png";
import Smartwatch from "../assets/images/categories/smartwatch.png";
import Apple from "../assets/images/categories/apple.png";
import Xiaomi from "../assets/images/categories/xiaomi.png";
import Samsung from "../assets/images/categories/samsung.png";
import Asus from "../assets/images/categories/asus.png";
import Microsoft from "../assets/images/categories/microsoft.png";
import Hp from "../assets/images/categories/hp.png";

const clickHandler = (dispatch) => {
  dispatch(clear());
  dispatch(categories("all"));
};

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div className="mb-20 flex flex-col ">
      <Appbar />
      <Link
        to="/"
        onClick={() => {
          clickHandler(dispatch);
        }}
        className="bg-orange-400 p-4 text-center text-white shadow-md"
      >
        مشاهده تمام محصولات
      </Link>
      <Section
        Cluster="mobile"
        Image={Phone}
        CatName="تلفن همراه"
        Categories={[
          { brand: "اپل", image: Apple },
          { brand: "سامسونگ", image: Samsung },
          { brand: "شیائومی", image: Xiaomi },
        ]}
      />
      <hr className="mx-3 w-3/4" />
      <Section
        Cluster="laptop"
        Image={Laptop}
        CatName="لپ تاپ"
        Categories={[
          { brand: "ایسوس", image: Asus },
          { brand: "مایکروسافت", image: Microsoft },
          { brand: "اپل", image: Apple },
          { brand: "اچ پی", image: Hp },
        ]}
      />
      <hr className="mx-3 w-3/4" />
      <Section
        Cluster="watch"
        Image={Smartwatch}
        CatName="ساعت هوشمند"
        Categories={[
          { brand: "اپل", image: Apple },
          { brand: "سامسونگ", image: Samsung },
          { brand: "شیائومی", image: Xiaomi },
        ]}
      />
    </div>
  );
};

export default Category;
