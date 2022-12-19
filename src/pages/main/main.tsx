import React from "react";
import {
  BannerFood,
  IlAndroid,
  Ilappstore,
  IlRider,
} from "../../assets/illustrations";
import Navbar from "../../components/navbar/navbar";
import { ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/solid";
import CardCategory from "../../components/card-category/card-category";
import CardPromo from "../../components/card-promo/card-promo";
import { promo } from "../../store/promo";
import CardRecommend from "../../components/card-recommend/card-recommend";
import { recommend } from "../../store/recommend";
import { category } from "../../store/category";
import Faq from "../../components/faq/faq";
import Footer from "../../components/footer/footer";

const Main = () => {
  const next = () => {};
  return (
    <>
      <Navbar type="global" />
      <div className="h-96 w-full absolute -z-20 top-0">
        <img src={BannerFood} alt="" />
      </div>
      {/* search food */}
      <div className="relative px-4">
        <div className="bg-white relative lg:w-max p-4 pb-7 px-8 rounded-xl mx-auto top-10 lg:top-96 shadow-xl">
          <h1 className="text-xl mb-4 text-black font-semibold">
            Ready for food delivery? Type an address
          </h1>
          <div className="flex space-x-3 border-[0.8px] border-black p-3 rounded-xl">
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <h6 className="text-black text-lg">Deliver to</h6>
          </div>
          <button className="text-white bg-blue-500 rounded-xl font-medium text-lg w-full p-3 mt-4">
            Search
          </button>
        </div>
      </div>
      {/* category */}
      <div className="mt-24 lg:mt-[30rem] container mx-auto w-full">
        <h3 className="text-xl lg:text-3xl font-semibold text-center">
          Menu By Category
        </h3>
        <div className="flex scrollbar-thin space-x-4 w-full mt-8 pl-4 lg:pl-0">
          {category.map((item) => (
            <CardCategory image={item.img} name={item.name} />
          ))}
        </div>
      </div>
      {/* promo week */}
      <div className="mt-24 container mx-auto px-4">
        <h3 className="text-xl lg:text-3xl font-semibold">Promo of the week</h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 space-y-4 lg:space-x-4 lg:space-y-0 mt-8">
          {promo.map((item) => (
            <CardPromo
              key={item.id}
              image={item.img}
              price={item.price}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      {/* recommend */}
      <div className="mt-24 container mx-auto px-4">
        <h3 className="text-xl lg:text-3xl font-semibold">Recommendation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
          {recommend.map((item) => (
            <CardRecommend
              onClick={next}
              key={item.id}
              image={item.img}
              name={item.name}
              rating={item.ratting}
              price={item.price}
              discount={item.discount}
              txtDiscount={item.Textdiscount}
              desc={item.desc}
            />
          ))}
        </div>
        <button className="border-2 border-blue-700 py-2 w-full mt-8 lg:mt-14 text-blue-700 text-lg font-semibold rounded-xl hover:bg-blue-700 hover:text-white">
          See more
        </button>
      </div>
      {/* banner blue */}
      <div className="bg-blue-700 mt-14 px-4 lg:px-0 h-24 lg:h-52">
        <div className="flex relative container mx-auto items-center ">
          <p className="text-xl lg:text-5xl mt-2 lg:mt-12 font-extralight text-white">
            Fast Delivery, Fastfud
          </p>
          <img
            src={IlRider}
            className="h-36 lg:h-72 absolute right-0 -top-5"
            alt="ilustraion"
          />
        </div>
      </div>
      {/* faq */}
      <Faq />
      {/* get application */}
      <div className="relative bg-[#1BB66E] mt-14 mb-24">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between ">
            <div>
              <h1 className="text-xl lg:text-5xl mt-2 lg:mt-12 font-extrabold text-white max-w-xl">
                Download Our App and Get Special Offer for New User
              </h1>
              <p className="mt-4 text-white text-sm max-w-lg">
                Enim accusantium aspernatur adipisci cumque libero fuga sint!
                Vero earum quam architecto obcaecati. Quis aut dolorum
                excepturi, reiciendis minima deserunt debitis mollitia?
              </p>
              <img
                src={Ilappstore}
                className="w-72 -ml-2 mt-4"
                alt="app-store"
              />
            </div>
            <div>
              <img
                src={IlAndroid}
                className="lg:absolute lg:-top-10 h-96 mx-auto lg:h-[30rem]"
                alt="ilustraion"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
