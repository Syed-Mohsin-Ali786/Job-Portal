import React from "react";
import { assets, viewApplicationsPageData } from "../../assets/assets";

function ViewApplication() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="border-b ">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">User name</th>
              <th className="px-4 py-2 text-left">Job title</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Resume</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
                <td>{applicant.jobTitle}</td>
                <td>{applicant.location}</td>
                <td>
                  <a href="" target="_blank">
                    Resume <img src={assets.resume_download_icon} alt="" />
                  </a>
                </td>
                <td>
                  <div>
                    <button>...</button>
                    <div>
                      <button>Accept </button>
                      <button>Decline </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplication;
