import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/main/main";
import Navbar from "./components/navbar/navbar";
import Recommend from "./pages/recommend/recommend";
import Bag from "./pages/bag/bag";
import Checkout from "./pages/checkout/checkout";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import Promo from "./pages/promo/promo";
import Account from "./pages/account/account";
import OrderHistory from "./pages/order-history/order-history";
import Notification from "./pages/notification/notification";
import TermCondition from "./pages/term-condition/term-condition";
import HelpContact from "./pages/help-contact/help-contact";
import AllCategory from "./pages/all-category/all-category";
import "./index.css";
import OrderProcess from "./pages/order-process/order-process";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <SignInUp /> */}
    {/* <Main /> */}
    {/* <Recommend/> */}
    {/* <Bag/> */}
    <Checkout/>
    {/* <Promo/> */}
    {/* <AllCategory/> */}
    {/* <Account/> */}
    {/* <OrderHistory/> */}
    {/* <Notification/> */}
    {/* <TermCondition/> */}
    {/* <HelpContact/> */}
    {/* <OrderProcess /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
