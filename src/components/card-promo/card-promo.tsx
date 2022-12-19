import React from "react";

type Props = {
  image: string;
  name: string;
  desc: string;
  price: string;
};

const CardPromo = ({ image, name, desc, price }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg cursor-pointer">
      <div className="relative">
        <img src={image} alt="" className="h-48 w-full object-cover" />
        <div className="absolute top-6 bg-[#1BB66E] w-max px-4 py-1">
          <p className="text-white text-sm">Promo</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-black font-extrabold lg:text-xl">{name}</h3>
        <h5 className="text-black text-lg">Start from ${price}</h5>
        <p className="line-clamp-3 text-xs text-gray-400 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default CardPromo;
