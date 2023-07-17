import React from "react";

const Review = () => {
  return (
    <div className=" m-4 rounded-xl bg-white p-8 text-slate-800 md:mx-0">
      <div className="mb-4 text-xl">نقد و بررسی محصول</div>
      <div className=" flex flex-col items-end">
        <p className="mb-5 text-justify text-sm leading-7">آیفون ۱۳ از سری پرچمداران ۲۰۲۱ اپل با قابلیت های فراوان است که در تاریخ ۱۴ سپتامبر به صورت رسمی رونمایی شد و پس از گذشت مدتی در تاریخ ۲۴ سپتامبر به بازارهای جهانی راه یافت و توانست بسیاری از طرفداران برند اپل را به خرید متقاعد سازد. طراحی iPhone 13 Pro مشابه سری پیشین با تغییراتی جزئی است که در رنگ های زیبای آبی، مشکی گرافیت، طلایی و نقره ای عرضه شده است...</p>
        <button className="text-orange-500 md:hidden">ادامه مطلب</button>
      </div>
    </div>
  );
};

export default Review;
