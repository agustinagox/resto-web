import React from "react";
import { AppStore, googlePlay, IlAndroid } from "../../assets/illustrations";

const Footer = () => {
  return (
    <div className="relative pt-8 bg-white">
      <div className="container mx-auto px-4 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex space-x-12">
            <div>
              <h3 className="text-black font-bold text-lg">Product</h3>
              <ul>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Pizza
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Burger
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Combo
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Fries
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Beverages
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Dessert
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-black font-bold text-lg">Service</h3>
              <ul>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Delivery
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Order Process
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Notification
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Term and Service
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-blue-700 text-lg">
                    Help and Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:ml-auto mt-12 lg:mt-0">
            <a href="#">
              <img src={AppStore} className="w-44" alt="" />
            </a>
            <a href="#">
              <img src={googlePlay} className="w-44" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#292929] mt-6 py-4 px-4">
        <div className="container mx-auto">
          <h4 className="text-white font-bold">FastFud</h4>
          <p className="mt-2 text-white font-extralight text-sm">
            © 2022 FastFud. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
