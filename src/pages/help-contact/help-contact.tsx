import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Help from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const HelpContact = () => {
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
                <span className="text-gray-500">Account</span>
                <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
              </a>
            </li>
            <li>
              <a href="" className="flex items-center">
                <span className="text-blue-700 font-bold">
                  Help and Contact
                </span>
              </a>
            </li>
          </ol>
        </nav>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-black font-bold">Help and Contact</h1>
          <Help />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpContact;
