import React from "react";
import { viewApplicationsPageData } from "../../assets/assets";

function ViewApplication() {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User name</th>
              <th>Job title</th>
              <th>Location</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map(()=>(
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplication;
