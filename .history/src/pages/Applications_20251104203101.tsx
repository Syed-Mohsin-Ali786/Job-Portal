import { useState } from "react";
import Navbar from "../components/Navbar";

function Applications() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2>Your Resume</h2>
        {isEdit ? (
          <>{}</>
        ) : (
          <div className="">
            <a href="">Resume</a>
            <button>Edit</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Applications;
