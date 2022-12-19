import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Facebook, Google } from "../../assets/illustrations";
import Navbar from "../../components/navbar/navbar";

const SignInUp = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const stepSignIn = () => {
    setSignIn(true);
    setSignUp(false);
  };

  const stepSignUp = () => {
    setSignIn(false);
    setSignUp(true);
  };

  return (
    <div className="bg-white">
      <Navbar type="signin" />
      <div className="container mx-auto px-4 w-full my-24 h-fit">
        <div className="flex border-2 justify-center items-center mx-auto border-gray-300 w-max overflow-hidden rounded-lg">
          <button
            onClick={stepSignIn}
            className="bg-blue-700 text-lg px-4 py-1 border-2 border-blue-700 rounded-lg text-white"
          >
            Sign In
          </button>
          <button
            onClick={stepSignUp}
            className="bg-white text-lg px-4 py-1 border-2 border-white rounded-lg text-black"
          >
            Sign Up
          </button>
        </div>
        <form className="mt-12 lg:w-96 mx-auto">
          {signIn && (
            <div className="flex-col space-y-8 ">
              <div className="border-b-[0.8px] border-blue-700 pb-2 w-full">
                <input
                  type="text"
                  className="flex-1 outline-none text-sm border-0"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex border-b-[0.8px] border-blue-700 pb-2 w-full">
                <input
                  type="password"
                  className="outline-none border-0 text-sm flex-1"
                  placeholder="password"
                />
                <button>
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <button className="w-full py-3 text-white text-xl bg-blue-700 rounded-lg">
                Sign In
              </button>
            </div>
          )}
          {signUp && (
            <div className="flex-col space-y-8 ">
              <div className="border-b-[0.8px] border-blue-700 pb-2 w-full">
                <input
                  type="text"
                  className="flex-1 outline-none text-sm border-0"
                  placeholder="fullname"
                />
              </div>
              <div className="border-b-[0.8px] border-blue-700 pb-2 w-full">
                <input
                  type="text"
                  className="flex-1 outline-none text-sm border-0"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex border-b-[0.8px] border-blue-700 pb-2 w-full">
                <input
                  type="password"
                  className="outline-none text-sm flex-1 border-0"
                  placeholder="password"
                />
                <button>
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <button className="w-full py-3 text-white text-xl bg-blue-700 rounded-lg">
                Sign In
              </button>
            </div>
          )}
          <div className="flex-col mt-12 space-y-4">
            <button className="flex w-full border-2 border-blue-700 py-3 px-4 items-center rounded-xl text-light text-gray-500">
              <img src={Google} alt="google" className="h-6 w-6 mr-3" />
              Sign In with Google
            </button>
            <button className="flex w-full border-2 border-blue-700 py-3 px-4 items-center rounded-xl text-light text-gray-500">
              <img src={Facebook} alt="google" className="h-6 w-6 mr-3" />
              Sign In with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInUp;
