import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import CardTnc from "../../components/card-tnc/card-tnc";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { tnc } from "../../store/tnc";
import {Link} from 'react-router-dom'

const TermCondition = () => {
  return (
    <div className="bg-gray-100">
      <Navbar type="signin" />
      <div className="relative mt-4 bg-white pb-6 mb-4">
        {/* breadcrumbs */}
        <nav className="container mx-auto py-4 px-4">
          <ol className="flex items-center">
            <li>
              <Link to="/main">
                <a href="" className="flex items-center">
                  <span className="text-gray-500">Home</span>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <a href="" className="flex items-center">
                  <span className="text-gray-500">Account</span>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
                </a>
              </Link>
            </li>
            <li>
              <a href="" className="flex items-center">
                <span className="text-blue-700 font-bold">TnC</span>
              </a>
            </li>
          </ol>
        </nav>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-black font-bold">Term and Condition</h1>
          <div className="mt-8 flex flex-col space-y-4">
            {tnc.map((item) => (
              <CardTnc
                name={item.name}
                desc={item.desc}
                desc2={item.desc2}
                desc3={item.desc3}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermCondition;
