import React from "react";

type Props = {
  name: string;
  desc: string;
  desc2: string;
  desc3: string;
};

const CardTnc = ({name, desc, desc2, desc3}: Props) => {
  return (
    <div className="flex flex-col lg:max-w-5xl">
      <h1 className="text-lg font-extrabold">{name}</h1>
      <p className="mt-6 text-sm">
        {desc}
      </p>
      <p className="mt-6 text-sm">
        {desc2}
      </p>
      <p className="mt-6 text-sm">
       {desc3}
      </p>
    </div>
  );
};

export default CardTnc;
