import React from "react";

const HtmlComponent = () => {
  return (
    <div className="w-full lg:h-[300px] flex flex-col items-start justify-center border-[1px] border-neutral-700">
      <p className="w-24 h-1/6 bg-componentBgColor flex items-center justify-center text-white">
        HTML
      </p>
      <textarea
        className="w-full h-5/6  bg-componentBgColor"
        title=""
        name=""
        id=""
      ></textarea>
    </div>
  );
};

export default HtmlComponent;
