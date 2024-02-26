// Filter.js

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

function Filter({ onSelectTime }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTime = (time) => {
    setSelectedTime(time);
  };

  const applyFilter = () => {
    onSelectTime(selectedTime);
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="parent">
        <button className="openingMenu" onClick={() => setMenuOpen(!isMenuOpen)}>
          <FaFilter className="text-[#ECB159]" size={25} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-32 right-6 bg-[#B67352] text-white p-3 w-40 rounded-lg">
          <div className="flex justify-center">
            <input
              className="mr-2"
              type="radio"
              name="time"
              value="10min - 20min"
              onChange={() => handleTime("10min - 20min")} />
            <p>10min - 20min</p>
          </div>

          <div className="flex justify-center">
            <input
              className="mr-2"
              type="radio"
              name="time"
              value="20min - 30min"
              onChange={() => handleTime("20min - 30min")}
            />
            <p>20min - 30min</p>
          </div>
          <div className="flex justify-center">
            <input
              className="mr-2"
              type="radio"
              name="time"
              value="20min - 30min"
              onChange={() => handleTime("30min - 40min")}
            />
            <p>30min - 40min</p>
          </div>

          <div className="flex justify-center">
            <input
              className="mr-2"
              type="radio"
              name="time"
              value="40min - 50min"
              onChange={() => handleTime("40min - 50min")}
            />
            <p>40min - 50min</p>
          </div>
          <div className="flex mt-1 justify-center">
            <button onClick={applyFilter} className="bg-[#ECB159] rounded p-1">
              <MdOutlineDone />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
