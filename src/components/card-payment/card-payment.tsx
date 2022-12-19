import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Wallet } from "../../assets/icons";

const CardPayment = () => {
  return (
    <>
      <div className="py-4 border-t-2 border-gray-400">
        <div className="px-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-center text-sm">
                  <CheckCircleIcon className="text-[#7CD951] h-6" />
                </th>
                <th className="text-center text-sm font-light">Bank</th>
                <th className="text-center text-sm font-light">Card Number</th>
                <th className="text-center text-sm font-light">Card Owner</th>
                <th className="text-center text-sm font-light">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center text-sm">
                  <img src={Wallet} alt="" />
                </td>
                <td className="text-center text-sm font-bold">BCA</td>
                <td className="text-center text-sm font-bold">*******1234</td>
                <td className="text-center text-sm font-bold">FastFud</td>
                <td className="text-center text-sm font-bold">12/34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-4 border-t-2 border-gray-400">
        <div className="px-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-center text-sm">
                  <CheckCircleIcon className="text-[#7CD951] h-6" />
                </th>
                <th className="text-center text-sm font-light">Bank</th>
                <th className="text-center text-sm font-light">Card Number</th>
                <th className="text-center text-sm font-light">Card Owner</th>
                <th className="text-center text-sm font-light">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center text-sm">
                  <img src={Wallet} alt="" />
                </td>
                <td className="text-center text-sm font-bold">BCA</td>
                <td className="text-center text-sm font-bold">*******1234</td>
                <td className="text-center text-sm font-bold">FastFud</td>
                <td className="text-center text-sm font-bold">12/34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CardPayment;
