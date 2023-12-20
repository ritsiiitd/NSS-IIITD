import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { AdminEvent, Sidebar } from '../components'
import React from 'react'

const AdminDasboard = () => {
  return (
 
    <div className='relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex mr-10 relative'>
        <Sidebar />
      </div>
      <div className='flex-grow'>
        <Routes>
          <Route path="/admin/*" element={<AdminDasboard />} />
          <Route path="/adminEvent" element={<AdminEvent />} />
          {/* <Route path="/path3" element={<Component3 />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  )
}

export default AdminDasboard