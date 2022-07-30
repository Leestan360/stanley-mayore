import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="flex justify-between px-6 py-2 text-4xl text-white bg-orange-500">
      <h3 className="">Stanley Mayore</h3>
      <div className="">
        <NavLink to="/" className="border border-black rounded-md px-1 py-0.5">Home</NavLink>
        <NavLink to="/about" className="ml-4 border border-black rounded-md px-1 py-0.5">About</NavLink>
        <NavLink to="/skills" className="ml-4 border border-black rounded-md px-1 py-0.5">Skills</NavLink>
        <NavLink to="/projects" className="ml-4 border border-black rounded-md px-1 py-0.5">Projects</NavLink>
        <NavLink to="/experience" className="ml-4 border border-black rounded-md px-1 py-0.5">Experience</NavLink>
        <NavLink to="contact_me" className="ml-4 border border-black rounded-md px-1 py-0.5">Contact Me</NavLink>
      </div>
    </div>
  );
}

export default NavBar;