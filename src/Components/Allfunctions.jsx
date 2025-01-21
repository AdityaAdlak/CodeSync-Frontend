

import React from "react";
import {useNavigate} from "react-router-dom"

export default function Allfunctions() {

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">
          Manage Snippets
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <button onClick={()=>navigate("/createSnippet")} className="w-full sm:w-64 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Create Snippet
          </button>

          <button onClick={()=>navigate("/getAllData")} className="w-full sm:w-64 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Delete Snippet
          </button>

          <button onClick={()=>navigate("/searchSnippet")} className="w-full sm:w-64 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Search Snippet
          </button>

          <button onClick={()=>navigate("/getAllData")} className="w-full sm:w-64 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500">
            All Snippets</button>
        </div>
      </div>
    </div>
  );
}
