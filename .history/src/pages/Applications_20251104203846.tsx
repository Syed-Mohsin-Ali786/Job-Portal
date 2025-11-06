import { useState } from "react";
import Navbar from "../components/Navbar";

function Applications() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3 ">
          {isEdit ? (
            <>
            <label htmlFor="">
              <p>Select Resume</p>
              
            </label>
            
            </>
          ) : (
            <div className="flex gap-2 ">
              <a className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl" href="">Resume</a>
              <button onClick={()=>setIsEdit(true)} className="text-gray-500 border border-gray-300 rounded-xl px-4 py-2">Edit</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Applications;
