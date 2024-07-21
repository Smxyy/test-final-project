import React from "react";
import {
  BsPieChartFill,
  BsPersonLinesFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { Formik, Form } from "formik";

export default function Dashboard() {
  return (
    <section>
      <nav className="fixed top-0 z-50 w-full bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 sm:block md:me-24">
                <img
                  src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
                  className="h-16 me-3"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQTIyI3gDR7pusOaPAIGJKzMZ9aUxcfsJQ&s"
                      alt="user photo"
                    />
                    <span className="self-center font-suwannaphum text-white text-lg pr-3 sm:text-lg ml-2 whitespace-nowrap hidden sm:block">
                      ឈ្មោះរបស់អ្នក
                    </span>
                    <span className="sr-only">Open user menu</span>
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white font-inter"
                      role="none"
                    >
                      Chheam Bunthoeun
                    </p>
                    <p
                      className="font-inter text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      chheambunthoeun444@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 font-inter text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-black"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 font-inter text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-black"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-gray-100 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 font-inter">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 font-inter whitespace-nowrap">
                  Sign In
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 font-inter whitespace-nowrap">
                  Sign Up
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64 pt-14 mt-8">
        <div class="p-4 bg-blue-200 rounded-lg dark:border-gray-700 mt-14">
          <h2 class="text-2xl font-semibold mb-4 font-inter dark:text-gray-800">
            Dashboard
          </h2>
          <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div class="flex justify-center items-center text-orange-500 mb-2">
                <BsPieChartFill className="w-16 h-16 ml-1" />
              </div>
              <div class="text-2xl font-bold dark:text-gray-800">
                <p className="font-inter">20</p>
                <div class="mt-1 font-inter">Enrolled Courses</div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div class="flex justify-center items-center text-orange-500 mb-2">
                <BsPersonLinesFill className="w-16 h-16 ml-4" />
              </div>
              <div class="text-2xl font-bold">
                <p className="font-inter">20</p>
                <div class="mt-1 font-inter">Active Courses</div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div class="flex justify-center items-center text-orange-500 mb-2">
                <BsPersonCheckFill className="w-16 h-16 ml-4" />
              </div>
              <div class="text-2xl font-bold">
                <p className="font-inter">20</p>
                <div class="mt-1 font-inter">Complete Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64 -mt-16 py-2">
        <div className="p-4 border-2 border-none bg-blue-200 rounded-lg dark:border-gray-700 mt-14">
          <h2 class="text-2xl font-semibold mb-4 font-inter dark:text-gray-800">
            Result
          </h2>
          <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>

          <Formik>
            <section className="flex justify-end">
              <Form class="w-full max-w-md mb-4 sm:px-0">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium border-none text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <p className="text-gray-500">All</p>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border-none rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </Form>
            </section>
          </Formik>

          <div className="grid grid-cols-4 sm:grid-cols-4 py-4 text-center font-inter rounded bg-gray-50 dark:bg-gray-800">
            <div className="text-sm sm:text-sm md:text-sm lg:text-xl text-gray-700 font-semibold dark:text-gray-500">
              Courses Name
            </div>
            <div className="text-sm sm:text-sm md:text-sm lg:text-xl text-gray-700 font-semibold dark:text-gray-500">
              Total Exercises
            </div>
            <div className="text-sm sm:text-sm md:text-sm lg:text-xl text-gray-700 font-semibold dark:text-gray-500">
              Total Submit
            </div>
            <div className="text-sm sm:text-sm md:text-sm lg:text-xl text-gray-700 font-semibold dark:text-gray-500">
              Action
            </div>
          </div>

          <section className="">
            <div className="pl-2 py-2 font-suwannaphum">
              <div className="grid grid-cols-4 sm:grid-cols-4 items-center">
                <div className="col-span-1 ml-0 sm:ml-0 sm:col-span-1">
                  <h3 className="text-lg font-semibold">Reading</h3>
                  <p className="text-sm text-gray-600">Student: kok kona</p>
                  <p className="text-sm text-gray-600">December 26, 2024</p>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">80</span>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">5</span>
                </div>
                <div className="col-span-1 sm:col-span-1 sm:text-sm text-center">
                  <button className="px-1 py-2 text-white sm:text-sm lg:px-2 xl:px-5 bg-green-500 rounded-lg hover:bg-green-600">
                    Deleted
                  </button>
                </div>
              </div>
            </div>
            <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>

            <div className="pl-2 py-2 font-suwannaphum">
              <div className="grid grid-cols-4 sm:grid-cols-4 items-center">
                <div className="col-span-1 ml-0 sm:ml-0 sm:col-span-1">
                  <h3 className="text-lg font-semibold">Reading</h3>
                  <p className="text-sm text-gray-600">Student: kok kona</p>
                  <p className="text-sm text-gray-600">December 26, 2024</p>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">80</span>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">5</span>
                </div>
                <div className="col-span-1 sm:col-span-1 sm:text-sm text-center">
                  <button className="px-1 py-2 text-white sm:text-sm lg:px-2 xl:px-5 bg-green-500 rounded-lg hover:bg-green-600">
                    Deleted
                  </button>
                </div>
              </div>
            </div>
            <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>

            <div className="pl-2 py-2 font-suwannaphum">
              <div className="grid grid-cols-4 sm:grid-cols-4 items-center">
                <div className="col-span-1 ml-0 sm:ml-0 sm:col-span-1">
                  <h3 className="text-lg font-semibold">Reading</h3>
                  <p className="text-sm text-gray-600">Student: kok kona</p>
                  <p className="text-sm text-gray-600">December 26, 2024</p>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">80</span>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">5</span>
                </div>
                <div className="col-span-1 sm:col-span-1 sm:text-sm text-center">
                  <button className="px-1 py-2 text-white sm:text-sm lg:px-2 xl:px-5 bg-green-500 rounded-lg hover:bg-green-600">
                    Deleted
                  </button>
                </div>
              </div>
            </div>
            <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>

            <div className="pl-2 py-2 font-suwannaphum">
              <div className="grid grid-cols-4 sm:grid-cols-4 items-center">
                <div className="col-span-1 ml-0 sm:ml-0 sm:col-span-1">
                  <h3 className="text-lg font-semibold">Reading</h3>
                  <p className="text-sm text-gray-600">Student: kok kona</p>
                  <p className="text-sm text-gray-600">December 26, 2024</p>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">80</span>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <span className="text-xl font-semibold">5</span>
                </div>
                <div className="col-span-1 sm:col-span-1 sm:text-sm text-center">
                  <button className="px-1 py-2 text-white sm:text-sm lg:px-2 xl:px-5 bg-green-500 rounded-lg hover:bg-green-600">
                    Deleted
                  </button>
                </div>
              </div>
            </div>
            <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>
          </section>
        </div>
      </div>
    </section>
  );
}
