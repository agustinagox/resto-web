import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Faq = () => {
  return (
    <div className="mt-24 container mx-auto px-4">
      <h3 className="text-xl lg:text-3xl font-semibold">
        Frequently Asked Questions
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
        <div className="lg:p-12 lg:pl-0">
          <div>
            <ul>
              <li className="bg-blue-50 p-4 cursor-pointer">
                <a className="flex items-center">
                  <div className="h-6 w-6 bg-blue-700 rounded-full" />
                  <p className="flex-1 ml-4 text-sm">What is FastFu?</p>
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
                    How does the delivery work?
                  </p>
                  <ChevronRightIcon className="h-6 w-6" />
                </a>
              </li>
              <li className="p-4 cursor-pointer">
                <a className="flex items-center">
                  <div className="h-6 w-6 bg-blue-700 rounded-full" />
                  <p className="flex-1 ml-4 text-sm">
                    What happen if I do not show up to pick up the food?
                  </p>
                  <ChevronRightIcon className="h-6 w-6" />
                </a>
              </li>
              <li className="p-4 cursor-pointer">
                <a className="flex items-center">
                  <div className="h-6 w-6 bg-blue-700 rounded-full" />
                  <p className="flex-1 ml-4 text-sm">
                    Can I order for other people?
                  </p>
                  <ChevronRightIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FAFBFF] lg:p-12 mt-8 lg:mt-0">
          <ul>
            <li>
              <h3 className="text-black font-extrabold text-xl">
                What is FastFud?
              </h3>
              <p className="mt-8 text-sm text-black">
                We delivers piping-hot food, fresh and sweet beverages and
                dessert right to your front door. Kick off your shoes, relax,
                and let us bring it straight to you.
              </p>
              <p className="mt-8 text-sm text-black">
              Fastfud is food delivery service for especially for fastfood, snack and dessert. We offer high quality food and beverages, we also provide a dessert bar. 
              </p>
              <p className="mt-8 text-sm text-black">
              e deliver the best Pizza, Burger, Snack and Dessert that will delivered within 30 minutes after your order*.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
