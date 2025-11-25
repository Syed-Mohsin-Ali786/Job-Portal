import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";

function AddJobs() {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("Bangalore");
  const [category, setCategory] = useState<string>("Programming");
  const [level, setLevel] = useState<string>("Biginner Level");
  const [salary, setSalary] = useState<number>(0);

  const editRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<InstanceType<typeof Quill> | null>(null);

  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form action="">
      <div>
        <p>Job Title</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>
      <div>
        <p>Job description</p>
        <div ref={editRef}  ></div>
      </div>

      <div>
        <div>
          <p>Job Categoriy</p>
          <select onChange={e=>set}></select>
        </div>
      </div>
    </form>
  );
}

export default AddJobs;
