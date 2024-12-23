import React from "react";
import logo from "../favicon.ico";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between border-b-2 border-neutral-500 text-white mb-8">
      <div
        className={`w-6/12 md:w-3/12 h-full flex items-center justify-star text-2xl `}
      >
        <Image src={logo} alt="logo" width={25} height={25} />
        <p className="font-semibold ml-2">Code Editor</p>
      </div>

      <div className="w-6/12 md:w-3/12 h-full flex items-center justify-end text-2xl"></div>
    </div>
  );
};

export default Header;
