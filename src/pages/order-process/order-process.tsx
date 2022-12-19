import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import OrderStep from "../../components/order-step/order-step";

const OrderProcess = () => {
  return (
    <div className="page">
      <Navbar type="signin" />
      <div className="relative my-4 bg-white">
        <div className="container mx-auto py-4">
          <h1 className="text-xl lg:text-4xl font-semibold text-center">
            Order Process
          </h1>
          <h3 className="bg-blue-600 py-2 px-4 rounded-full lg:text-xl mt-4 w-max text-center mx-auto text-white font-bold">
            Order ID #44725
          </h3>
          <p className="text-center text-gray-500 my-4">
            Your order will arrive at 30 minutes (2.5 km)
          </p>
          <OrderStep status="recieve" />

          <div className="bg-[#FDEC97] py-8 px-4 m-4 mt-12 rounded-xl">
            <h3 className="text-center lg:text-xl font-bold">
              There is problem in your order!
            </h3>
            <p className="text-center lg:text-lg mt-4">
              The order may take longer than usual due to rush hour
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderProcess;
