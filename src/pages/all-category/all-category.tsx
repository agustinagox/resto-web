import {
  ChevronRightIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState, Fragment } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { recommend } from "../../store/recommend";
import CardRecommend from "../../components/card-food/card-food";
import { Dialog, Transition } from "@headlessui/react";
import { Menu3 } from "../../assets/illustrations";
import "./index.css";
import {Link} from 'react-router-dom'

const AllCategory = () => {
  const next = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const sugarLvl = [
    { id: "normal", title: "Normal" },
    { id: "less sugar", title: "Less Sugar" },
  ];

  const exclude = [
    { id: "mint", title: "Mint" },
    { id: "lemon slice", title: "Lemon slice" },
  ];

  const extra = [
    { id: "ice cubes", title: "Ice cubes" },
    { id: "mint", title: "Mint" },
    { id: "lime juice", title: "Lime juice" },
  ];

  const [qty, setQty] = useState(1);

  const qtyPlus = () => {
    setQty(qty + 1);
  };

  const qtyMinus = () => {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      setQty(0);
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar type="signin" />
      <div className="relative bg-white py-4">
        <div className="px-4 lg:px-0 container mx-auto">
          <div className="flex space-x-3 border-[0.8px] border-black p-2 px-4 rounded-xl">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <h6 className="text-black text-lg">Deliver to</h6>
          </div>
        </div>
        {/* side right */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-gray-200 shadow-xl">
                        <div className="bg-white">
                          <div className="flex items-start justify-between border-b-2 pb-4 py-6 mx-4 sm:mx-6">
                            <Dialog.Title className="text-lg font-bold text-gray-900">
                              Order Menu
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-white text-blue-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative flex-1">
                          {/* Replace with your content */}
                          <div className="bg-white flex items-center px-4 sm:px-6">
                            <img src={Menu3} alt="food-img" className="h-36" />
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-black font-bold flex-1">
                                  Ice Cream Nodel
                                </h3>
                                <p className="text-black font-bold">$14</p>
                              </div>
                              <p className="mt-2 text-xs text-gray-600">
                                A non-alcoholic sparkling lemonade with fresh
                                taste of mint and lime. Made with juice from
                                Sicilian lemons and limes.
                              </p>
                            </div>
                          </div>
                          <div className="bg-white mt-3 py-6 items-center px-4 sm:px-6">
                            <h3 className="text-black font-bold flex-1">
                              Sugar Level
                            </h3>
                            <div className="space-y-1 mt-4">
                              {sugarLvl.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={item.id}
                                    name="notification-method"
                                    type="radio"
                                    defaultChecked={item.id === "normal"}
                                    className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-3 block font-medium text-black"
                                  >
                                    {item.title}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white mt-3 py-6 items-center px-4 sm:px-6">
                            <h3 className="text-black font-bold flex-1">
                              Exclude
                            </h3>
                            <div className="space-y-1 mt-4">
                              {exclude.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={item.id}
                                    name="notification-method"
                                    type="checkbox"
                                    defaultChecked={item.id === "mint"}
                                    className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-3 block font-medium text-black"
                                  >
                                    {item.title}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white mt-3 py-6 items-center px-4 sm:px-6">
                            <h3 className="text-black font-bold flex-1">
                              Extra
                            </h3>
                            <div className="space-y-1 mt-4">
                              {extra.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={item.id}
                                    name="notification-method"
                                    type="checkbox"
                                    defaultChecked={item.id === "ice cubes"}
                                    className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-3 block font-medium text-black"
                                  >
                                    {item.title}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white mt-3 py-6 items-center px-4 sm:px-6">
                            <h3 className="text-black font-bold flex-1">
                              Notes (optional)
                            </h3>
                            <div className="flex mt-4">
                              <input
                                type="text"
                                placeholder="Additional notes"
                                className="w-full text-lg text-black rounded-lg border-gray-400"
                              />
                            </div>
                          </div>
                          <div className="bg-white mt-3 py-6 items-center px-4 sm:px-6">
                            <div className="flex space-x-4 mt-4">
                              <div className="flex items-center space-x-4">
                                <button
                                  onClick={qtyPlus}
                                  className="border-2 justify-center items-center p-1 rounded-full"
                                >
                                  <PlusIcon className="h-5 w-5 text-blue-700" />
                                </button>
                                <p className="text-lg font-bold text-black">
                                  {qty}
                                </p>
                                <button
                                  onClick={qtyMinus}
                                  className="border-2 justify-center items-center p-1 rounded-full"
                                >
                                  <MinusIcon className="h-5 w-5 text-blue-700" />
                                </button>
                              </div>
                              <Link to='/bag' className="w-full">
                                <button className="bg-blue-700 w-full py-2 text-white rounded-xl">
                                  Add to Bag - $15
                                </button>
                              </Link>
                            </div>
                          </div>
                          {/* /End replace */}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* tabs */}
        <div className="wrap-tab">
          <div className="container-tab">
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="tab-active">Combo</h3>
            </div>
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="">Pizza</h3>
            </div>
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="">Burger</h3>
            </div>
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="">Fries</h3>
            </div>
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="">Beverages</h3>
            </div>
            <div className="text-gray-500 font-medium px-8 lg:w-full">
              <h3 className="">Dessert</h3>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="wrap-content">
        <div className="container mx-auto w-full">
          {/* breadcrumbs */}
          <nav className="container mx-auto py-4">
            <ol className="flex items-center">
              <li>
                <a href="" className="flex items-center">
                  <span className="text-gray-500">Home</span>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="" className="flex items-center">
                  <span className="text-gray-500">menu</span>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="" className="flex items-center">
                  <span className="text-blue-700 font-bold">Combo</span>
                </a>
              </li>
            </ol>
          </nav>
          <h1 className="text-2xl text-black font-bold">Combo</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
            {recommend.map((item) => (
              <CardRecommend
                onClick={next}
                key={item.id}
                image={item.img}
                name={item.name}
                rating={item.ratting}
                price={item.price}
                discount={item.discount}
                txtDiscount={item.Textdiscount}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCategory;
