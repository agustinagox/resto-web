import React from "react";
import { category } from "../../store/category";

type Props = {
  name: string;
  image: string;
};

const CardCategory = ({ name, image }: Props) => {
  return (
    <a>
      <div className="border-2 border-gray-200 rounded-3xl w-32 lg:w-44 cursor-pointer overflow-hidden">
        <img
          src={image}
          className="lg:h-44 lg:w-full mx-auto"
          alt="img-category"
        />
      </div>
      <p className="text-xl text-black mt-2 text-center font-semibold">
        {name}
      </p>
    </a>
  );
};

export default CardCategory;
