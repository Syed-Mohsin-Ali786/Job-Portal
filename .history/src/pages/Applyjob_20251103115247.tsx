import { useState } from "react";
import { useParams } from "react-router-dom"


function Applyjob() {
  const {id}=useParams();
  const [jobData,setJobData]=useState(null);
  const fetchJobData=async()=>{
    const data=
  }
  return (
    <div>Applyjob{id}</div>
  )
}

export default Applyjob