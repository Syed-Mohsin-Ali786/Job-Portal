import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../../assets/assets";
import axios, { isAxiosError } from "axios";
import useContextProvider from "../../hooks/useContext";
import { toast } from "react-toastify";

function AddJobs() {
  const { backendUrl, companyToken } = useContextProvider();
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("Bangalore");
  const [category, setCategory] = useState<string>("Programming");
  const [level, setLevel] = useState<string>("Beginner Level");
  const [salary, setSalary] = useState<number>(0);

  const editRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<InstanceType<typeof Quill> | null>(null);
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const description = quillRef.current?.root.innerHTML;
      const { data } = await axios.post(
        `${backendUrl}/api/company/post-job`,
        {
          title,
          salary,
          category,
          level,
          location,
          description,
        },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setSalary(0);
        if (quillRef.current) {
          quillRef.current.root.innerHTML = "";
        }
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
  };

  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form className="container p-4 flex flex-col w-full items-start gap-3" onSubmit={onSubmitHandler}>
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          className="w-full max-w-lg px-3 py-2 border-2 rounded border-gray-300"
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title||''}
          required
        />
      </div>
      <div className="w-full max-w-lg">
        <p className="my-2">Job description</p>
        <div ref={editRef}></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded text-gray-700"
            onChange={(e) => setCategory(e.target.value)}
            value={category||"Programming"}
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded text-gray-700"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded text-gray-700"
            onChange={(e) => setLevel(e.target.value)}
            value={level||"Beginner level"}
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Advance level">Advance level</option>
          </select>
        </div>
      </div>
      <div>
        <p className="mb-2">Job Salary </p>
        <input
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(Number(e.target.value))}
          type="number"
          value={salary||""}
          min={0}
          placeholder="2500"
        />
      </div>
      <button className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  );
}

export default AddJobs;
