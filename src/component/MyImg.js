import React from "react";
import picture from "../Layer 01.png";

const MyImg = () => {
  return (
    <div>
      <img
        src={picture}
        className=" w-64 h-64 m-auto blur-sm hover:blur-none transition duration-150 ease-in-out hover:animate-[pulse_3s_ease-in-out_infinite] cursor-pointer"
        alt="logo"
      />
    </div>
  );
};

export default MyImg;
