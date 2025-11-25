import React, { useState } from 'react'

function AddJobs() {
  const [title,setTitle]=useState<string>('');
  const [location,setLocation]=useState<string>('');
  

  return (
    <div>AddJobs</div>
  )
}

export default AddJobs