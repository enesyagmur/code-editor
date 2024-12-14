import React from "react";
import { FaHtml5 } from "react-icons/fa";

const HtmlComponent = () => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaHtml5 className="text-orange-700" />
        <p className="code-language">HTML</p>
      </div>

      <textarea className="code-textarea" title="" name="" id=""></textarea>
    </div>
  );
};

export default HtmlComponent;
