import React, { Fragment } from "react";
import moment from "moment";
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  return (
    <Fragment>
      <div
        style={{
          background: "#123962",
          height: "7px",
        }}
      ></div>

      <footer
        style={{
          background: "#051120",
          color: "#fff",
        }}
        className="flex flex-column  items-center z-10 py-6 px-4 md:px-12"
      >
        <h3>Follow Us!</h3>
        <div className="flex justify-between mb-2 w-32">
          <BsWhatsapp className="fs-1" />
          <FaFacebookSquare className="fs-1" />
          <BsInstagram className="fs-1 " />
        </div>
        MDM HERBAL PRODUCTS © Copyright {moment().format("YYYY")}
      </footer>
      <div
        style={{
          background: "#123962",

          height: "7px",
        }}
      ></div>
    </Fragment>
  );
};

export default Footer;
