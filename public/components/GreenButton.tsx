'use client'
import React from "react";

type ButtonProps = {
  text: string;
  onClick: ()=> void;
};

const GreenButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="block mx-auto mt-5 p-5 w-[80%] text-center signature-bg rounded-full text-white" onClick={onClick}> 
      {text}
    </button>
  );
};

export default GreenButton;
