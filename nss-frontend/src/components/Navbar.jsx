import { hamburger } from "../assets/icons";
import { NSS } from "../assets/images";
import { navLinks } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";
const Nav = () => {
  const {isLoading,error} = useAuth0();
  const {user, logout , loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <header className='bg-black bg-gradient-to-bl py-3 absolute z-10 w-[100%]'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={NSS}
            alt='logo'
            width={50}
            height={40}
            className='m-0 w-[50px] h-[40px]'
          />
        </a>
        <ul className='flex-1 flex justify-center  items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading....</p>}
         {!error && !isLoading && !isAuthenticated && <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <button onClick={()=>loginWithRedirect()}>
            Login / Sign up
          </button>
          {/* <span>/</span>
          <a href='/'>Explore now</a> */}
        </div>}
         {!error && !isLoading && isAuthenticated && <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <button onClick={()=>logout()}>
            {user.given_name} / Sign out
          </button>
          {/* <span>/</span>
          <a href='/'>Explore now</a> */}
        </div>}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;