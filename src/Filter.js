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

 // Filter component

return (
  <div>
    <div className="relative">
      <button className="openingMenu" onClick={() => setMenuOpen(true)}>
        <FaFilter className="text-[#5EBEC4] mt-1 ml-1" size={32} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-12 mt-2 w-80 bg-[#5EBEC4] bg-opacity-80 rounded-lg p-1 shadow-lg">
          <button onClick={() => setMenuOpen(false)}  className="bg-[red] text-white  pl-2 pr-2 rounded">x</button>
          <p className="text-center text-xl text-black font-[700] mb-2">RECIPES BY TIME</p>
          
          <div className="flex justify-center mb-2">    
            <input
              type="radio"
              name="time"
              value="10min - 20min"
              onChange={() => setSelectedRange([10, 20])}
            />
            <label className="text-black font-[600] mr-7 ml-1">10min - 20min</label>

            <input
              type="radio"
              name="time"
              value="20min - 30min"
              onChange={() => setSelectedRange([20, 30])}
            />
            <label className="text-black font-[600] ml-1">20min - 30min</label>
          </div>
          <div className="flex justify-center items-center mb-2">
            <input
              type="radio"
              name="time"
              value="30min - 40min"
              
              onChange={() => setSelectedRange([30, 40])}
            />
            <label className="text-black font-[600] mr-7 ml-1">30min - 40min</label>
            <input
              type="radio"
              name="time"
              value="40min - 50min"
              onChange={() => setSelectedRange([40, 50])}
            />
            <label className="text-black font-[600] ml-1">40min - 50min</label>
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="bg-[red] hover:bg-[#34A853] mb-2 text-white font-bold p-1 rounded"
              onClick={handleTime}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

}

export default Filter;
