import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ilhelp, ilhistory, ilnotif, ilterm } from "../../assets/illustrations";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const Account = () => {
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
                <span className="text-blue-700 font-bold">Account</span>
              </a>
            </li>
          </ol>
          <h1 className="text-2xl mt-4 text-black font-bold">Account</h1>
        </nav>

        <div className="relative container mx-auto pb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <a href="#" className="mx-auto mb-6">
              <div>
                <img src={ilnotif} className="h-24 mx-auto lg:h-44" alt="" />
              </div>
              <h3 className="text-black text-sm lg:text-lg mt-4 font-semibold text-center">
                Notification
              </h3>
            </a>
            <a href="#" className="mx-auto mb-6">
              <div>
                <img src={ilhistory} className="h-24 mx-auto lg:h-44" alt="" />
              </div>
              <h3 className="text-black text-sm lg:text-lg mt-4 font-semibold text-center">
                Order History
              </h3>
            </a>
            <a href="#" className="mx-auto mb-6">
              <div>
                <img src={ilterm} className="h-24 mx-auto lg:h-44" alt="" />
              </div>
              <h3 className="text-black text-sm lg:text-lg mt-4 font-semibold text-center">
                Term and Condition
              </h3>
            </a>
            <a href="#" className="mx-auto mb-6">
              <div>
                <img src={ilhelp} className="h-24 mx-auto lg:h-44" alt="" />
              </div>
              <h3 className="text-black text-sm lg:text-lg mt-4 font-semibold text-center">
                Help and Contact
              </h3>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
