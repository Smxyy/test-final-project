import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Listening from "../../assets/img/Listening.png";
import { useSelector } from "react-redux";
import {
  fetchExcersices,
  selectExcersice,
} from "../../redux/features/lessondetail/lessondetailSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function LessonDetail() {
  const param = useParams();
  console.log("'param'", param);
  const excercises = useSelector(selectExcersice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExcersices());
  }, []);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-6 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <HiOutlineMenuAlt2 className="text-2xl" />
      </button>
      <aside
        id="default-sidebar"
        class="fixed min-[320px]:top-0 md:top-[100px] left-0 min-[320px]:z-40 md:-z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-10 py-8 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-4 font-suwannaphum">
            <li className="">
              <a href="#">ការសរសេរ</a>
            </li>
            <li className="">
              <a href="#">ការសរសេរ</a>
            </li>
            <li className="">
              <a href="#">ការសរសេរ</a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="min-[320px]:py-0 min-[320px]:px-7 md:py-7 md:px-5 sm:ml-64">
        <div className="">
          <img src={Listening} alt="" className="w-[300px] object-cover" />
        </div>
      </div>
    </>
  );
}
