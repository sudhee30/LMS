import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/Specialitymenu";
function Home(){
  return(
    <div>
      <h1>
        <Header/>
        <SpecialityMenu/>
      </h1>
    </div>
  )
}
export default Home;