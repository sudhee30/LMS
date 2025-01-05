import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App(){
  return(<div className="mx-4 sm:mx -[10%]">
    <NavBar/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/About' element = {<About/>} />
      <Route path = '/Contact' element = {<Contact/>} />
      <Route path = '/Doctors' element = {<Doctors/>} />

      <Route path = '/Doctors/:speciality' element = {<Doctors/>} />
      <Route path = '/Login' element = {<Login/>} />
      <Route path = '/MyAppointments' element = {<MyAppointments/>} />
      <Route path = '/MyProfie' element = {<MyProfile/>} />
      <Route path = '/Appointment/:docId' element = {<Appointment/>} />



    </Routes>
    <Footer/>
  </div> 
  )
}
export default App;