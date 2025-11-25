import React, { useState } from 'react'

function AddJobs() {
  const [title,setTitle]=useState<string>('');
  const [location,setLocation]=useState<string>('Bangalore');
  const [category,setCategory]=useState<string>('Programming')
  const [level,setLevel]=useState<string>('Biginner Level')
  const [salary,setSalary]=useState<number>(0);


  return (
    <form action="">

      <div>
        <p>Job Tittl</p>
      <input type="text" />
      </div>
    </form>
  )
}

export default AddJobs