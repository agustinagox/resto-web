import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import OrderStep from "../../components/order-step/order-step";
import { Link } from "react-router-dom";
import "./index.css";

const OrderProcess = () => {
  return (
    <div className="page">
      <Navbar type="signin" />
      <div className="wrap-container">
        <div className="container-content">
          <h1 className="title-content">Order Process</h1>
          <h3 className="item-order-id">Order ID #44725</h3>
          <p className="time-order">
            Your order will arrive at 30 minutes (2.5 km)
          </p>
          <OrderStep status="recieve" />
          <div className="wrap-footer">
            <h3 className="title-footer">There is problem in your order!</h3>
            <p className="desc-footer">
              The order may take longer than usual due to rush hour
            </p>
          </div>

          <Link to="/allcategory">
            <button className="button-order">Order again?</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderProcess;
