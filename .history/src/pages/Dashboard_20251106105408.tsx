import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='min-h-screen'>
        Dashboard
        <Outlet/>
    </div>
  )
}

export default Dashboard