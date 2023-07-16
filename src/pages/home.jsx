import React from "react";
import NavBar from "../Components/navbar/navbar";
import Header from "../Components/header/header";
import Featured from "../Components/featured/featured";
import PropertyList from "../Components/propertyList/propertyList";
import MailList from "../Components/MailList/mailList";
import Footer from "../Components/Footer/footer";

const home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default home;
