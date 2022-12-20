import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Help = () => {
  return (
    <div className="mt-24 container mx-auto">
      <h3 className="text-xl lg:text-3xl font-semibold px-4">
        Frequently Asked Questions
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
        <div className="lg:p-12 lg:pl-0">
          <ul>
            <li className="bg-blue-50 p-4 cursor-pointer">
              <a className="flex items-center">
                <div className="h-6 w-6 bg-blue-700 rounded-full" />
                <p className="flex-1 ml-4 text-sm">
                  What is a Payment Gateway?
                </p>
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="p-4 cursor-pointer">
              <a className="flex items-center">
                <div className="h-6 w-6 bg-blue-700 rounded-full" />
                <p className="flex-1 ml-4 text-sm">
                  Do I need to pay to tax for every food?
                </p>
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="p-4 cursor-pointer">
              <a className="flex items-center">
                <div className="h-6 w-6 bg-blue-700 rounded-full" />
                <p className="flex-1 ml-4 text-sm">
                  How far I can customize order for my food?
                </p>
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="p-4 cursor-pointer">
              <a className="flex items-center">
                <div className="h-6 w-6 bg-blue-700 rounded-full" />
                <p className="flex-1 ml-4 text-sm">
                  What happen if I do not show up after choose pick up at store?
                </p>
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="p-4 cursor-pointer">
              <a className="flex items-center">
                <div className="h-6 w-6 bg-blue-700 rounded-full" />
                <p className="flex-1 ml-4 text-sm">
                  My account can get banned?
                </p>
                <ChevronRightIcon className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[#FAFBFF] lg:p-12 mt-8 lg:mt-0 px-4">
          <ul>
            <li>
              <h3 className="text-black font-extrabold text-xl">
                What is a Payment Gateway?
              </h3>
              <p className="mt-8 text-sm text-black">
                A payment gateway is an ecommerce service that processes online
                payments for online as well as offline businesses. Payment
                gateways help accept payments by transferring key information
                from their merchant websites to issuing banks, card associations
                and online wallet players.
              </p>
              <p className="mt-8 text-sm text-black">
                Payment gateways play a vital role in the online transaction
                process, which is the realisation of value, and hence are seen
                as an important pillar of ecommerce.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
