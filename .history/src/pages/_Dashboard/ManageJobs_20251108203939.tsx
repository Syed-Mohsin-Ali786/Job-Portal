import React from "react";
import { manageJobsData } from "../../assets/assets";
import moment from "moment";

function ManageJobs() {
  return (
    <div className="container p-8 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm ">
          <thead>
            <tr>
              <th className="">#</th>
              <th className="">Job title</th>
              <th className="">Date</th>
              <th className="">Location</th>
              <th className="">Applicant</th>
              <th className="">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {job.title}</td>
                <td>{moment(job.date).format("ll")}</td>
                <td> {job.location}</td>
                <td> {job.applicants}</td>
                <td>
                  <input type="checked" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJobs;
