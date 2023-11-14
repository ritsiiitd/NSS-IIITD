import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const EventPage = () => {
  console.log("Effect triggered");
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  console.log("Event ID is ", eventId);
  useEffect(() => {
    // Fetch event details using eventId (make an API call or use your data source)
    // Update the state with the event details
    const fetchEvents = async() => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/eventPage/${eventId}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          // console.log(result);
          setEvent(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, [eventId]);

  return (
    <div>EventPage,</div>
  )
}

export default EventPage