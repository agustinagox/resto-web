import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Menu7 } from "../../assets/illustrations";

type Props = {
  img: string;
  name: string;
  desc: string;
};

const CardOrder = ({ img, name, desc }: Props) => {
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
    <div className="flex items-center space-x-8">
      <img src={img} className="h-14 w-14 lg:w-32 lg:h-32 rounded-xl" alt="" />
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <h1 className="font-extrabold lg:text-xl">{name}</h1>
          <div className="ml-auto">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={qtyPlus}
                  className="border-2 justify-center items-center p-1 rounded-full"
                >
                  <PlusIcon className="h-5 w-5 text-blue-700" />
                </button>
                <p className="text-lg font-bold text-black">{qty}</p>
                <button
                  onClick={qtyMinus}
                  className="border-2 justify-center items-center p-1 rounded-full"
                >
                  <MinusIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm line-clamp-2 mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CardOrder;
