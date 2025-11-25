import React, { useState } from 'react'

function AddJobs() {
  const [title,setTitle]=useState<string>('');
  const [location,setLocation]=useState<string>('Bangalore');
  const [category,setCategory]=useState<string>('Programming')
  const [level,setLevel]=useState<string>('Biginner Level')
  const [category,setCategory]=useState<string>('0')


  return (
    <div>AddJobs</div>
  )
}

export default AddJobs