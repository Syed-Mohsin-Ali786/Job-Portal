import {  useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import useContextProvider from "../hooks/useContext";
import type { Job } from "../assets/assets";


function Applyjob() {
  const {id}=useParams();
  const {jobs}=useContextProvider()
  // const [jobData,setJobData]=useState<Job|null>(null);
 const jobData = useMemo(() => {
    return jobs.find((job: Job) => job._id === id) || null;
  }, [id, jobs]);

  console.log(jobData);
  
 
  return (
    <div>Applyjob{id}</div>
  )
}

export default Applyjob