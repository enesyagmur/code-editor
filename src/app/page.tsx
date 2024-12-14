"use client";

import { useState } from "react";
import CssComponent from "./components/CssComponent";
import Header from "./components/Header";
import HtmlComponent from "./components/HtmlComponent";
import JavascriptComponent from "./components/JavascriptComponent";
import "./globals.css";

export default function Home() {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [jsCode, setJsCode] = useState<string>("");

  return (
    <div className="w-full md:h-[1070px] bg-darkBgColor flex flex-col items-center justify-center p-2">
      <Header />
      <div className="w-full h-[2140px] md:h-full flex flex-col md:flex-row">
        <div className="w-full h-3/6 md:h-full md:w-6/12 flex flex-col items-center justify-between">
          <HtmlComponent setHtmlCode={setHtmlCode} />
          <CssComponent setCssCode={setCssCode} />
          <JavascriptComponent setJsCode={setJsCode} />
        </div>
        <iframe
          className="w-full h-[1070px] md:h-full md:w-6/12 text-black bg-neutral-200 md:ml-2"
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
