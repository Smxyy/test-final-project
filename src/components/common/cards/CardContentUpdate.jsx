import React from "react";
export default function CardContentUpdate({ img, title, des }) {
  return (
    <>
      <div className="bg-white w-[300px] rounded-tl-[10%] rounded-br-[10%]  shadow-slate-400 shadow-md">
        <img
          className=" h-[300px] object-cover rounded-tl-[10%] "
          src={img}
          alt={title}
        />
        <h1 className="font-suwannaphum text-[24px] font-bold text-second text-center mt-5">
          {title}
        </h1>
        <p className="font-suwannaphum  text-[16px] text-center pt-1 pb-6 px-4">
          {des}
        </p>
      </div>
    </>
  );
}
