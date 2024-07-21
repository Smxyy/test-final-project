import React from "react";
import { Link } from "react-router-dom";

export default function Lessoncard({onClick, title, des, pic, uuid }) {
  const newtitle = title.replace(/ /g, "-");
  const convert = newtitle.toLowerCase();
  
  const handleClick = () => {
    onClick(uuid);
  };

  return (
    <div onClick={handleClick}>
    <Link to={`${convert}`}>
      <div>
        <div className="max-w-[430px] max-h-[261px] rounded-tr-3xl rounded-bl-3xl relative ">
          <img
            className="rounded-tr-3xl rounded-bl-3xl brightness-50 hover:brightness-75"
            src={pic}
            alt="champion"
          />
          <div className="absolute top-20 sm:bottom-15 left-5 right-5 text-white transition-colors justify-center duration-300">
            <h1 className="text-[18px] md:text-[24px] text-primary font-bold text-center mt-5 drop-shadow-lg shadow-black">
              {title}
            </h1>
            <p className="text-[12px] md:text-[18px] text-center mt-1 ">
              {des}
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
}
