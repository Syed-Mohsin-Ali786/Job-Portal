import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useContextProvider from "../../hooks/useContext";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { type Job } from "../../assets/assets";
import Loader from "../../components/Loader";

function ManageJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const { backendUrl, companyToken } = useContextProvider();
  // function to fetch companydata
  const fetchCompanyData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/company/list-jobs`, {
        headers: { token: companyToken },
      });
      if (data.success) {
        setJobs(data.jobsData.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unExpected Erorr");
    }
  }, [companyToken, backendUrl]);

  const jobVisibilityFunction = async (id: string) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/company/change-visibility`,
        { id },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchCompanyData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
      }
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken, fetchCompanyData]);
  return jobs ? (
    jobs.length === 0 ? (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl sm:text-2xl">No jobs Available or Posted</p>
      </div>
    ) : (
      <div className="container p-8 max-w-5xl">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left max-sm:hidden">
                  #
                </th>
                <th className="py-2 px-4 border-b text-left">Job title</th>
                <th className="py-2 px-4 border-b text-left max-sm:hidden">
                  Date
                </th>
                <th className="py-2 px-4 border-b text-left max-sm:hidden">
                  Location
                </th>
                <th className="py-2 px-4 border-b text-center">Applicant</th>
                <th className="py-2 px-4 border-b text-left">Visible</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b"> {job.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {job.applicants}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      onChange={() => jobVisibilityFunction(job._id)}
                      className="scale-125 ml-4"
                      type="checkbox"
                      checked={job.visible}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => navigate("/dashboard/add-job")}
            className="bg-black text-white py-2 px-4 rounded cursor-pointer"
          >
            Add new Job
          </button>
        </div>
      </div>
    )
  ) : (
    <Loader />
  );
}

export default ManageJobs;
