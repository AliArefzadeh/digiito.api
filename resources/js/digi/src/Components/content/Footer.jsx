import React from "react";
import { Link } from "react-router-dom";

//Images
import Location from "../../assets/images/location.png";

const Footer = () => {
  return (
    <div className="container mx-auto hidden max-w-screen-2xl flex-col bg-white p-2 md:flex md:flex-row">
      <div className=" p-8 text-slate-800">
        <div className="mb-8 flex flex-col items-start justify-start gap-y-4">
          <p className=" text-2xl font-bold text-orange-500 drop-shadow-lg">دیجیتو</p>
          <hr className="h-0.5 w-28 rounded border-0 bg-slate-600  dark:bg-gray-700 " />
        </div>

        <div className="flex items-start justify-between">
          <p className="text-justify text-xl leading-10">
            دیجیتو عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و ساعت هوشمند می‌باشد.دیجی تایز افتخار این را داشته که به
            <b className="text-orange-500"> 223,333 نفر</b> تا به اکنون خدمت رسانی داشته باشد.
          </p>
          <ul className="mr-10 flex w-full flex-col gap-y-4">
            <h1 className="text-xl font-bold">دسترسی سریع</h1>
            <li className="">
              <Link className="block" to="/">
                خانه
              </Link>
            </li>
            <li className="w-full">
              <Link to="/">درباره ما</Link>
            </li>
            <li className="w-full">
              <Link to="/">تماس با ما</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 md:items-end">
        <img className="mb-8 max-w-[300px] rounded-lg" src={Location} alt="location" />
        <div className="flex flex-col gap-y-2 text-orange-500">
          <div className="flex items-center justify-center text-lg md:justify-end">
            <span className="ml-2 drop-shadow-md">021-123456</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="flex items-center justify-end text-lg">
            <span className="ml-2 drop-shadow-md">info@Digitize.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
