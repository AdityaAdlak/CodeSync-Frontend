

import { useState, useEffect } from "react";
import {toast,Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";


export default function GetAllSnippets(e) {
   
    
    const navigate = useNavigate();
    const [getdt, setdt] = useState([]); 

    useEffect(() => {
        getData();
    }, []);


    async function getData() {
        
        try {
         
            const response = await fetch("https://codesync-backend-6-rlsb.onrender.com/user/v1/getAllData");

            if (!response.ok) {
                console.log("Could not get response...");
                return;
            }

            const result = await response.json();
            setdt(result.data); 

            console.log(result);
        } catch (error) {
            console.log("Error in fetch: ", error);
        }
    }

    async function deleteHandler(id)
    {
        try {
            console.log(id);
            const response = await fetch(`https://codesync-backend-6-rlsb.onrender.com/user/v1/deleteSnippet/${id}`,{
                method : "DELETE"
            });

            const result = await response.json();

            if(!response.ok)
            {
                console.log("error in getting respone.."+result.error)
            }
            if(response.ok)
            {
                toast.success("Snippet deleted successfully...");
                await getData();
            }

        } catch (error) {
            console.log("Something went wrong..."+error);
            toast.error("Something went wrong...");
           
        }
    }

    async function updateHandler(id)
    {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6">Code Snippets</h1>

                {
                    getdt.length > 0 ? (
                        getdt.map((snippet, index) => (
                            <div 
                                key={index} 
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ease-in-out"
                            >
                                <h2 className="text-xl font-semibold">{snippet.title}</h2>
                                <p className="text-sm">{snippet.language}</p>

                                <div className="mt-4">
                                    <h3 className="font-medium">Code:</h3>
                                    <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
                                        {snippet.code}
                                    </pre>
                                </div>
                                {
                                
                                <div className="mt-4">
                                    <h3 className="font-medium">Note:</h3>
                                    <p>{snippet.note}</p>
                                </div>
                                }

                                <div className="mt-4">
                                    <h3 className="font-medium">Approach:</h3>
                                    <p>{snippet.approach}</p>
                                </div>

                                <div className="mt-6 flex space-x-4">
                                    <button onClick={()=>deleteHandler(snippet._id)}
                                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
                                      
                                    >
                                        Delete
                                    </button>

                                    
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No results found...</p>
                    )
                }
            </div>
        </div>
    );
}
