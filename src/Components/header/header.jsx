import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import {
  faHotel,
  faTrain,
  faPlane,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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

        {type !== "list" && (
          <>
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
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")}`} to{" "}
                  {`${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faPerson} className="headeIcon" />
                <span
                  onClick={() => setOpenInfo(!openInfo)}
                  className="headerSearchText"
                >{`${options.adult} adult .${options.children} children . ${options.room} rooms`}</span>
                {openInfo && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOptions("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumbers">
                          {" "}
                          {options.adult}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.children}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.room}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItems">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
