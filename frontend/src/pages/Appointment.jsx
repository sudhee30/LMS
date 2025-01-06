import React from "react";
import { useEffect,useContext,useParams,useState } from "react";
import { AppContext } from "../context/AppContext";
import  {doctors}  from "../../src/assets/assets/assets_frontend/assets.js"
function Appointment(){
  const{docId} = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo,setDocInfo] = useState(null)
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc=>doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  return(
    <div>
      <div>{/*Doc details*/ }  
    <img src={docInfo.image}></img></div>
    
  </div>
  )
}
export default Appointment;