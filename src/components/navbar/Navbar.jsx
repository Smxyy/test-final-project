import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropDownMenuHover,
  DropDownUserMenu,
} from "./DropdownMenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); // Get the navigation function
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1); // Increment click count on any click
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClickCount(0); // Reset click count after timeout
    }, 500); // Set timeout window (adjust as needed)

    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, [clickCount]); // Run useEffect only when clickCount changes

  const handleDoubleClick = () => {
    if (clickCount === 2) {
      navigate("/skills"); // Navigate to the desired page on double click
    }
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const skillList = [
    { data: "ការស្ដាប់", nav: "/skills/:skill" },
    { data: "ការអាន", nav: "/skills/:skill" },
    { data: "ការសរសេរ", nav: "/skills/:skill" },
  ];
  const grammmarLevelList = [
    { data: "កម្រិត A1-A2", nav: "/grammar/:level-:grammar" },
    { data: "កម្រិត B1-B2", nav: "/grammar/:level-:grammar" },
    { data: "កម្រិត C1", nav: "/grammar/:level-:grammar" },
  ];
  const vocabularyLevelList = [
    { data: "កម្រិត A1-A2", nav: "/vocabulary/:level-vocabulary" },
    { data: "កម្រិត B1-B2", nav: "/vocabulary/:level-vocabulary" },
  ];
  const userContentList = [
    { data: "Dashboard", nav: "/dashboard" },
    { data: "កែសម្រួលគណនី", nav: "/edit-profile" },
    { data: "បង្កើតគណនី", nav: "/register" },
    { data: "ចូលគណនី", nav: "/login" },
  ];
  return (
    <>
      <nav class="top-0 z-50 w-full bg-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
              className="w-[100px] object-cover"
              alt="English club"
            />
          </Link>
          <div class="flex lg:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="lg:hidden text-gray-500 dark:text-gray-400 rounded-lg text-sm p-1.5 me-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden lg:block lg:w-[210px] xl:w-[300px]">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="ការស្វែងរក..."
              />
              <button
                type="submit"
                class="text-white bg-blue-800 group absolute bottom-[9px] end-2.5 hover:bg-second font-medium text-sm px-4 py-2 rounded-lg"
              >
                {/* <span class="bg-primary hover:bg-second relative bottom-2 text-white px-4 py-2 rounded-lg">Search</span> */}
                ការស្វែងរក
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center mt-1 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* User Menu Design*/}
            <div class="flex ms-3">
              <div>
                <button
                  type="button"
                  class="flex text-smrounded-full "
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <MdAccountCircle
                    id="avatarButton"
                    type="button"
                    data-dropdown-toggle="userDropdown"
                    data-dropdown-placement="bottom-start"
                    className="cursor-pointer text-[3rem] text-grays hover:text-primary"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="User dropdown"
                  />
                </button>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <ul class="py-1" role="none">
                  {userContentList.map((content, index) => {
                    return (
                      <>
                        <DropDownUserMenu
                          key={index}
                          data={content.data}
                          nav={content.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                <div class="">
                  <Link
                    to=""
                    class="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    ការចាកចេញ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-search"
          >
            <div class="relative mt-3 lg:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="ការស្វែងរក..."
              />
              <button
                type="submit"
                class="text-white absolute bottom-[9px] end-2.5 bg-blue-800 hover:bg-second font-medium rounded-lg text-sm px-4 py-2"
              >
                ការស្វែងរក
              </button>
            </div>
            <ul class="flex flex-col p-4 lg:p-0 mt-4 text-grays text-md border rounded-lg lg:space-x-4 xl:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === '/' ? 'text-primary bg-gray-100 rounded lg:bg-transparent' : 'hover:text-primary'
                  }`}
                  aria-current="page"
                >
                  ទំព័រដើម
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <button
                    id="dropdownHoverButton1"
                    data-dropdown-toggle="dropdownHover1"
                    data-dropdown-trigger="hover"
                    class={`hidden group lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 md:w-auto${location.pathname.startsWith('/skills') ? 'text-primary' : 'text-grays hover:text-primary'}`}
                    aria-current="page" type="button"
                  >
                      <span class={`me-1 font-bold flex gap-1 ${location.pathname.startsWith('/skills') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>ជំនាញ
                      <FaAngleDown class="mt-1 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                      </span>
                  </button>
                  <button
                    id="dropdownHoverButton1"
                    data-collapse-toggle="dropdown-example1"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown1}
                    onDoubleClick={handleDoubleClick}
                    class="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button"
                  >
                      <span class={`font-bold w-full flex justify-between ${location.pathname.startsWith('/skills') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>ជំនាញ
                      <FaAngleDown
                        onClick={toggleDropdown1}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen1 ? "rotate-180" : ""
                        }`}
                      />
                      </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example1"
                  class="hidden lg:hidden text-grays py-2 space-y-2 font-normal"
                >
                  {skillList.map((skill, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={skill.data}
                          nav={skill.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover1"
                  class="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group"
                >
                  <ul
                    class="py-2 text-sm text-grays font-normal dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton1"
                  >
                    {skillList.map((skill, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={skill.data}
                            nav={skill.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/grammar">
                  <button
                    id="dropdownHoverButton2"
                    data-dropdown-toggle="dropdownHover2"
                    data-dropdown-trigger="hover"
                    class="hidden lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 md:w-auto"
                    type="button" aria-current="page"
                  >
                      <span class={`me-1 font-bold flex gap-1 ${location.pathname.startsWith('/grammar') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>វេយ្យាករណ៍
                      <FaAngleDown class="mt-1 me-2 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                      </span>
                  </button>
                  <button
                    id="dropdownHoverButton2"
                    data-collapse-toggle="dropdown-example2"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown2}
                    class="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button" aria-current="page"
                  >
                      <span class={`font-bold w-full flex justify-between ${location.pathname.startsWith('/grammar') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>វេយ្យាករណ៍
                      <FaAngleDown
                        onClick={toggleDropdown2}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen2 ? "rotate-180" : ""
                        }`}
                      />
                      </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example2"
                  class="hidden lg:hidden text-grays py-2 space-y-2 font-normal"
                >
                  {grammmarLevelList.map((gLevel, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={gLevel.data}
                          nav={gLevel.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover2"
                  class="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group"
                >
                  <ul
                    class="py-2 text-sm text-grays font-normal"
                    aria-labelledby="dropdownHoverButton2"
                  >
                    {grammmarLevelList.map((gLevel, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={gLevel.data}
                            nav={gLevel.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li class="text-gray-700 hover:text-primary">
                <Link to="/vocabulary">
                  <button
                    id="dropdownHoverButton3"
                    data-dropdown-toggle="dropdownHover3"
                    data-dropdown-trigger="hover"
                    class="hidden lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 md:w-auto dark:text-white"
                    type="button" aria-current="page"
                  >
                      <span class={`me-1 font-bold flex gap-1 ${location.pathname.startsWith('/vocabulary') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>ពាក្យគន្លឹះ
                      <FaAngleDown class="mt-1 me-2 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                      </span>
                  </button>
                  <button
                    id="dropdownHoverButton3"
                    data-collapse-toggle="dropdown-example3"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown3}
                    class="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button"
                  >
                      <span class={`font-bold w-full flex justify-between ${location.pathname.startsWith('/skills') ? 'group text-primary' : 'text-grays hover:text-primary'}`}>ពាក្យគន្លឹះ
                      <FaAngleDown
                        onClick={toggleDropdown3}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen3 ? "rotate-180" : ""
                        }`}
                      />
                      </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example3"
                  class="hidden lg:hidden text-gray-700 hover:text-primary py-2 space-y-2 font-normal"
                >
                  {vocabularyLevelList.map((vLevel, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={vLevel.data}
                          nav={vLevel.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover3"
                  class="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group"
                >
                  <ul
                    class="py-2 text-sm text-grays font-normal"
                    aria-labelledby="dropdownHoverButton3"
                  >
                    {vocabularyLevelList.map((vLevel, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={vLevel.data}
                            nav={vLevel.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
              <Link
                  to="/about-us"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === '/about-us' ? 'text-primary bg-gray-100 rounded lg:bg-transparent' : 'hover:text-primary'
                  }`}
                  aria-current="page"
                >
                  អំពីពួក​យើង
                </Link>
              </li>
              <li>
              <Link
                  to="/contact-us"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === '/contact-us' ? 'text-primary bg-gray-100 rounded lg:bg-transparent' : 'hover:text-primary'
                  }`}
                  aria-current="page"
                >
                  ទំនាក់ទំនង
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
