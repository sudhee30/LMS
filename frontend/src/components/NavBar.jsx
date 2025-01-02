import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/assets/assets_frontend/logooo.png"
function NavBar() {
    const Navigate=useNavigate();
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b gray-400">
            <img className="w-44 cursor-pointer" src= {logo} alt="" />

            <ul className="hidden md:flex items-smart gap-5 font-medium">
                <NavLink to="/">
                    <li className="py-1">Home</li>
                    <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to ="/Doctors">
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="About">
                    <li className="py-1">About</li>
                    <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden"/>
                </NavLink>
                <NavLink to="Contact">
                    <li className="py-1"
                    >Contact</li>
                    <hr className="border-none outline-noe h-0.5 bg-primary w-3/5 m-auto hidden"/>
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                <button onClick={()=>Navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
            </div>
        </div>
    )
}
export default NavBar;