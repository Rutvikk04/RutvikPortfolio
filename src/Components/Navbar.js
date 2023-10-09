import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuSidebar,setMenuSidebar]=useState(true)
  return (
    <>
     <nav className="flex justify-around p-3 max-sm:hidden">
        <ul className="flex space-x-20 font-semibold">
          <Link
            to={"/"}
            className="hover:border-b-2 hover:scale-105 border-gray-500 transition-transform "
          >
            <button>Home</button>
          </Link>
          <Link
            to={"/project"}
            className="hover:border-b-2 hover:scale-105 border-gray-500"
          >
            <button>Projects</button>
          </Link>
          <Link className="hover:border-b-2 hover:scale-105 border-gray-500">
            <button>Experience</button>
          </Link>
          <Link className="hover:border-b-2 hover:scale-105 border-gray-500">
            <button>Contact Me</button>
          </Link>
        </ul>
      </nav>

      {
        menuSidebar && 
          <>
          <h1 className="absolute right-5 top-2 px-1 rounded-md z-50 text-white border border-white" onClick={()=>setMenuSidebar(false)}>X</h1>
          <ul className="absolute w-52 right-0 rounded-bl-md z-20 space-y-3 bg-gray-500 py-2 px-5 text-center text-white">
            <li>Home</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact Me</li>
          </ul>
          </>
        
      }
    </>
     

  );
};

export default Navbar;
