import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ilBag } from "../../assets/illustrations";
import CardBag from "../../components/card-bag/card-bag";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { bag } from "../../store/bag";

const Bag = () => {
  const [bagEmpty, setBagEmpty] = useState(false);

  return (
    <div className="bg-gray-100">
      <Navbar type="signin" />
      <div className="relative mt-4 bg-white pb-6 mb-4">
        {/* breadcrumbs */}
        <nav className="container mx-auto py-4 px-4">
          <ol className="flex items-center">
            <li>
              <a href="" className="flex items-center">
                <span className="text-gray-500">Home</span>
                <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
              </a>
            </li>
            <li>
              <a href="" className="flex items-center">
                <span className="text-blue-700 font-bold">Bag</span>
              </a>
            </li>
          </ol>
          <h1 className="text-2xl mt-4 text-black font-bold">Bag</h1>
        </nav>
        <div className="mt-4 container mx-auto px-4">
          {bagEmpty ? (
            <div className="flex flex-col">
              <img src={ilBag} className="lg:h-96 mx-auto" alt="empty-bag" />
              <button className="mx-auto bg-blue-700 text-white w-96 py-2 rounded-xl mt-6 text-sm lg:text-lg">
                Order Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1">
              {bag.map((item) => (
                <CardBag
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  exclude={item.exclude}
                  condiment={item.condiment}
                  seasoning={item.seasoning}
                  extra={item.extra}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative container mx-auto mt-4 p-4 bg-white mb-4 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-black">Total: $90</h1>
          <button className="w-32 lg:w-64 py-2 bg-blue-700 rounded-xl text-white lg:text-xl">
            Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bag;
