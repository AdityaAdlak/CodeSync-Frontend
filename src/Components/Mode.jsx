
import React from "react";

function DashMode({ toggleDarkMode, darkMode }) {
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        {darkMode ? (
          <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy1kulKGFspFD5skFeQ_G9RzsJZ4pmAEmnQ&s"
            alt="Dark Mode"
            height={20}
            width={20}
          />
        ) : (
          <img
           src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
            alt="Light Mode"
            height={20}
            width={20}
          />
        )}
      </button>
    </div>
  );
}

export default DashMode;

