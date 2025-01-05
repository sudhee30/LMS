import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function Doctors(){
  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  const applyFilter=()=>{
    if (speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }

  }

  useEffect(()=>{
    
    applyFilter()
    
  },[doctors,speciality])

  return(
    <div>
      <p className="text-gray-600">
        Browse through the doctors specialist
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p onClick={()=> speciality ==='General physician' ? navigate('/Doctors') : navigate('/Doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General Physician</p>
          <p onClick={()=> speciality ==='Gynecologist' ? navigate('/Doctors') : navigate('/Doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=> speciality ==='Dermatologist' ? navigate('/Doctors') : navigate('/Doctors/Dermatologist ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=> speciality ==='Pediatricians ' ? navigate('/Doctors') : navigate('/Doctors/Pediatricians ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
          <p onClick={()=> speciality ==='Neurologist ' ? navigate('/Doctors') : navigate('/Doctors/Neurologist ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=> speciality ==='Gastroenterologist ' ? navigate('/Doctors') : navigate('/Doctors/Gastroenterologist ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
      
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
        {
          filterDoc.map((item,index) => (
            <div onClick={()=>navigate(`/Appoitment/${item._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"  key={index}>
                <img className="bg-blue-50"src={item.image} alt="/"></img>
                <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                        <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                    </div><p className="text-gray-900 text-lg font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.speciality} </p>
                </div>
            </div>
         
         ))}
    


        
        
    </div>

        
      </div>
    </div>
  )
}
export default Doctors;