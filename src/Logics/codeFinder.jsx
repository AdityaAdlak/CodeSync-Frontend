import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodeFinder() {
  const [searchTag, setSearchTag] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const navigate = useNavigate();

  const handleTagChange = (e) => setSearchTag(e.target.value);
  const handleLanguageChange = (e) => setSearchLanguage(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTag && searchLanguage) {
      
      navigate("/getSearchedSnippetExist", {
        state: { searchTag, searchLanguage },
      });
    } else {
      alert("Please provide both search tag and language!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-cyan-400">
          Find Code Snippets
        </h2>
        <form className="space-y-6" onSubmit={handleSearch}>
          <div>
            <label
              htmlFor="searchTag"
              className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              Enter Search Tag
            </label>
            <input
              id="searchTag"
              className="w-full p-3 bg-gray-700 dark:bg-gray-600 text-white dark:text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              placeholder="Enter Search Tag..."
              onChange={handleTagChange}
            />
            <br />
            <br />
            <label
              htmlFor="searchLanguage"
              className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              Enter Language
            </label>
            <input
              id="searchLanguage"
              className="w-full p-3 bg-gray-700 dark:bg-gray-600 text-white dark:text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              placeholder="Enter Search Language..."
              onChange={handleLanguageChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Search Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


