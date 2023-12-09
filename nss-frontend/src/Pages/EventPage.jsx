import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IIITD_1 } from '../assets/images';
import { CustomButton,CountBox, Loader } from "../components";
import { useAuth0 } from "@auth0/auth0-react";


const EventPage = () => {

  const {user, logout , loginWithRedirect, isAuthenticated} = useAuth0();
  const {isLoading,error} = useAuth0();
  const { state } = useLocation();
  const { eventId } = useParams();
  
  const [isUserVolunteer, setIsUserVolunteer] = useState(false);
  const [event, setEvent] = useState(null);
  const [isLoadingEvent, setIsLoadingEvent] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoadingEventAuth, setIsLoadingEventAuth] = useState(true);

  function formatMongoDate(dateString) {

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }


  function getDaysUntilDate(targetDate) {
    // Parse the target date string into a Date object
    const targetDateTime = new Date(targetDate);
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds
    const timeDifference = targetDateTime.getTime() - currentDate.getTime();
  
    // Calculate the number of days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }

  const registerVolunteer = async () =>{
    try {
      const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/registerVolunteer/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user}),
      });

      if (response.ok) {
        // Handle success, maybe show a success message
        setIsUserVolunteer(true);
        alert('Registration successful');
      } else {
        // Handle errors
        console.error('Registration failed. Server returned:', response.status, response.message);
      }
    } catch (error) {
      console.error('Error during registration', error);
      alert('Error during registration', error);
    }
    finally{
      fetchEvents();
    }
  };

  const fetchEvents = async() => {
    try {
      const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/eventPage/${eventId}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
      })
      if(response.ok){
        const result = await response.json();
        setEvent(result.data);
        console.log(result.data);
        setIsInitialized(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Fetch event details using eventId (make an API call or use your data source)
    // Update the state with the event details
    fetchEvents();
  }, [eventId]);

  useEffect(() => {
    if (isInitialized && event.length > 0) {
      const userId = user?.sub;

      if (userId && event[0]?.volunteers.includes(userId)) {
        setIsUserVolunteer(true);
      } else {
        setIsUserVolunteer(false);
      }
    }
  }, [isInitialized, event, user]);

  if (event === null || isLoading) {
    return <Loader />;
  }
  return (
    <div className='padding'>
      {isLoadingEvent && <Loader />}

      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img src={event[0]?.picture} alt="campaign" className='w-full h-[410px] object-cover rounded-x1'/>
          <div className='relative w-full h-[5px] bg-[#3a3a43]'>
            
          </div>
        </div>

        <div className='flex flex-wrap md:w-[150px] w-full justify-between gap-[30px]'>
          <CountBox title="Days Left" value={getDaysUntilDate(event[0]?.date)} />
          <CountBox title={'No. of Volunteers'} value={event[0]?.volunteers.length} />
          <CountBox title="Registeration deadline" value={getDaysUntilDate(event[0]?.deadline)} />
        </div>
      </div>

      <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
        <div className='flex-[2] flex flex-col gap-[40px] '>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-black
            uppercase'>Organised by : </h4>
            <div className='mt-[20px] flex flex-wrap flex-row items-center gap-[14px]'>
              <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer'>
                <img src ={event[0]?.organiserLogo} alt='logo' className='w-[60%] h-[60%] object-contain'/>
                
              </div>
              <div>
                <h4 className='font-epilogue font-semibold text-[25px] text-black break-all
                '>{event[0]?.organiser}</h4>
                <p>on {formatMongoDate(event[0]?.date)}</p>
              </div>
            </div>
          </div>


          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-black  
            uppercase'>Venue 
              <p className='font-epilogue font-normal text-[16px] leading-[26px] text-justify
              text-[#808191]'>
                {event[0]?.venue}
              </p>
            </h4>
            
          </div>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-black  
            uppercase'>Story </h4>
            
            <div className='mt-[20px]'>
              <p className='font-epilogue font-normal text-[16px] leading-[26px] text-justify
              text-[#808191]'>
                {event[0]?.description}
              </p>

            </div>
          </div>

          
        </div>
        
        {isAuthenticated && !isUserVolunteer && getDaysUntilDate(event[0]?.deadline)>=0 && <div className="flex-1">
          {/* <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>    */}

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Volunteer Registration
            </p>
            <div className="mt-[10px]">
        
              <div className="mt-[1px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="mt-[10px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the initiative for no reward, just because it speaks to you.</p>
              </div>

              <CustomButton 
                btnType="button"
                title="Register Yourself as Volunteer"
                styles="w-full mt-[10px] bg-[#4BB543]"
                handleClick={registerVolunteer}
              />
            </div>
          </div>
        </div>}
        
        {isAuthenticated && isUserVolunteer && <div className="flex-1">
          {/* <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>    */}

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Volunteer Registration
            </p>
            <div className="mt-[10px]">
        
              
              <CustomButton 
                btnType="button"
                title="Registered !!"
                styles="w-full mt-[10px] bg-[#860A35]"
              />
            </div>
          </div>
        </div>}
        {isAuthenticated && !isUserVolunteer && getDaysUntilDate(event[0]?.deadline)<0 && <div className="flex-1">
          {/* <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>    */}

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Volunteer Registration
            </p>
            <div className="mt-[10px]">
        
              
              <CustomButton 
                btnType="button"
                title="Deadline Over !!"
                styles="w-full mt-[10px] bg-[#860111]"
              />
            </div>
          </div>
        </div>}

        {!isAuthenticated && <div className="flex-1">
          {/* <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>    */}

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Volunteer Registration
            </p>
            <div className="mt-[10px]">
        
              <div className="mt-[2px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">You need to signUp before proceeding</h4>
              </div>

              <CustomButton 
                btnType="button"
                title="Login"
                styles="w-full mt-[10px] bg-[#8c6dfd]"
                handleClick={() => loginWithRedirect()}
              />
            </div>
          </div>
        </div>}
        
      </div>
    </div>
      
  )
}

export default EventPage