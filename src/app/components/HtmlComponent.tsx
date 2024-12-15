import { useTheme } from "next-themes";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface HtmlProps {
  htmlCode: string;
  setHtmlCode: React.Dispatch<React.SetStateAction<string>>;
}

const HtmlComponent: React.FC<HtmlProps> = ({ htmlCode, setHtmlCode }) => {
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
            : "bg-orange-700 text-primaryDarkColor"
        }`}
      >
        <div
          className={`code-language ${
            theme === "dark"
              ? "bg-secondDarkColor text-lightColor"
              : "bg-lightColor text-primaryDarkColor"
          }`}
        >
          <FaHtml5 className="text-orange-700" />
          <p className="language">HTML</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setHtmlCode("")}
        />
      </div>

      <textarea
        className={`code-textarea ${
          theme === "dark"
            ? "bg-secondDarkColor text-lightColor"
            : "bg-lightColor text-primaryDarkColor"
        }`}
        title="Html"
        name="Html"
        id="Html"
        onChange={(e) => setHtmlCode(e.target.value)}
        value={htmlCode}
      ></textarea>
    </div>
  );
};

export default HtmlComponent;
