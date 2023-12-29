import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import { logoutIcon } from '../assets/images';

export default function App() {
  const [showAnimated, setShowAnimated] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);
  const {user, logout , loginWithRedirect, isAuthenticated} = useAuth0();
  const {isLoading,error} = useAuth0();
  const roleURL = import.meta.env.VITE_ROLES_URL
  const isAdmin = user && user[roleURL]?.includes('Admin');
  const closeHamburger = () => {
    setShowAnimated2(false); // Close the hamburger
  };

  return (
    <>
      

      <section  className=' mb-3'>
        <MDBNavbar onClick={() => setShowAnimated2(!showAnimated2)} className='cursor-pointer' dark bgColor='dark'>
          <MDBContainer  fluid>
            <MDBNavbarToggler
              type='button'
              className='second-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              
            >
              <MDBIcon icon='bars' />
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated2} className=' bg-black'>
          <div className='bg-light flex flex-col gap-2 bg-black shadow-3 p-4'>
          <Link to='/'  className='text-white'>
          <button onClick={()=>{closeHamburger()}} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Home
          </button>
            </Link>
          <Link to='/gallery'  className='text-white'>
          <button type="button" onClick={()=>{closeHamburger()}} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Gallery
          </button>
          </Link>
          <Link to='/about-us'  className='text-white'>
          <button type="button" onClick={()=>{closeHamburger()}} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            About us
          </button>
          </Link>
          <Link to='/contact-us'  className='text-white'>
          <button type="button" onClick={()=>{closeHamburger()}} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Contact us
          </button>
          </Link>
          <Link to='/team'  className='text-white'>
          <button type="button" onClick={()=>{closeHamburger()}} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Team
          </button>
          </Link>
          {isAdmin && 
          <Link to='/admin/Home'  className='  text-white'>
          <button type="button" onClick={()=>{closeHamburger()}} className="text-white w-full bg-emerald-600 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">
            Admin Dashboard
          </button>
          </Link>
          }
        
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading....</p>}
         {!error && !isLoading && !isAuthenticated && 
            <button onClick={()=>loginWithRedirect()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login / Signup
            </button>
        }  
        {!error && !isLoading && isAuthenticated && user.email_verified &&
            <button  onClick={()=>logout()} type="button" className="flex gap-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                
                <img src={logoutIcon} alt="" height='20px' width='20px' />
                {user.given_name}
            </button>
          
        }
        {!error && !isLoading && isAuthenticated && !user.email_verified &&
            <button  onClick={()=>logout()} type="button" className="flex gap-2 text-white bg-green-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                
                <img src={logoutIcon} alt="" height='20px' width='20px' />
                Please verify your email Address
                {user.given_name}
            </button>
          
        }
        
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}