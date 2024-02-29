import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

function Filter({ onSelectTime }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState([0, 0]); // State to store selected time range

  const handleTime = () => {
    onSelectTime(selectedRange);
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="parent">
        <button className="openingMenu" onClick={() => setMenuOpen(true)}>
          <FaFilter className="text-[#ffe900]" size={25} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-[#666666] p-3 w-48 rounded-xl text-white">
          <p className="text-center italic text-xl mb-2">RECIPES BY TIME</p>
          <div className="flex justify-center">
            <input
              type="radio"
              name="time"
              value="10min - 20min"
              onChange={() => setSelectedRange([10, 20])}
            />
            <label>10min - 20min</label>
          </div>
          <div className="flex justify-center">
            <input
              type="radio"
              name="time"
              value="20min - 30min"
              onChange={() => setSelectedRange([20, 30])}
            />
            <label>20min - 30min</label>
          </div>
          <div className="flex justify-center">
            <input
              type="radio"
              name="time"
              value="30min - 40min"
              onChange={() => setSelectedRange([30, 40])}
            />
            <label>30min - 40min</label>
          </div>

          <div className="flex justify-center">
            <input
              type="radio"
              name="time"
              value="30min - 40min"
              onChange={() => setSelectedRange([40, 50])}
            />
            <label>40min - 50min</label>
          </div>

          <div className="flex justify-center mt-2">
            <button
              className="bg-[#ECB159] rounded-xl p-1"
              onClick={handleTime}
            >
              <MdOutlineDone />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
