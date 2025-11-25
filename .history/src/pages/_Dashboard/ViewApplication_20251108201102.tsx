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
              <th className="px-4 py-2 text-left max-sm:hidden">Job title</th>
              <th className="px-4 py-2 text-left max-sm:hidden">Location</th>
              <th className="px-4 py-2 text-left">Resume</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                <td className="px-4 py-2 border-b flex text-center ">
                  <img className="w-8 h-10 rounded-full mr-3 max-sm:hidden" src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
                <td className="px-4 py-2 border-b  max-sm:hidden">{applicant.jobTitle}</td>
                <td className="px-4 py-2 border-b max-sm:hidden">{applicant.location}</td>
                <td className="px-4 py-2 border-b ">
                  <a className="" href="" target="_blank">
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
