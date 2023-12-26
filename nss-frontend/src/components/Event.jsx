import React from 'react'
import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { Link } from 'react-router-dom';
import "./event.css";
const Event = ({eventHeading, eventShortDescription, eventId, eventImage, leftRight,eventDate, organizer}) => {
  return (
    
    <>
      <div className="card " style={{ backgroundImage: `url(${eventImage})` }}>
        <div className="card-content">
          <h2 className="card-title font-palanquin">{eventHeading}</h2>
          <p className="card-body font-palanquin">
            {eventShortDescription}
          </p>
          <Link to={`/events/${eventId}`} className="bg-coral-red font-palanquin text-white button">
            Dive In
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default Event