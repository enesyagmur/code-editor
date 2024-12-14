import React from "react";
import { FaCss3Alt } from "react-icons/fa";

interface CssProps {
  setCssCode: React.Dispatch<React.SetStateAction<string>>;
}

const CssComponent: React.FC<CssProps> = ({ setCssCode }) => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaCss3Alt className="text-blue-500" />
        <p className="code-language">CSS</p>
      </div>

      <textarea
        className="code-textarea"
        title="Css"
        name="Css"
        id="Css"
        onChange={(e) => setCssCode(e.target.value)}
      ></textarea>
    </div>
  );
};

export default CssComponent;
