import React from "react";
import { Wallet } from "../../assets/icons";
import { masterCard, visa } from "../../assets/illustrations";

const AddPaymentCard = () => {
  return (
    <div className="flex flex-col bg-[#C7FAB0] rounded-xl mt-8 p-4 lg:p-6">
      <div className="flex items-center w-full">
        <h3 className="flex-1 text-black font-bold text-lg">Add new card</h3>
        <div className="flex items-center space-x-2">
          <img src={masterCard} className="h-8" alt="" />
          <img src={visa} className="h-8" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="flex flex-col">
          <h3 className="text-black font-medium">Card number</h3>
          <p className="text-[12px] lg:w-36 font-light mt-1">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <div className="bg-white px-2 py-1 rounded-lg flex items-center overflow-hidden h-max flex-1 mt-2 lg:mt-0">
          <img src={Wallet} alt="" />
          <input type="text" className="border-0 flex-1" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="flex flex-col">
          <h3 className="text-black font-medium">Card owner</h3>
          <p className="text-[9px] w-36 font-light mt-1">
            Enter the name on the card
          </p>
        </div>
        <div className="bg-white px-2 py-1 rounded-lg flex items-center overflow-hidden h-max flex-1 mt-2 lg:mt-0">
          <input type="text" className="border-0 flex-1" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="flex flex-col">
          <h3 className="text-black font-medium">Expiry date</h3>
          <p className="text-[9px] lg:w-36 font-light mt-1">
            Enter the expration date
          </p>
        </div>
        <div className="flex items-center w-full">
        <div className="flex flex-row items-center mt-2 flex-1">
          <div className="bg-white px-1 py-1 rounded-lg flex items-center overflow-hidden h-max w-14">
            <input type="text" className="border-0 w-full text-center" />
          </div>
          <h1 className="text-xl font-extrabold px-4">/</h1>
          <div className="bg-white px-1 py-1 rounded-lg flex items-center overflow-hidden h-max w-14">
            <input type="text" className="border-0 w-full text-center" />
          </div>
        </div>
        <div className="flex items-center lg:ml-auto space-x-4 mt-2">
          <div className="flex flex-col">
            <h1>CVV2</h1>
            <p className="text-xs font-light">Security code</p>
          </div>
          <div className="bg-white px-1 py-1 rounded-lg flex items-center overflow-hidden h-max w-14">
            <input type="text" className="border-0 w-full text-center" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentCard;
