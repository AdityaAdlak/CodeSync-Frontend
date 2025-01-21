import { useState } from "react";
import GetSingleSearchedSnippet from "./getSingleSearchSnippet";

export default function SearchSnippet() {
    const [getTitle, setTitle] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        setSearchQuery(getTitle.trim());
    }

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                
                <form
                    onSubmit={submitHandler}
                    className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4"
                >
                    <h2 className="text-2xl font-semibold text-center mb-4">Search Snippet</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium mb-2 sm:mb-0"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
                            type="text"
                            placeholder="Enter title to search..."
                            value={getTitle}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Search Snippet
                        </button>
                    </div>
                </form>

                <GetSingleSearchedSnippet getTitle={searchQuery} />
            </div>
        </div>
    );
}
