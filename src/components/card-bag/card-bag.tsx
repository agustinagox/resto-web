import React from "react";
import { Menu4 } from "../../assets/illustrations";

type Props = {
  id: string;
  img: string;
  name: string;
  price: string;
  amount: string;
  exclude: string;
  condiment: string;
  seasoning: string;
  extra: string;
};

const CardBag = ({
  id,
  name,
  img,
  price,
  amount,
  exclude,
  condiment,
  seasoning,
  extra,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center cursor-pointer py-6 px-0 lg:px-4 hover:bg-blue-50 rounded-xl">
      <input
        id={id}
        name="notification-method"
        type="checkbox"
        className="h-6 w-6 m-4 border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="flex flex-col lg:flex-row lg:items-center mx-4 lg:mx-8 w-full lg:w-max">
        <img src={img} className="w-24 lg:h-full" alt="food-img" />
        <div className="lg:ml-5 lg:w-80">
          <div className="flex items-center mb-2">
            <h3 className="text-black font-bold text-lg lg:flex-1">{name}</h3>
            <h3 className="text-black font-bold text-lg ml-2">${price}</h3>
            <h3 className="text-black font-bold text-lg ml-2 lg:hidden">
              X{amount}
            </h3>
          </div>
          <div className="flex items-end lg:flex-1 lg:w-full justify-between">
            <div className="felx-1">
              <p className="text-sm text-black font-light">
                Exclude: {exclude}
              </p>
              <p className="text-sm text-black font-light">
                Condiment: {condiment}
              </p>
              <p className="text-sm text-black font-light">
                Seasoning: {seasoning}
              </p>
              <p className="text-sm text-black font-light">
                Toping/Extra: {extra}
              </p>
            </div>
            <h3 className="text-black font-bold text-lg hidden lg:inline">
              X{amount}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <button className="border-2 border-blue-700 m-2 px-4 py-2 text-sm rounded-lg bg-blue-700 text-white">
          Edit
        </button>
        <button className="border-2 border-blue-700 m-2 px-4 py-2 text-sm rounded-lg">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardBag;
