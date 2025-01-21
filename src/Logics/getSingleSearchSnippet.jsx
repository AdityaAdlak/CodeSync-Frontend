import { useState, useEffect } from "react";

export default function GetSingleSearchedSnippet({ getTitle }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (getTitle) {
            async function fetchSnippet() {
                setLoading(true);
                setData(null);
                try {
                    const response = await fetch(
                        `http://localhost:4000/user/v1/searchSnippet/${getTitle}`,
                        {
                            method: "GET",
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Failed to fetch snippet.");
                    }

                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    console.error("Error fetching snippets:", error.message);
                } finally {
                    setLoading(false);
                }
            }

            fetchSnippet();
        }
    }, [getTitle]);
    // if title gets changed render it again

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                {loading ? (
                    <p className="text-center text-lg font-medium">Loading...</p>
                ) : data && data.data.length > 0 ? (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Search Results for "{getTitle}"
                        </h3>
                        <ul className="space-y-6">
                            {data.data.map((snippet) => (
                                <li
                                    key={snippet._id}
                                    className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                                >
                                    <h4 className="text-xl font-bold mb-2">{snippet.title}</h4>
                                    <p className="text-sm mb-2">
                                        <strong>Language:</strong> {snippet.language}
                                    </p>

                                    <div className="mt-4 space-y-6">
                                        {/* Code Section */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Code:</h4>
                                            <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md overflow-auto text-sm">
                                                <code>{snippet.code}</code>
                                            </pre>
                                        </div>

                                        {/* Approach Section */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Approach:</h4>
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                                {snippet.approach || "No approach provided"}
                                            </p>
                                        </div>

                                        {/* Notes Section */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Notes:</h4>
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                                {snippet.note || "No additional notes"}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-center text-lg">
                        {getTitle
                            ? `No snippets found for "${getTitle}".`
                            : "Enter a title to search for a snippet."}
                    </p>
                )}
            </div>
        </div>
    );
}
