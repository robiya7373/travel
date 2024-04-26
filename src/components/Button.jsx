import React from "react";

const Button = ({ text, onClick, color, border }) => {
  let buttonClass = "font-bold py-2 px-4 rounded";

  switch ((color, border)) {
    case "white":
      buttonClass += "border-orange-400 hover:bg-orange-700 text-orange-400 hover:text-white";
      break;

    default:
      buttonClass += " bg-orange-500 hover:bg-orange-700 text-white";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
