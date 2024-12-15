import { useTheme } from "next-themes";
import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface CssProps {
  cssCode: string;
  setCssCode: React.Dispatch<React.SetStateAction<string>>;
}

const CssComponent: React.FC<CssProps> = ({ cssCode, setCssCode }) => {
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
            : "bg-blue-500 text-primaryDarkColor"
        }`}
      >
        <div
          className={`code-language ${
            theme === "dark"
              ? "bg-secondDarkColor text-lightColor"
              : "bg-lightColor text-primaryDarkColor"
          }`}
        >
          <FaCss3Alt className="text-blue-500" />
          <p className="language">Css</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setCssCode("")}
        />
      </div>

      <textarea
        className={`code-textarea ${
          theme === "dark"
            ? "bg-secondDarkColor text-lightColor"
            : "bg-lightColor text-primaryDarkColor"
        }`}
        title="Css"
        name="Css"
        id="Css"
        onChange={(e) => setCssCode(e.target.value)}
        value={cssCode}
      ></textarea>
    </div>
  );
};

export default CssComponent;
