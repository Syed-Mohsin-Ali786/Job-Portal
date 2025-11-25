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
            {manageJobsData.map(()=>(
              <tr>
                <td>{}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageJobs