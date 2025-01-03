import React from "react";
import groupphoto from "../../src/assets/assets/assets_frontend/group_profiles.png"
import arrow from "../../src/assets/assets/assets_frontend/arrow_icon.svg"
import header from "../../src/assets/assets/assets_frontend/header_img.png"
function Header(){
  return(
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
        {/*Left side*/}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb -[-30px]"> 
            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight">Book Appointment <br/>With Trusted Doctors!</p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                <img className="w-28" src={groupphoto} alt="/"></img>
                <p>Book your doctor's appointment easily and quickly with just a few clicks!</p>
            </div>
            <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
                Book Appointment <img className="w-3" src={arrow} alt="/"></img>
            </a>
        </div>
        {/*Right side*/}
        <div className="md:w-1/2 relative">
            <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src = {header}></img>
        </div>
    </div>
  )
}
export default Header;