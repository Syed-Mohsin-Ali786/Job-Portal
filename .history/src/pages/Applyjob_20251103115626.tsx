import {  useState } from "react";
import { useParams } from "react-router-dom"
import useContextProvider from "../hooks/useContext";


function Applyjob() {
  const {id}=useParams();
  const {jobs}=useContextProvider()
  const [jobData,setJobData]=useState(null);
  const fetchJobData=async()=>{
    const data=jobs.filter((job)=>job._id===id);
   if(data.length!==0){
    setJobData(data[0]);
    
   }
  }
  return (
    <div>Applyjob{id}</div>
  )
}

export default Applyjob