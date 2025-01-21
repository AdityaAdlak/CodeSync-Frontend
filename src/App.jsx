import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import HomePage from "./Components/Home";
import Navbar from "./Components/Navbar";
import {Routes , Route} from "react-router-dom";
import {useState} from "react";
import CodeTypingAnimation from "./Components/ManageCodeRunner";
import CodeFinder from "./Logics/codeFinder";
import GetSearchedExist from "./Logics/getSearchedExist";
import Allfunctions from "./Components/Allfunctions";
import CreateSnippet from "./Logics/CreateSnippet";
import SearchSnippet from "./Logics/SearchSnippet";
import UpdateSnippet from "./Logics/UpdateSnippet";
import DeleteSnippet from "./Logics/DeleteSnippet";
import Footer from "./Components/Footer";
import GetSingleSearchedSnippet from "./Logics/getSingleSearchSnippet";
import GetAllSnippets from "./Components/getAllSnippets";


export default function App()
{

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }

    setDarkMode(!darkMode);
  };

    return (
        <div>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
        <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/manageSnippet" element={<CodeTypingAnimation/>}></Route>
        <Route path="/searchExistingSnippet" element={<CodeFinder/>}></Route>
        <Route path="/getSearchedSnippetExist" element={<GetSearchedExist/>}></Route>
        <Route path="/Allfunctions" element={<Allfunctions/>}></Route>
        <Route path="/createSnippet" element={<CreateSnippet/>}></Route>
        <Route path="/deleteSnippet" element={<DeleteSnippet/>}></Route>
        <Route path="/updateSnippet/:id" element={<UpdateSnippet/>}></Route>
        <Route path="/searchSnippet" element={<SearchSnippet/>}></Route>
        <Route path="/findSnippet" element={<GetSingleSearchedSnippet/>}></Route>
        <Route path="/getAllData" element={<GetAllSnippets/>}></Route>
        </Routes>
        <Footer/>
        </div>
    )
}