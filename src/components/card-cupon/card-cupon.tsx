import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  price: string;
  desc: string;
  code: string;
};

const CardCupon = ({ price, desc, code }: Props) => {
  return (
    <div className="flex flex-col w-96">
      <h3 className="text-sm font-bold text-black">Discount up to ${price}</h3>
      <p className="text-gray-600 text-[9px] w-44 mt-1">{desc}</p>
      <div className="flex items-center bg-gray-300 p-1 px-2 mt-2">
        <h5 className="flex-1 text-xs text-black">
          Promo Code: <span className="text-[#1BB66E] font-bold">{code}</span>
        </h5>
        <button>
          <DocumentDuplicateIcon className="h-5 text-blue-700" />
        </button>
      </div>
    </div>
  );
};

export default CardCupon;
