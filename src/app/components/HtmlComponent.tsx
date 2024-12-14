import React from "react";
import { FaHtml5 } from "react-icons/fa";

interface HtmlProps {
  setHtmlCode: React.Dispatch<React.SetStateAction<string>>;
}

const HtmlComponent: React.FC<HtmlProps> = ({ setHtmlCode }) => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaHtml5 className="text-orange-700" />
        <p className="code-language">HTML</p>
      </div>

      <textarea
        className="code-textarea"
        title="Html"
        name="Html"
        id="Html"
        onChange={(e) => setHtmlCode(e.target.value)}
      ></textarea>
    </div>
  );
};

export default HtmlComponent;
