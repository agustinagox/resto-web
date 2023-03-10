import React, { useState, Fragment } from "react";
import { Bag } from "../../assets/icons";
import { IlAvatar, Logo } from "../../assets/illustrations";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import "./navbar-style.css";
import { Link } from "react-router-dom";

type Props = {
  type: string;
};

const Navbar = ({ type }: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState(false);

  const handleLanguage = () => {
    setLanguage(!language);
  };

  // set bg color when scrolling
  const [color, setColor] = useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <div className="container-navbar">
      {type === "signin" ? (
        <div className="p-4 shadow-sm bg-white relative">
          <div className="container mx-auto relative">
            <div className="flex items-center space-x-4 lg:space-x-12 justify-between relative">
              <Link to="/main">
                <img src={Logo} alt="fast-food" className="h-7 lg:h-8" />
              </Link>
              <div className="w-full hidden lg:inline-flex space-x-4 lg:space-x-12">
                <div className="bg-gray-100 px-4 flex-1 rounded-lg flex items-center">
                  <MagnifyingGlassIcon className="text-gray-500 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent ml-2 flex-1 outline-none border-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="border-2 p-2 w-max rounded-xl">
                    <img src={Bag} className="h-5 w-5" alt="" />
                  </div>
                  {isLogin ? (
                    <div className="border-2 p-2 w-max rounded-xl bg-white px-4">
                      <h3 className="text-black text-sm">Sign In/Sign Up</h3>
                    </div>
                  ) : (
                    <Link to="/account">
                      <img
                        src={IlAvatar}
                        className="h-9 w-9 rounded-full"
                        alt=""
                      />
                    </Link>
                  )}
                  <div
                    onClick={handleLanguage}
                    className="flex items-center border-2 p-2 w-max rounded-xl space-x-2 cursor-pointer"
                  >
                    <h3 className="text-black text-sm">ENG</h3>
                    <ChevronDownIcon className="text-black h-4 w-4" />
                  </div>
                </div>
              </div>
              {language && (
                <div
                  className="absolute top-14 right-0 z-20 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="p-2 px-4" role="none">
                    <div className="flex flex-col space-y-2">
                      <a className="text-sm">Indonesia</a>
                      <a className="text-sm">English</a>
                    </div>
                  </div>
                </div>
              )}
              {/* burger */}
              <div className="sticky top-0 z-10 md:hidden">
                <button
                  type="button"
                  className=" inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
              {/* sidebar */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-40 md:hidden"
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-300"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                              type="button"
                              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close sidebar</span>
                              <XMarkIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="h-0 flex-1 overflow-y-auto pb-4 p-4">
                          <div className="bg-gray-100 px-4 flex-1 rounded-lg flex items-center">
                            <MagnifyingGlassIcon className="text-gray-500 h-6 w-6" />
                            <input
                              type="text"
                              placeholder="Search"
                              className="bg-transparent ml-2 flex-1 outline-none border-none"
                            />
                          </div>
                          <div className="flex items-center border-2 p-2 mt-2 w-full rounded-xl space-x-2">
                            <h3 className="text-black text-sm flex-1">ENG</h3>
                            <ChevronDownIcon className="text-black h-4 w-4" />
                          </div>
                          <div className="flex flex-col mt-2">
                            <div className="flex mb-2 justify-between">
                              <div className="border-2 p-2 w-max rounded-xl">
                                <img src={Bag} className="h-5 w-5" alt="" />
                              </div>
                              {isLogin ? (
                                <div className="border-2 p-2 w-max rounded-xl bg-white px-4">
                                  <h3 className="text-black text-sm">
                                    Sign In/Sign Up
                                  </h3>
                                </div>
                              ) : (
                                <Link to="/account">
                                  <img
                                    src={IlAvatar}
                                    className="h-9 w-9 rounded-full"
                                    alt=""
                                  />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                    <div
                      className="w-14 flex-shrink-0"
                      aria-hidden="true"
                    ></div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </div>
        </div>
      ) : undefined}
      {type === "global" ? (
        <div
          className={
            color ? "bg-white w-full z-10 relative" : "z-10 mt-4 relative"
          }
        >
          <div
            className={
              color
                ? "container mx-auto bg-white p-2 px-4 relative"
                : "container mx-auto bg-white p-2 px-4 rounded-full bg-opacity-25 relative"
            }
          >
            <div className="flex items-center space-x-4 lg:space-x-12 justify-between">
              <Link to="/main">
                <img src={Logo} alt="fast-food" className="h-7 lg:h-8" />
              </Link>
              {/* burger menu */}
              <div className="sticky top-0 z-10 md:hidden">
                <button
                  type="button"
                  className=" inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon
                    className={
                      color ? "h-8 w-8 text-gray-600" : "h-8 w-8 text-white"
                    }
                    aria-hidden="true"
                  />
                </button>
              </div>
              {/* sidebar */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-40 md:hidden"
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-300"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                              type="button"
                              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close sidebar</span>
                              <XMarkIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="h-0 flex-1 overflow-y-auto pb-4 p-4">
                          <div className="bg-gray-100 px-4 flex-1 rounded-lg flex items-center">
                            <MagnifyingGlassIcon className="text-gray-500 h-6 w-6" />
                            <input
                              type="text"
                              placeholder="Search"
                              className="bg-transparent ml-2 flex-1 outline-none border-none"
                            />
                          </div>
                          <div className="flex items-center border-2 p-2 mt-2 w-full rounded-xl space-x-2">
                            <h3 className="text-black text-sm flex-1">ENG</h3>
                            <ChevronDownIcon className="text-black h-4 w-4" />
                          </div>
                          <div className="flex flex-col mt-2">
                            <div className="flex mb-2 justify-between">
                              <div className="border-2 p-2 w-max rounded-xl">
                                <img src={Bag} className="h-5 w-5" alt="" />
                              </div>
                              {isLogin ? (
                                <div className="border-2 p-2 w-max rounded-xl bg-white px-4">
                                  <h3 className="text-black text-sm">
                                    Sign In/Sign Up
                                  </h3>
                                </div>
                              ) : (
                                <Link to="/account">
                                  <img
                                    src={IlAvatar}
                                    className="h-9 w-9 rounded-full"
                                    alt=""
                                  />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                    <div className="w-14 flex-shrink-0" aria-hidden="true">
                      {/* Force sidebar to shrink to fit close icon */}
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
              <div className="w-full hidden lg:inline-flex space-x-4 lg:space-x-12">
                <div className="bg-gray-100 flex-1 px-4 rounded-lg flex items-center">
                  <MagnifyingGlassIcon className="text-gray-500 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent ml-2 flex-1 outline-none border-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Link to="/bag">
                    <div className="p-2 w-max rounded-xl bg-white">
                      <img src={Bag} className="h-5 w-5" alt="" />
                    </div>
                  </Link>
                  {isLogin ? (
                    <div className="p-2 w-max rounded-xl bg-white px-4">
                      <h3 className="text-black text-sm">Sign In/Sign Up</h3>
                    </div>
                  ) : (
                    <Link to="/account">
                      <img
                        src={IlAvatar}
                        className="h-9 w-9 rounded-full"
                        alt=""
                      />
                    </Link>
                  )}
                  <div
                    onClick={handleLanguage}
                    className="flex items-center p-2 w-max rounded-xl bg-white space-x-2 cursor-pointer"
                  >
                    <h3 className="text-black text-sm">ENG</h3>
                    <ChevronDownIcon className="text-black h-4 w-4" />
                  </div>
                </div>
              </div>
              {language && (
                <div
                  className="absolute top-14 right-2 z-20 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="p-2 px-4" role="none">
                    <div className="flex flex-col space-y-2">
                      <a className="text-sm">Indonesia</a>
                      <a className="text-sm">English</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Navbar;
