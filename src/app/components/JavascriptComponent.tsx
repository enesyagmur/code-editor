import React from "react";
import { FaJsSquare } from "react-icons/fa";

interface JsProps {
  setJsCode: React.Dispatch<React.SetStateAction<string>>;
}

const JavascriptComponent: React.FC<JsProps> = ({ setJsCode }) => {
  return (
    <div className="code-container">
      <div className="code-container-top">
        <FaJsSquare className="text-yellow-500" />
        <p className="code-language">JS</p>
      </div>

      <textarea
        className="code-textarea"
        title="Js"
        name="Js"
        id="Js"
        onChange={(e) => setJsCode(e.target.value)}
      ></textarea>
    </div>
  );
};

export default JavascriptComponent;
