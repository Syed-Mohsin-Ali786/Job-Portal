import React from "react";
import { assets, type Job } from "../assets/assets";


function JobCart({ job }: { job: Job }) {
  return (
    <div className="border  p-6 shadow rounded">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center mt-2 gap-3 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">{job.location}</span>
        <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">{job.level}</span>
        </div>
        <p className="text-gray-500 mt-4 text-sm"
          dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
          ></p>
          <div className="mt-4 flex gap-4 text-sm">
          <button className="rounded bg-blue-600 px-4 py-2 text-white">Apply Now</button>
          <button className="border text-gray-500 border-gray-500 rounded px-4 py-2">Learn More</button>
      </div>
    </div>
  );
}

export default JobCart;
