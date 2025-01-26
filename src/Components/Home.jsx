

import React, { useRef } from "react";
//dont rerender and send values
import CodeRunner from "./ManageCodeRunner";
import LiveCodeWithSnippetSearch from "./AvailableCodeRunner.jsx";



const HomePage = () => {
  const codeRunnerRef = useRef(null);

  const scrollToCodeRunner = () => {
    window.scrollTo({
      top: codeRunnerRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
     
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative bg-no-repeat"
        style={{
          backgroundImage: "url('https://path-to-your-background-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to CodeSync
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-xl mx-auto">
             A platform to efficiently manage your coding snippets, organize approaches, and optimize your workflow.
          </p>
         
          <button
            onClick={scrollToCodeRunner}
            className="bg-orange-500 text-white py-3 px-8 text-lg rounded-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

     
      <div ref={codeRunnerRef}>
        <CodeRunner />
      </div>
  
      <LiveCodeWithSnippetSearch />
      
      
    </div>
  );
};

export default HomePage;


