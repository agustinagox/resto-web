import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./search-deliver-style.css";

const SearchDeliver = () => {
  return (
    <div className="wrap">
      <div className="container-search">
        <MapPinIcon className="icon-marker" />
        <h6 className="text-black text-lg">Deliver to</h6>
      </div>
    </div>
  );
};

export default SearchDeliver;
