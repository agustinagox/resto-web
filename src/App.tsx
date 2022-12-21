import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import Main from "./pages/main/main";
import Promo from "./pages/promo/promo";
import AllCategory from "./pages/all-category/all-category";
import Recommend from "./pages/recommend/recommend";

import Checkout from "./pages/checkout/checkout";
import OrderHistory from "./pages/order-history/order-history";
import OrderProcess from "./pages/order-process/order-process";
import Account from "./pages/account/account";
import Notification from "./pages/notification/notification";
import TermCondition from "./pages/term-condition/term-condition";
import HelpContact from "./pages/help-contact/help-contact";
import Bag from "./pages/bag/bag";

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="/account" element={<Account />} />
        <Route path="/notif" element={<Notification />} />
        <Route path="/termcondition" element={<TermCondition />} />
        <Route path="/help" element={<HelpContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
