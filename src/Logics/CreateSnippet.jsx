
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

export default function CreateSnippet() {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const addSnippet = { title, language, code, note, approach };

      if (!title || !language || !code) {
        toast.error("Enter mandatory fields...");
        return;
      }

      const response = await fetch("http://localhost:4000/user/v1/createSnippet", {
        method: "POST",
        body: JSON.stringify(addSnippet),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
    } catch (error) {
      console.error("Fetch error:", error.message);
      toast.error("Something went wrong...");
    }

    if (!error) {
      navigate("/getAllData");
    }
  };

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [note, setNote] = useState("");
  const [approach, setApproach] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Create Snippet
        </h2>

        <form onSubmit={submitHandler} className="space-y-6">
          
          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title of Code
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Language
              </label>
              <input
                id="language"
                type="text"
                placeholder="Enter language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>

         
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Code
            </label>
            <CodeMirror
              value={code}
              height="400px"
              extensions={[javascript()]}
              theme={oneDark}
              onChange={(value) => setCode(value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Notes
              </label>
              <textarea
                id="note"
                placeholder="Create notes here"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full h-96 px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              ></textarea>
            </div>

            
            <div>
              <label
                htmlFor="approach"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Approach for Code
              </label>
              <textarea
                id="approach"
                placeholder="Create approach here"
                value={approach}
                onChange={(e) => setApproach(e.target.value)}
                className="w-full h-96 px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

