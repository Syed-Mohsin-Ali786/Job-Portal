import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContextProvider from "../hooks/useContext";
import { assets, type Job } from "../assets/assets";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import kconvert from "k-convert";
import moment from "moment";
import JobCart from "../components/JobCart";
import Footer from "../components/Footer";

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
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container  px-4 2xl:px-20 max-auto">
        <div className="bg-white text-black rounded w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border "
                src={assets.company_icon}
                alt=""
              />

              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {jobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                  </span>
                  {jobData.companyId.name}
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                  </span>
                  {jobData.location}
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                  </span>
                  {jobData.level}
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center ">
              <button className="bg-blue-600 p-2.5 px-10 text-white rounded">
                Apply Now
              </button>
              <p className="mt-1 text-gray-600">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:flex-row items-start">
            <div className="w-full lg:w-2/4">
              <h2 className="font-bold text-2xl sm:4xl mb-4">
                Job description
              </h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              />
              <button className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10">
                Apply Now
              </button>
            </div>

            {/* More Jobs */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h2>More jobs rom {jobData.companyId.name}</h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== jobData._id &&
                    job.companyId._id === jobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 4)
                .map((job, index) => (
                  <JobCart key={index} job={job} />
                ))};
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Applyjob;
