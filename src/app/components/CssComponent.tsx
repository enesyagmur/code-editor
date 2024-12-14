import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const CssComponent = () => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaCss3Alt className="text-blue-500" />
        <p className="code-language">CSS</p>
      </div>

      <textarea className="code-textarea" title="" name="" id=""></textarea>
    </div>
  );
};

export default CssComponent;
