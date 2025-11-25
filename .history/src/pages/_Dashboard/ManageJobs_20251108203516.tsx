import React from 'react'
import { manageJobsData } from '../../assets/assets'

function ManageJobs() {
  return (
    <div>
      <div>
        <table>
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
            {manageJobsData.map((job,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td> {job.title}</td>
                <td> {job.date}</td>
                <td> {job.location}</td>
                <td> {job.applicants}</td>
                <td>
                  <input type="ch" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageJobs