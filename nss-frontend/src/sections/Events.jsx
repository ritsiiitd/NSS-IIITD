
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
        const response = await fetch('http://localhost:8080/api/v1/allEvents',{
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
  return (
    <>
    <div className="flex gap-10 flex-wrap justify-center">
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