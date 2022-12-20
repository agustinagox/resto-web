import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import CardNotif from "../../components/card-notif/card-notif";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { notif } from "../../store/notif";
import {Link} from 'react-router-dom'

const Notification = () => {
  return (
    <div className="bg-gray-100">
      <Navbar type="signin" />
      <div className="relative mt-4 bg-white pb-6 mb-4">
        {/* breadcrumbs */}
        <nav className="container mx-auto py-4 px-4">
          <ol className="flex items-center">
            <li>
              <Link to='/main'>
                <a href="" className="flex items-center">
                  <span className="text-gray-500">Home</span>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
                </a>
              </Link>
            </li>
            <li>
              <Link to='/account'>
              <a href="" className="flex items-center">
                <span className="text-gray-500">Account</span>
                <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
              </a>
              </Link>
            </li>
            <li>
              <a href="" className="flex items-center">
                <span className="text-blue-700 font-bold">Notification</span>
              </a>
            </li>
          </ol>
        </nav>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-black font-bold">Notification</h1>
          <div className="mt-8 flex flex-col space-y-4">
            {notif.map((item) => (
              <CardNotif name={item.name} time={item.time} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
