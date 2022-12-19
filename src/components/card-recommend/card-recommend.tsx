import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  image: string;
  name: string;
  rating: string;
  discount: string;
  txtDiscount: string;
  desc: string;
  price: string;
  onClick: () => void;
};

const CardRecommend = ({
  image,
  name,
  rating,
  discount,
  txtDiscount,
  desc,
  price,
  onClick,
}: Props) => {
  return (
    <div className="flex rounded-xl shadow-lg mr-3" onClick={onClick}>
      <div>
        <img src={image} className="w-96 object-contain h-full" alt="" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="lg:text-lg font-extrabold">{name}</h3>
          <HeartIcon className="h-6 text-gray-400" />
        </div>
        <div className="mt-3 flex items-center">
          <div className="flex items-center mr-4 bg-blue-700 w-max rounded-md px-2 py-1 space-x-2">
            <StarIcon className="h-5 text-white" />
            <p className="text-sm font-extrabold text-white">{rating}</p>
          </div>
          <div className="border-l-[3px] px-4">
            <p className="text-black text-sm font-medium">Vouchers</p>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <h3 className="flex items-center font-extrabold text-sm text-black">
            {price}{" "}
            <p className="line-through text-xs text-gray-500 px-4">
              ${discount}
            </p>{" "}
          </h3>
          <div className="bg-[#9FE0C2] py-1 px-2 rounded-md">
            <h5 className="text-white text-sm">Discount {txtDiscount}%</h5>
          </div>
        </div>
        <p className="line-clamp-2 text-xs mt-2 text-gray-600">{desc}</p>
        <button className="bg-blue-700 w-full py-2 text-sm font-semibold text-white rounded-md mt-6">
          Add
        </button>
      </div>
    </div>
  );
};

export default CardRecommend;
