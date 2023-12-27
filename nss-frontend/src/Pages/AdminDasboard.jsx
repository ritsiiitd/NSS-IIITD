import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom'
import { AdminBlog, AdminCollaborations, AdminEvent, AdminFAQ, AdminGallery, AdminGalleryPage, AdminTeam, AdminTestimonies, Sidebar, UserList } from '../components'
import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import AccessDenied from './AccessDenied';
const AdminDasboard = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const roleURL = import.meta.env.VITE_ROLES_URL
  const isAdmin = user && user[roleURL]?.includes('Admin');
  console.log("user is admin??", isAdmin);
  if (!isAdmin) {
    return (<AccessDenied/>);
  }

  return (
 
    <div className='relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex mr-10 relative'>
        <Sidebar />
      </div>
      <div className='flex-grow'>
        <Routes>
          <Route path="/admin/*" element={<AdminDasboard />} />
          <Route path="/adminEvent" element={<AdminEvent />} />
          <Route path="/adminBlog" element={<AdminBlog />} />
          <Route path="/adminTestimonies" element={<AdminTestimonies />} />
          <Route path="/adminCollaborations" element={<AdminCollaborations />} />
          <Route path="/adminFAQ" element={<AdminFAQ />} />
          <Route path="/adminGallery" element={<AdminGallery />} />
          <Route path="/adminTeam" element={<AdminTeam />} />
          <Route path="/adminGallery/adminGalleryof/:galleryId" element={<AdminGalleryPage/>}></Route>
        </Routes>
      </div>
      <UserList/>
    </div>
  )
}

export default AdminDasboard