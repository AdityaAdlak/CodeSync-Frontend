
import React from "react";
import { useState } from "react";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";



export default function Login() {
  
  const navigate = useNavigate();

  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loggedIn,setLoggedIn] = useState(false);

  async function submitHandler(e)
  {
    e.preventDefault();
    try {
      const user = {email,password};
     

      const response = await fetch(`https://codesync-backend-complete.onrender.com/user/v1/login`, {
        method: "POST",
        body: JSON.stringify(user), 
        headers: {
          "Content-Type": "application/json",
        },
      });


      const result = await response.json();
  
      if (!response.ok) {
      
        toast.error(result.message || "Something went wrong...");
        return;
      }
  
      
      if (result.success) {
        toast.success(result.message || "User logged in successfully...");
        setLoggedIn(true);
        navigate("/");
        console.log(loggedIn);
      }
      
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong...");
    }

  }
 
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


 
