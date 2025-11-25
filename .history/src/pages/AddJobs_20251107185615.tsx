import React, { useState } from 'react'

function AddJobs() {
  const [title,setTitle]=useState<string>('');
  const [location,setLocation]=useState<string>('Banglore');


  return (
    <div>AddJobs</div>
  )
}

export default AddJobs