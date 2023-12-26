import { Hamburger } from ".";
import { hamburger } from "../assets/icons";
import { NSS, logoutIcon } from "../assets/images";
import { navLinks } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  const {isLoading,error} = useAuth0();
  const {user, logout , loginWithRedirect, isAuthenticated} = useAuth0();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const isMobile = window.innerWidth <= 767;
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(user,user?.given_name,"AHHHHHHHHHHHHHHH");

  return (
    <header className={`bg-black sticky top-0 bg-gradient-to-bl py-3 z-50 w-[100%] ${scrolled ? 'opacity-30' : '' } ${isHovered ? 'opacity-80' : ''}`} onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} >
      <nav className='flex justify-between items-center max-container'>
        <Link to='/'>
          <img
            src={NSS}
            alt='logo'
            width={50}
            height={40}
            className='m-0 w-[50px] h-[40px]'
          />
        </Link>
        <ul className='flex-1 flex justify-center  items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className='font-montserrat leading-normal text-lg text-white'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading....</p>}
         {!error && !isLoading && !isAuthenticated && <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
         <button onClick={()=>loginWithRedirect()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login / Signup
            </button>
          {/* <span>/</span>
          <a href='/'>Explore now</a> */}
        </div>}
         {!error && !isLoading && isAuthenticated && <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
         <button  onClick={()=>logout()} type="button" className="flex gap-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                
                <img src={logoutIcon} alt="" height='20px' width='20px' />
                {user.given_name}
            </button>
          {/* <span>/</span>
          <a href='/'>Explore now</a> */}
        </div>}
        <div>
        
            <div className='sm:block xs:block lg:hidden'>
              <Hamburger />
            </div>
          
          {/* Other content of your component */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;