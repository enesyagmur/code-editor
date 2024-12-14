import React from "react";
import { FaJsSquare } from "react-icons/fa";

const JavascriptComponent = () => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaJsSquare className="text-yellow-500" />
        <p className="code-language">JS</p>
      </div>

      <textarea className="code-textarea" title="" name="" id=""></textarea>
    </div>
  );
};

export default JavascriptComponent;
