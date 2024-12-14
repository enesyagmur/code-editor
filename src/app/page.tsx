import CssComponent from "./components/CssComponent";
import Header from "./components/Header";
import HtmlComponent from "./components/HtmlComponent";
import JavascriptComponent from "./components/JavascriptComponent";
import Output from "./components/Output";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full md:h-[1070px] bg-darkBgColor flex flex-col items-center justify-center p-2">
      <Header />
      <div className="w-full h-[2140px] md:h-[1070px] flex flex-col md:flex-row">
        <div className="w-full h-3/6 md:h-full md:w-6/12 flex flex-col items-center justify-between">
          <HtmlComponent />
          <CssComponent />
          <JavascriptComponent />
        </div>
        <Output />
      </div>
    </div>
  );
}
