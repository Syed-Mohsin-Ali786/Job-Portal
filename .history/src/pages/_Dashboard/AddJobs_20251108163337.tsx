import React, { useRef, useState } from "react";

function AddJobs() {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("Bangalore");
  const [category, setCategory] = useState<string>("Programming");
  const [level, setLevel] = useState<string>("Biginner Level");
  const [salary, setSalary] = useState<number>(0);

  const editRef=useRef();
  const quill=

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
        <div></div>
      </div>
    </form>
  );
}

export default AddJobs;
