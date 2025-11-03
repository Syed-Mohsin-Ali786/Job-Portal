import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContextProvider from "../hooks/useContext";
import type { Job } from "../assets/assets";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

function Applyjob() {
  const { id } = useParams();
  const { jobs } = useContextProvider();
  const [jobData, setJobData] = useState<Job | null>(null);

  useEffect(() => {
    if (jobs.length > 0) {
      const fetchJobData = async () => {
        const data = jobs.filter((job: Job) => job._id === id);
        if (data.length !== 0) {
          setJobData(data[0]);
          console.log(data[0]);
        }
      };
      fetchJobData();
    } else {
      console.log("no data found");
    }
  }, [id, jobs]);
  return jobData ? (
   <>
   <Navbar/>
   </>
  ) : (
    <Loader/>
  );
}

export default Applyjob;
