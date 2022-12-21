import React, { useState, Fragment } from "react";
import {
  BannerFood,
  IlAndroid,
  Ilappstore,
  IlRider,
  Menu3,
} from "../../assets/illustrations";
import Navbar from "../../components/navbar/navbar";
import {
  ChevronRightIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import CardCategory from "../../components/card-category/card-category";
import CardPromo from "../../components/card-promo/card-promo";
import { promo } from "../../store/promo";
import CardFood from "../../components/card-food/card-food";
import { recommend } from "../../store/recommend";
import { category } from "../../store/category";
import Faq from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

const Main = () => {
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
    <>
      <Navbar type="global" />
      <div className="h-96 w-full absolute -z-20 top-0">
        <img src={BannerFood} alt="" />
      </div>
      {/* search food */}
      <div className="relative px-4">
        <div className="bg-white relative lg:w-max p-4 pb-7 px-8 rounded-xl mx-auto top-10 lg:top-96 shadow-xl">
          <h1 className="text-center text-lg lg:text-xl mb-4 text-black font-semibold">
            Ready for food delivery? Type an address
          </h1>
          <div className="flex items-center border-[0.8px] border-black px-4 py-1 rounded-xl">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <input
              type="text"
              className="flex-1 border-0 h-max"
              placeholder="Deliver to?"
            />
          </div>
          <Link to="/allcategory">
            {" "}
            <button className="text-white bg-blue-500 rounded-xl font-medium text-lg w-full p-3 mt-4">
              Search
            </button>
          </Link>
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
                              <div key={item.id} className="flex items-center">
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
                              <div key={item.id} className="flex items-center">
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
                          <h3 className="text-black font-bold flex-1">Extra</h3>
                          <div className="space-y-1 mt-4">
                            {extra.map((item) => (
                              <div key={item.id} className="flex items-center">
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
                            <Link to="/bag" className="w-full">
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
      {/* category */}
      <div className="mt-24 lg:mt-[30rem] container mx-auto w-full">
        <h3 className="text-xl lg:text-3xl font-semibold text-center">
          Menu By Category
        </h3>
        <div className="flex scrollbar-thin space-x-4 w-full mt-8 pl-4 lg:pl-0">
          {category.map((item) => (
            <Link to="/allcategory">
              <CardCategory image={item.img} name={item.name} />
            </Link>
          ))}
        </div>
      </div>
      {/* promo week */}
      <div className="mt-24 container mx-auto px-4">
        <h3 className="text-xl lg:text-3xl font-semibold">Promo of the week</h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 space-y-4 lg:space-x-4 lg:space-y-0 mt-8">
          {promo.map((item) => (
            <Link to="/promo">
              <CardPromo
                key={item.id}
                image={item.img}
                price={item.price}
                name={item.name}
                desc={item.desc}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* recommend */}
      <div className="mt-24 container mx-auto px-4">
        <h3 className="text-xl lg:text-3xl font-semibold">Recommendation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
          {recommend.map((item) => (
            <CardFood
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
        <Link to="/recommend">
          <button className="border-2 border-blue-700 py-2 w-full mt-8 lg:mt-14 text-blue-700 text-lg font-semibold rounded-xl hover:bg-blue-700 hover:text-white">
            See more
          </button>
        </Link>
      </div>
      {/* banner blue */}
      <div className="bg-blue-700 mt-14 px-4 lg:px-0 h-24 lg:h-52">
        <div className="flex relative container mx-auto items-center ">
          <p className="text-xl lg:text-5xl mt-2 lg:mt-12 font-extralight text-white">
            Fast Delivery, Fastfud
          </p>
          <img
            src={IlRider}
            className="h-36 lg:h-72 absolute right-0 -top-5"
            alt="ilustraion"
          />
        </div>
      </div>
      {/* faq */}
      <Faq />
      {/* get application */}
      <div className="relative bg-[#1BB66E] mt-14 mb-24">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between ">
            <div>
              <h1 className="text-xl lg:text-5xl mt-2 lg:mt-12 font-extrabold text-white max-w-xl">
                Download Our App and Get Special Offer for New User
              </h1>
              <p className="mt-4 text-white text-sm max-w-lg">
                Enim accusantium aspernatur adipisci cumque libero fuga sint!
                Vero earum quam architecto obcaecati. Quis aut dolorum
                excepturi, reiciendis minima deserunt debitis mollitia?
              </p>
              <img
                src={Ilappstore}
                className="w-72 -ml-2 mt-4"
                alt="app-store"
              />
            </div>
            <div>
              <img
                src={IlAndroid}
                className="lg:absolute lg:-top-10 h-96 mx-auto lg:h-[30rem]"
                alt="ilustraion"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
