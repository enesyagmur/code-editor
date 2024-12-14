import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface JsProps {
  jsCode: string;
  setJsCode: React.Dispatch<React.SetStateAction<string>>;
}

const JavascriptComponent: React.FC<JsProps> = ({ jsCode, setJsCode }) => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <div className="code-language">
          <FaJsSquare className="text-yellow-500" />
          <p className="language">JS</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setJsCode("")}
        />
      </div>

      <textarea
        className="code-textarea"
        title="Js"
        name="Js"
        id="Js"
        onChange={(e) => setJsCode(e.target.value)}
        value={jsCode}
      ></textarea>
    </div>
  );
};

export default JavascriptComponent;
