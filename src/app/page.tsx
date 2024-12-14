import CssComponent from "./components/CssComponent";
import Header from "./components/Header";
import HtmlComponent from "./components/HtmlComponent";
import JavascriptComponent from "./components/JavascriptComponent";
import Output from "./components/Output";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-darkBgColor flex flex-col items-center justify-center p-2">
      <Header />
      <div className="w-full flexitems-center justify-center">
        <div className="w-6/12 min-h-screen flex flex-col items-center justify-evenly p-2 ">
          <HtmlComponent />
          <CssComponent />
          <JavascriptComponent />
        </div>
        <Output />
      </div>
    </div>
  );
}
