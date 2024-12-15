import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface CssProps {
  cssCode: string;
  setCssCode: React.Dispatch<React.SetStateAction<string>>;
}

const CssComponent: React.FC<CssProps> = ({ cssCode, setCssCode }) => {
  return (
    <div className={`code-container`}>
      <div className={`code-container-top`}>
        <div className={`code-language`}>
          <FaCss3Alt className="text-blue-500" />
          <p className="language">CSS</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setCssCode("")}
        />
      </div>

      <textarea
        className={`code-textarea`}
        title="CSS"
        name="CSS"
        id="CSS"
        onChange={(e) => setCssCode(e.target.value)}
        value={cssCode}
      ></textarea>
    </div>
  );
};

export default CssComponent;
