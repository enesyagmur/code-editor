import React from "react";
import { AiFillCodepenCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between border-b-2 border-neutral-500 text-white mb-4">
      <div className="w-3/12 h-full flex items-center justify-start text-white text-2xl">
        <AiFillCodepenCircle className="" />
        <p className="font-semibold ml-2">Code Editor</p>
      </div>
    </div>
  );
};

export default Header;
