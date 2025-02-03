import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";


const fetchCodeSnippets = async (searchQuery) => {
  const response = await fetch(`/api/code-snippets?search=${searchQuery}`);
  const data = await response.json();
  return data;
};

const LiveCodeWithSnippetSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  // C++ code for the animation
  const codeLines = [
    "#include <iostream>",
    "using namespace std;",
    "",
    "int main() {",
    "    cout << \"Search Existing Snippets Here...\" << endl;",
    "    return 0;",
    "}",
  ];

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
        }, 2000); 
      }
    };

    const timer = setTimeout(typeCode, 50);
    return () => clearTimeout(timer);
  }, [currentLine, charIndex, codeLines]);

  useEffect(() => {
    const fetchSnippets = async () => {
      const snippets = await fetchCodeSnippets(searchQuery);
      setCodeSnippets(snippets);
    };

    if (searchQuery) {
      fetchSnippets();
    } else {
      setCodeSnippets([]);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-950 text-white">
      
      <div className="h-[250px] lg:w-1/2 w-full max-w-xl bg-black bg-opacity-90 rounded-lg p-6 shadow-lg">
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

   
      <div className="lg:w-1/2 px-4 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-cyan-400">
          Search Existing Code Snippets
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
        Easily search, view, and manage your code snippets with CodeSync.
        </p>
        <NavLink to="/searchExistingSnippet" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default LiveCodeWithSnippetSearch;
