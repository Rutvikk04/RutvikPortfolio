import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> <nav className="flex justify-around p-3 ">
    <ul className="flex space-x-20 font-semibold">
      <Link to={"/"} className="hover:border-b-2 hover:scale-105 border-gray-500 transition-transform ">
        <button >Home</button>
      </Link>
      <Link to={"/project"} className="hover:border-b-2 hover:scale-105 border-gray-500">
        <button>Projects</button>
      </Link>
      <Link className="hover:border-b-2 hover:scale-105 border-gray-500">
        <button>Experience</button>
      </Link>
      <Link className="hover:border-b-2 hover:scale-105 border-gray-500">
        <button>Contact Me</button>
      </Link>
    </ul>
  </nav></div>
  )
}

export default Navbar