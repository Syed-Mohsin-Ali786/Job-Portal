import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

function Dashboard() {
  return (
    <div className='min-h-screen'>
       {/* Navbar for Recuriter Panel */}
       <div>
        <div>
            <img src={assets.logo} alt="" />
            <div>
                <p>Welcome,Al Sadat Company </p>
                <div>
                    <img src={assets.company_icon} alt="" />
                    <div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Dashboard