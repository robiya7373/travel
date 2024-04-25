

import React from 'react';

const CustomButton = ({ text, onClick, color }) => {
  let buttonClass = "font-bold py-2 px-4 rounded";
  
  switch (color) {
    case 'blue':
      buttonClass += " bg-blue-500 hover:bg-blue-700 text-white";
      break;
    case 'green':
      buttonClass += " bg-green-500 hover:bg-green-700 text-white";
      break;
    
    default:
      buttonClass += " bg-blue-500 hover:bg-blue-700 text-white";
  }

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
