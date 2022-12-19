import React from "react";

type Props = {
  id: string;
  name: string;
  desc: string;
  price: string;
  status: string;
};

const CardHistory = ({ id, name, desc, price, status }: Props) => {
  return (
    <div className="relative flex w-full py-6 border-b-2">
      <div className="flex-1">
        <h1 className="font-semibold text-lg">Order Id #{id}</h1>
        <div className="flex mt-2">
          <p className="text-sm text-gray-600">Order:</p>
          <p className="text-sm text-gray-600 font-extralight ml-4">{name}</p>
        </div>
        <div className="flex mt-1">
          <p className="text-sm text-gray-600">Notes:</p>
          <p className="text-sm text-gray-600 font-extralight ml-4">{desc}</p>
        </div>
        <div className="flex mt-1">
          <p className="text-sm text-gray-600">Totals:</p>
          <p className="text-sm text-gray-600 font-extralight ml-4">${price}</p>
        </div>
      </div>
      {status === "Ongoing" ? (
        <h3 className="absolute right-0 text-sm bg-blue-600 h-max px-4 py-1 text-white rounded-lg">
          Ongoing
        </h3>
      ) : undefined}
      {status === "Cancelled" ? (
        <h3 className="absolute right-0 text-sm bg-[#FF6373] h-max px-4 py-1 text-white rounded-lg">
          Cancelled
        </h3>
      ) : undefined}
      {status === "Complete" ? (
        <h3 className="absolute right-0 text-sm bg-[#1BB66E] h-max px-4 py-1 text-white rounded-lg">
          Complete
        </h3>
      ) : undefined}
    </div>
  );
};

export default CardHistory;
