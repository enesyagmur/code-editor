import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface HtmlProps {
  htmlCode: string;
  setHtmlCode: React.Dispatch<React.SetStateAction<string>>;
}

const HtmlComponent: React.FC<HtmlProps> = ({ htmlCode, setHtmlCode }) => {
  return (
    <div className={`code-container`}>
      <div className={`code-container-top bg-orange-700`}>
        <div className={`code-language`}>
          <FaHtml5 className="text-orange-700" />
          <p className="language">HTML</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setHtmlCode("")}
        />
      </div>

      <textarea
        className={`code-textarea`}
        title="HTML"
        name="HTML"
        id="HTML"
        onChange={(e) => setHtmlCode(e.target.value)}
        value={htmlCode}
      ></textarea>
    </div>
  );
};

export default HtmlComponent;
/*
<div class="container">
  <div class="box">
    <h1>Hoşgeldiniz</h1>
    <p>
      Bu şık ve modern bir kod düzenleyici arayüzüdür. Düzeni özelleştirin,
      kodunuzu yazın ve projelerinizi gerçek zamanlı olarak önizleyin. Basitlik
      ve performansa odaklanarak tasarlanan bu düzenleyici, her seviyeden
      geliştirici için mükemmeldir.
    </p>
    <button class="cta-button">Yeni bir sayfa ile hemen Başlayın</button>
  </div>
</div>;
*/
