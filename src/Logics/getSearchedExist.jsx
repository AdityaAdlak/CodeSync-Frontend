

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";



export default function GetSearchedSnippetExist() {
 
  const { state } = useLocation();
  const { searchTag, searchLanguage } = state || {};
  const [finalData, setFinalData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchLanguage);
    console.log(searchTag)
    if (searchTag && searchLanguage) {
      async function fetchSnippets() {
        try {

          const response = await fetch(
           
            `https://codesync-backend-complete.onrender.com/user/v1/aiSnippet/${searchTag}/${searchLanguage}`,{
              method : "GET"
            }
            
          );
          const result = await response.json();
          console.log("API response : ",result)

          if (!response.ok) {
            setError(result.error);
          } else {
            setFinalData(result.data);
          }
        } catch (err) {
          toast.error("Something went wrong...")
        }
      }
      fetchSnippets();
    }
  }, [searchTag, searchLanguage]);

  

  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <div className="min-h-screen flex flex-col p-4 sm:p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex-grow">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">
          Search Results for "{searchTag}" in "{searchLanguage}"
        </h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : finalData.length > 0 ? (
          finalData.map((item, index) => (
            <div key={index} className="mb-4">
              <pre className="bg-gray-200 p-4 rounded dark:bg-gray-700 overflow-x-auto">
                {item.code}
              </pre>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      <button
        onClick={()=>navigate("/searchExistingSnippet")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-start"
      >
        Back
      </button>
    </div>
    </form>
  );
}
