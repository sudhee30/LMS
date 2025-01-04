import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/Specialitymenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
function Home(){
  return(
    <div>
      <h1>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
      </h1>
    </div>
  )
}
export default Home;