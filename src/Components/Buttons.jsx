import React, { useState } from "react";
import "./Styles/Buttons.css";
const Buttons = ({onButtonClick}) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
  ];
   
 

  return (
    <div className="buttonProperty">
      {buttons.map((buttonText, index) => (
        <button
          className="buttonstyle"
          key={index}
          onClick={()=>onButtonClick(buttonText)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
