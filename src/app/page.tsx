"use client";

import { useState } from "react";
import CssComponent from "./components/CssComponent";
import Header from "./components/Header";
import HtmlComponent from "./components/HtmlComponent";
import JavascriptComponent from "./components/JavascriptComponent";
import "./globals.css";
import { useTheme } from "next-themes";

export default function Home() {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [jsCode, setJsCode] = useState<string>("");
  const { theme } = useTheme();

  return (
    <div
      className={`w-full md:h-[1070px] flex flex-col items-center justify-center p-2 ${
        theme === "dark"
          ? "bg-primaryDarkColor text-lightColor"
          : "bg-gray-300 text-primaryDarkColor"
      }`}
    >
      <Header />
      <div className="w-full h-[2140px] md:h-full flex flex-col md:flex-row">
        <div className="w-full h-3/6 md:h-full md:w-6/12 flex flex-col items-center justify-between">
          <HtmlComponent htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
          <CssComponent cssCode={cssCode} setCssCode={setCssCode} />
          <JavascriptComponent jsCode={jsCode} setJsCode={setJsCode} />
        </div>
        <iframe
          className={`w-full h-[1070px] md:h-full md:w-6/12 rounded-lg  mt-6 md:mt-2  md:ml-2 border-[1px] border-neutral-500 ${
            theme === "dark"
              ? "bg-gray-400 text-primaryDarkColor"
              : "bg-white text-primaryDarkColor"
          }`}
          id="output"
          srcDoc={`<html>
    <head>
    <style>
    ${cssCode}
    
    </style>
    </head>
    <body>
    ${htmlCode}
    </body>
    <script>
    ${jsCode}
    </script>
    </html>`}
        ></iframe>
      </div>
    </div>
  );
}
// dark mode
