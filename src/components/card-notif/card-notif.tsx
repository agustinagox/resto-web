import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  name: string;
  time: string;
};

const CardNotif = ({ name, time }: Props) => {
  return (
    <div className="flex items-start border-2 rounded-xl py-2 px-4 lg:px-8">
      <div className="flex flex-col flex-1">
        <h1 className="text-black font-bold">{name}</h1>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <button>
        <XCircleIcon className="text-gray-400 h-5" />
      </button>
    </div>
  );
};

export default CardNotif;
