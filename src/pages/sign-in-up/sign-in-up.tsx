import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Facebook, Google } from "../../assets/illustrations";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import "./sign-in-up-style.css";

const SignInUp = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const [toggle, setToggle] = useState(1);

  const stepSignIn = () => {
    setSignIn(true);
    setSignUp(false);
    setToggle(1);
  };

  const stepSignUp = () => {
    setSignIn(false);
    setSignUp(true);
    setToggle(2);
  };

  return (
    <div className="page-white">
      <Navbar type="signin" />
      <div className="container-page">
        <div className="wrap-tabs">
          <button
            onClick={stepSignIn}
            className={toggle === 1 ? "nav-tabs active " : "nav-tabs"}
          >
            Sign In
          </button>
          <button
            onClick={stepSignUp}
            className={toggle === 2 ? "nav-tabs active " : "nav-tabs"}
          >
            Sign Up
          </button>
        </div>
        <form className="container-form">
          {signIn && (
            <div className="flex-col space-y-8 ">
              <div className="container-input">
                <input
                  type="text"
                  className="input-text"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex container-input">
                <input
                  type="password"
                  className="input-password"
                  placeholder="password"
                />
                <button>
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <Link to="/main">
                <button className="button-primary mt-6">Sign In</button>
              </Link>
            </div>
          )}
          {signUp && (
            <div className="flex-col space-y-8 ">
              <div className="container-input">
                <input
                  type="text"
                  className="input-text"
                  placeholder="fullname"
                />
              </div>
              <div className="container-input">
                <input
                  type="text"
                  className="input-text"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex container-input">
                <input
                  type="password"
                  className="input-password"
                  placeholder="password"
                />
                <button>
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              <Link to="/main">
                <button className="button-primary mt-6">Sign Up</button>
              </Link>
            </div>
          )}
          <div className="flex-col mt-12 space-y-4">
            <button className="button-social">
              <img src={Google} alt="google" className="ic-social" />
              Sign In with Google
            </button>
            <button className="button-social">
              <img src={Facebook} alt="google" className="ic-social" />
              Sign In with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInUp;
