"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <FiSun className="text-yellow-500 mr-4 cursor-pointer" />
      ) : (
        <BsMoonStars className="text-green-700 mr-4 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggle;
