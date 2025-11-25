import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

function Dashboard() {
  return (
    <div className='min-h-screen'>
       {/* Navbar for Recuriter Panel */}
       <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
            <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
            <div className='flex justify-center gap-3 items-center'>
                <p className='max-sm:hidden text-gray-600 font-medium '>Welcome,Al Sadat Company </p>
                <div className='relative group'>
                    <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                        <ul className='list-none m-0 '>
                            <li>Logout</li>
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