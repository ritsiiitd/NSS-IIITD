import { useEffect, useState } from "react";
import { Event } from "../components";
const Events = () => {

  const [allEvents,setEvents] = useState([{
    eventID:1,
    name:'Book',
    organiser: 'SA',
    venue: 'LHC',
    date: new Date('2023-12-31'), // Example date
    deadline: new Date('2023-12-02'), // Example deadline
    volunteers: [], // Initialize with an empty array
    picture: 'https://media.istockphoto.com/id/1318198538/photo/woman-puts-donations-in-a-box.jpg?s=612x612&w=0&k=20&c=XWa5VjQmm-5edFpwYP_O9uKa7MDii5SenuqjWCX7UE4=', // Example picture URL
    title: 'We',
    description: 'utlaborum.',
  }]);

  useEffect(()=>{
    const fetchEvents = async() => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/allEvents',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          console.log(result);
          setEvents(result.data);
        }
      } catch (error) {
        
      }
    }
    fetchEvents();
  },[]);


  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // Set animationCompleted to true after the animation duration
    const animationDuration = 1.5; // in seconds
    const timeoutId = setTimeout(() => {
      setAnimationCompleted(true);
    }, animationDuration * 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when the scroll position is greater than a specific value
      const scrollThreshold = 500; // adjust as needed
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div
      className={`flex flex-row justify-start ml-${animationCompleted ? '0' : '[-50px]'}`}
      style={{ transition: 'margin-left 1.5s', borderBottom: '3px solid red' }}
    >
      <div
        className="text-black font-palanquin text-center text-[200%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        &nbsp;
      </div>

      <div
        className="text-black font-palanquin text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        events&nbsp;
      </div>

      <div
        className="text-center font-palanquin text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        .
      </div>
    </div>
    <br /><br /> <br />
    <div className="flex gap-[40px] flex-wrap justify-center">
      {allEvents.map(event => (
        <Event
        key={event.eventID}
        eventHeading={event.name}
        eventShortDescription={event.title}
        eventId={event.eventID}
        eventImage={event.picture}
        leftRight={event.eventID % 2 === 0}
        // eventDate = {event.date}
        organizer = {event.organiser}
        />
        ))}
    </div>
    </>
  );
};

export default Events;