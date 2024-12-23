import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface CssProps {
  cssCode: string;
  setCssCode: React.Dispatch<React.SetStateAction<string>>;
}

const CssComponent: React.FC<CssProps> = ({ cssCode, setCssCode }) => {
  return (
    <div className={`code-container`}>
      <div className={`code-container-top bg-blue-700`}>
        <div className={`code-language`}>
          <FaCss3Alt className="text-blue-700" />
          <p className="language">CSS</p>
        </div>
        <FaDeleteLeft
          className="code-delete-btn"
          onClick={() => setCssCode("")}
        />
      </div>

      <textarea
        className={`code-textarea`}
        title="CSS"
        name="CSS"
        id="CSS"
        onChange={(e) => setCssCode(e.target.value)}
        value={cssCode}
      ></textarea>
    </div>
  );
};

export default CssComponent;

/*

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 500px;
  height: 650px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.box h1 {
  color: #6a11cb;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.box p {
  color: #333;
  font-size: 1.2rem;
  line-height: 1.5;
}

.cta-button {
  background: #2575fc;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #6a11cb;
}*/
