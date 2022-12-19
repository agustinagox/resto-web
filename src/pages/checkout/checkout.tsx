import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { largeRight, Wallet } from "../../assets/icons";
import {
  cupon,
  masterCard,
  payPal,
  unionPay,
  visa,
} from "../../assets/illustrations";
import AddPaymentCard from "../../components/add-payment-card/add-payment-card";
import CardCupon from "../../components/card-cupon/card-cupon";
import CardOrder from "../../components/card-order/order-card";
import CardPayment from "../../components/card-payment/card-payment";
import Navbar from "../../components/navbar/navbar";
import { cuponPromo } from "../../store/cupon-promo";
import { order } from "../../store/order";

const Checkout = () => {
  const [cardPayment, setCardPayment] = useState(false);
  const addCard = () => {
    setCardPayment(true);
  };

  return (
    <div className="bg-gray-100">
      <Navbar type="signin" />
      <div>
        <h1 className="mt-4 text-center text-black  font-semibold text-xl lg:text-3xl">
          Checkout
        </h1>
      </div>
      <div className="relative mt-4 container mx-auto bg-white px-4 pb-6 mb-4 p-4 lg:p-8 rounded-xl lg:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-64">
          <div className="">
            <h3 className="text-black font-bold text-xl">Deliver to</h3>
            <p className="text-sm text-black mt-2">(636) 257-2038302 </p>
            <p className="text-sm text-black">
              N Columbus StPacific, Missouri(MO) 63069{" "}
            </p>
          </div>
          <button className="border-2 border-blue-700 mt-4 lg:mt-0 lg:mx-auto w-max px-4 py-1 rounded-lg text-blue-600 ">
            Edit
          </button>
        </div>
      </div>
      <div className="relative mt-4 container mx-auto bg-white px-4 pb-6 mb-4 p-4 lg:p-8 rounded-xl lg:max-w-6xl">
        <div className="grid grid-cols-1 justify-center items-center lg:px-64">
          <h3 className="text-black font-bold text-xl">Payment Method</h3>
          <div className="flex items-center space-x-6 mt-12">
            <a href="#">
              <img src={unionPay} className="h-12" alt="" />
            </a>
            <a href="#">
              <img src={payPal} className="h-12" alt="" />
            </a>
            <a href="#">
              <img src={masterCard} className="h-12" alt="" />
            </a>
            <a href="#">
              <img src={visa} className="h-12" alt="" />
            </a>
          </div>
          {/* registered cards */}
          <div className="mt-8 border-2 border-gray-400 rounded-2xl">
            <div className="flex items-center space-x-4 px-4 py-4">
              <img src={Wallet} alt="" />
              <h1 className="font-bold text-lg lg:text-xl">Registered cards</h1>
            </div>
            <CardPayment />
          </div>
          <button
            onClick={addCard}
            className="border-2 border-blue-700 mt-8 flex items-center p-3 rounded-lg text-black font-bold"
          >
            <PlusCircleIcon className="h-6 w-6 mr-2 text-blue-600" />
            Add new card
          </button>
          {/* payment card add */}
          {cardPayment && (
            <div className="flex flex-col">
              <AddPaymentCard />
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center space-x-4">
                  <input
                    id=""
                    name="notification-method"
                    type="checkbox"
                    className="h-5 w-5 border-2 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <p className="text-black font-medium">Set us default</p>
                </div>
                <button className="text-blue-700 border-2 border-blue-700 rounded-lg w-40 lg:w-64 p-2">
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* redeem code */}
      <div className="relative mt-4 container mx-auto bg-white px-4 pb-6 mb-4 p-8 rounded-xl w-full lg:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-4">
          <div className="flex items-center space-x-2">
            <img src={cupon} className="h-16" alt="" />
            <h1 className="text-xl font-bold">Input Your Code</h1>
          </div>
          <div className="flex lg:ml-auto items-center space-x-4 mt-4 lg:mt-0">
            <input
              type="text"
              className="bg-gray-200 rounded-lg border-0 font-medium text-black"
              placeholder="Input Code"
            />
            <button className="bg-blue-700 rounded-lg py-2 w-24 lg:w-32 text-white">
              Claim
            </button>
          </div>
        </div>
      </div>
      {/* promo code */}
      <div className="relative mt-4 container mx-auto bg-white mb-4 p-4 lg:p-8 rounded-xl w-full lg:max-w-6xl">
        <div className="relative flex items-center">
          <div className="flex space-x-4 items-center lg:px-4 scrollbar-thin">
            {cuponPromo.map((item) => (
              <CardCupon price={item.price} desc={item.desc} code={item.code} />
            ))}
          </div>
          <button>
            <ChevronRightIcon className="h-12" />
          </button>
        </div>
      </div>
      {/* order summary */}
      <div className="relative mt-4 container mx-auto bg-white px-4 pb-6 mb-4 p-4 lg:p-8 rounded-xl lg:max-w-6xl">
        <div className="lg:px-64">
          <h1 className="text-xl font-bold">Order Summary</h1>
          <div className="flex flex-col space-y-8 mt-14">
            {order.map((item) => (
              <CardOrder img={item.img} name={item.name} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
      {/* checkout */}
      <div className="relative mt-4 bg-white px-4 p-8 w-full ">
        <div className="flex items-center justify-between container mx-auto">
          <h1 className="text-black font-extrabold text-lg lg:text-xl">
            Total: $90
          </h1>
          <button className="bg-blue-700 rounded-lg text-md lg:text-xl text-white p-2 w-36 lg:w-64">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
