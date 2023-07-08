import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faTrain, faPlane,faCalendarDays,faPerson } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTrain} />
            <span>IRCTC</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
        </div>
        <h1 className="HeaderTitle">A lifetime of discounts ? Subscribe</h1>
        <p className="headerDesc">
          Get rewards for your travels by unlocking your rewards
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faHotel} className="headeIcon" />
            <input
              type="text"
              placeholder="Where are you going ?"
              className="headeSearchInput"
            />
          </div>

          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} className="headeIcon" />
            <span className="headerSearchText">Date Of Travel</span>
          </div>

          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headeIcon" />
            <span className="headerSearchText">2 Adults, 2 Children</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
