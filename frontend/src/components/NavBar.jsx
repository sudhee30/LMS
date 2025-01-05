import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/assets/assets_frontend/logooo.png"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import dp from "../assets/assets/assets_frontend/profile_pic.png"
import dpp from "../assets/assets/assets_frontend/dropdown_icon.svg"
function NavBar() {

    const Navigate=useNavigate();
    const [showMenu,setshowMenu] = useState(false)
    const [token,setToken] = useState(true) //if we have tokn then we are logged in

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b gray-400">
            <img onClick ={()=>{Navigate('/')}} className="w-44 cursor-pointer" src= {logo} alt="" />

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
                {
                    token
                    ?<div className="flex items-center gap-2 cursor-pointer group relaive">
                        <img className = "w-8 rounded-full" src = {dp} alt="."></img>
                        <img className="w-2.5" src = {dpp} alt="."></img>
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                                <p onClick ={()=>Navigate('MyProfile')} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={()=> Navigate('MyAppointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick ={()=> setToken(false) }className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>


                    </div>
                    :<button onClick={()=>Navigate('Login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>

                }
            </div>
        </div>
    )
}
export default NavBar;