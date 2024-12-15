import { useTheme } from "next-themes";
import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface JsProps {
  jsCode: string;
  setJsCode: React.Dispatch<React.SetStateAction<string>>;
}

const JavascriptComponent: React.FC<JsProps> = ({ jsCode, setJsCode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`code-container ${
        theme === "dark"
          ? "bg-secondDarkColor text-lightColor"
          : "bg-lightColor text-primaryDarkColor"
      }`}
    >
      <div
        className={`code-container-top ${
          theme === "dark"
            ? "bg-primaryDarkColor text-lightColor"
            : "bg-yellow-500 text-primaryDarkColor"
        }`}
      >
        <div
          className={`code-language ${
            theme === "dark"
              ? "bg-secondDarkColor text-lightColor"
              : "bg-lightColor text-primaryDarkColor"
          }`}
        >
          <FaJsSquare className="text-yellow-500" />
          <p className="language">JS</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setJsCode("")}
        />
      </div>

      <textarea
        className={`code-textarea ${
          theme === "dark"
            ? "bg-secondDarkColor text-lightColor"
            : "bg-lightColor text-primaryDarkColor"
        }`}
        title="JS"
        name="JS"
        id="JS"
        onChange={(e) => setJsCode(e.target.value)}
        value={jsCode}
      ></textarea>
    </div>
  );
};

export default JavascriptComponent;
