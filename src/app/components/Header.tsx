import React from "react";

const Header = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between border-b-2 border-neutral-500 text-white mb-4">
      <div className="w-3/12 h-full flex items-center justify-center">
        <p className="text-2xl font-bold">Code Editor</p>
      </div>
    </div>
  );
};

export default Header;
