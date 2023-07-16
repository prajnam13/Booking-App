import "./MailList.css";
import React from "react";

const mailList = () => {
  return (
    <div className="mail">
      <h1 className="mainTitle">Save Time, Save Money!</h1>
      <span className="mailDesc">Sign up to get best deals !!!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default mailList;
