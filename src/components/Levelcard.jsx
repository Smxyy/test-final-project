import React from "react";
import { Link } from "react-router-dom";

export default function Levelcard({
  image,
  title,
  dis,
  skill_level,
  skill_name,
}) {
  const skilllevel = skill_level.toLowerCase();
  const skillname = skill_name.toLowerCase();
  return (
    <>
      <Link
        to={`${skilllevel}-${skillname}`}
        className="flex gap-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          class="object-cover lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-t-lg"
          src={image}
          alt={title}
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-blues">
            {title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 line-clamp-2 lg:line-clamp-none ">
            {dis}
          </p>
        </div>
      </Link>
    </>
  );
}
