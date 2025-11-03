import React, { useEffect, useState } from "react";
import useContextProvider from "../hooks/useContext";
import {
  assets,
  JobCategories,
  JobLocations,
  type Job,
} from "../assets/assets";
import { type SearchFilter } from "../context/AppContext";
import JobCart from "./JobCart";

function JobListing() {
  const { isSearch, searchFilter, setSearchFilter, jobs } =
    useContextProvider();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const handleRemoveTitle = () => {
    setSearchFilter((prev: SearchFilter) => ({ ...prev, title: "" }));
  };

  const handleRemoveLocation = () => {
    setSearchFilter((prev: SearchFilter) => ({ ...prev, location: "" }));
  };

  useEffect(() => {
    const matchesCategory = (job: Job) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);
    const matchesLocation = (job: Job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);

    const matchesTitle = (job: Job) =>
      searchFilter.title === "" ||
      job.category.toLowerCase().includes(searchFilter.title?.toLowerCase());
      
      
    const matchesSearchLocation = (job: SearchFilter) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location?.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocation, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search Filter */}
        <div>
          {isSearch &&
            (searchFilter.location !== "" || searchFilter.title !== "") && (
              <>
                <h3 className="font-medium text-lg mb-4">Current Search</h3>
                <div className="mb-4 text-gray-600">
                  {searchFilter.title && (
                    <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                      {searchFilter.title}
                      <img
                        onClick={handleRemoveTitle}
                        src={assets.cross_icon}
                        alt="Remove title filter"
                      />
                    </span>
                  )}
                  {searchFilter.location && (
                    <span className="inline-flex ml-2 items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                      {searchFilter.location}
                      <img
                        onClick={handleRemoveLocation}
                        src={assets.cross_icon}
                        alt="Remove location filter"
                      />
                    </span>
                  )}
                </div>
              </>
            )}

          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="px-6 py-1.5 border rounded border-gray-400 lg:hidden"
          >
            {showFilter ? "Close" : "Filters"}
          </button>

          {/* Categorie Filter */}

          <div className={showFilter ? "" : "max-lg:hidden"}>
            <h4 className="font-medium text-lg py-4">Search by Categories</h4>
            <ul className="space-y-4 text-gray-600">
              {JobCategories.map((category, index) => (
                <li className="flex gap-3 items-center" key={index}>
                  <input
                    onChange={() => handleCategoryChange(category)}
                    className="scale-125"
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Location filter */}
          <div className={showFilter ? "" : "max-lg:hidden "}>
            <h4 className="font-medium text-lg py-4 pt-16">
              Search by Location
            </h4>
            <ul className="space-y-4 text-gray-600">
              {JobLocations.map((location, index) => (
                <li className="flex gap-3 items-center" key={index}>
                  <input
                    onChange={() => handleLocationChange(location)}
                    className="scale-125"
                    type="checkbox"
                    checked={selectedLocation.includes(location)}
                  />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Job listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p className="mb-8">Get your desire jobs from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCart key={index} job={job} />
            ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex justify-center items-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt=""
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
              (_, index) => (
                <a href="#job-list" key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`flex justify-center items-center border border-gray-300 rounded w-10 h-10 ${
                      currentPage === index + 1
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-500"
                    }`}
                    key={index}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6))
                  )
                }
                src={assets.right_arrow_icon}
                alt=""
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

export default JobListing;
