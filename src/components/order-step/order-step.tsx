import React from "react";
import {
  ilcookActive,
  ilcookInactive,
  ildeliverActive,
  ildeliverInactive,
  ilrecieveActive,
  ilrecieveInactive,
} from "../../assets/illustrations";

type Props = {
  status: string;
};

const OrderStep = ({ status }: Props) => {
  return (
    <>
      {status === "" ? (
        <div className="flex space-x-2 justify-between px-4">
          <div className="flex flex-col">
            <img src={ilcookInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              We Cook Your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
          </div>
          <div className="flex flex-col">
            <img src={ildeliverInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Deliver your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
          </div>
          <div className="flex flex-col">
            <img src={ilrecieveInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Recieve your Order
            </h1>
          </div>
        </div>
      ) : undefined}
      {status === "cook" ? (
        <div className="flex space-x-2 justify-between px-4">
          <div className="flex flex-col">
            <img src={ilcookActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              We Cook Your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
          </div>
          <div className="flex flex-col">
            <img src={ildeliverInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs text-gray-500 lg:text-xl mt-2 text-center font-semibold">
              Deliver your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#BABABA]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#BABABA]" />
          </div>
          <div className="flex flex-col">
            <img src={ilrecieveInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Recieve your Order
            </h1>
          </div>
        </div>
      ) : undefined}
      {status === "deliver" ? (
        <div className="flex space-x-2 justify-between px-4">
          <div className="flex flex-col">
            <img src={ilcookActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              We Cook Your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
          </div>
          <div className="flex flex-col">
            <img src={ildeliverActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Deliver your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
          </div>
          <div className="flex flex-col">
            <img src={ilrecieveInactive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Recieve your Order
            </h1>
          </div>
        </div>
      ) : undefined}
      {status === "recieve" ? (
        <div className="flex space-x-2 justify-between px-4">
          <div className="flex flex-col">
            <img src={ilcookActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              We Cook Your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
          </div>
          <div className="flex flex-col">
            <img src={ildeliverActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Deliver your Order
            </h1>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-4 relative -top-5">
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-5 lg:w-12 lg:h-4 rounded-full bg-[#7DD951]" />
            <div className="h-2 w-3 lg:w-8 lg:h-4 rounded-full bg-[#7DD951]" />
          </div>
          <div className="flex flex-col">
            <img src={ilrecieveActive} className="h-20 lg:h-72" alt="" />
            <h1 className="text-xs lg:text-xl mt-2 text-center font-semibold">
              Recieve your Order
            </h1>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default OrderStep;
