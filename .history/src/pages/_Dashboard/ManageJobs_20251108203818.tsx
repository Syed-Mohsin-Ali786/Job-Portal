import React from "react";
import { manageJobsData } from "../../assets/assets";
import moment from "moment";

function ManageJobs() {
  return (
    <div className="container p-8 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr>
              <th>#</th>
              <th>Job title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Applicant</th>
              <th>Visible</th>
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
