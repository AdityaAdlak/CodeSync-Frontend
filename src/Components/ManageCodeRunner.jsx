

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CodeTypingAnimation = () => {

  const navigate = useNavigate();
  
  const codeLines = [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "  <title>CodeSync: Code Snippet Manager</title>",
    "</head>",
    "<body>",
    "  <h1><a href=\"/\">Welcome to CodeSync</a></h1>",
    "  <section>",
    "    <p>Manage your code snippets effortlessly</p>",
    "    <p>Organize and access your coding solutions on the go</p>",
    "    <p>Explore, create, and share snippets with others</p>",
    "  </section>",
    "</body>",
    "</html>",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    const typeCode = () => {
      if (currentLine < codeLines.length) {
        const currentText = codeLines[currentLine];
        if (charIndex <= currentText.length) {
          setDisplayedCode((prev) =>
            codeLines
              .slice(0, currentLine)
              .join("\n") +
              "\n" +
              currentText.slice(0, charIndex)
          );
          setCharIndex((prev) => prev + 1);
        } else {
          setCurrentLine((prev) => prev + 1);
          setCharIndex(0);
        }
      } else {
        setTimeout(() => {
          setCurrentLine(0);
          setCharIndex(0);
          setDisplayedCode("");
        }, 2000); // Restart after 2 seconds
      }
    };

    const timer = setTimeout(typeCode, 50);
    return () => clearTimeout(timer);
  }, [currentLine, charIndex, codeLines]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white">
    
      <div className="lg:w-1/2 px-4 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-cyan-400">
          Manage Your Code Snippets with CodeSync
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Effortlessly store, organize, and access your coding solutions all in one place.
        </p>
        <button onClick={()=>navigate("/Allfunctions")}className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Get Started
        </button>
      </div>

      
      <div className="h-[400px] lg:w-1/2 w-full max-w-xl bg-black bg-opacity-90 rounded-lg p-6 shadow-lg">
        <pre
          className="whitespace-pre-wrap text-sm md:text-base leading-relaxed font-mono"
          style={{
            color: "#FFFF99", 
            textShadow: "0 0 5px #FFFF99, 0 0 10px #FFFF99", 
          }}
        >
          {displayedCode}
        </pre>
        <span
          className="inline-block w-1 h-6 bg-yellow-500 ml-1"
          style={{ marginTop: "-0.25rem" }}
        ></span>
      </div>
    </div>
  );
};

export default CodeTypingAnimation;

