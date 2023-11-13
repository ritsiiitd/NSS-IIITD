import React from 'react'
import { shoe8 } from "../assets/images";
import { Button } from "../components";
const Event = ({eventHeading, eventShortDescription, eventId, eventImage, leftRight,eventDate, organizer}) => {
    console.log(leftRight);
  return (
    <>
    {!leftRight && (
    <section
      id='about-us'
      className='flex bg-rose-200 justify-between items-center gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold'>
          {eventHeading}
          <span className='text-coral-red'> {organizer} </span>
          <span className='text-coral-red'> on </span> {eventDate}
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          {eventShortDescription} 
        </p>
        
        <div className='mt-11'>
          <Button label='View details' />
        </div>
        
      </div>

      <div className='xl:flex-1 hidden xl:flex xl:justify-center xl:items-center lg:flex-1 lg:flex lg:justify-center lg:items-center'>
        <img
          src={eventImage}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
        
      </div>
      
    </section>)}
    {!leftRight && (<>
    <br /><br /><br /></>)}

    {leftRight && (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-[25%] w-full max-container'
    >
        <div className='xl:flex-1 hidden xl:flex xl:justify-center xl:items-center lg:flex-1 lg:flex lg:justify-center lg:items-center'>
        <img
          src={eventImage}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold'>
          {eventHeading}
          <span className='text-coral-red'> {organizer} </span>
          <span className='text-coral-red'> on </span> {eventDate}
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          {eventShortDescription}
        </p>

        <div className='mt-11'>
          <Button label='View details' />
        </div>
      
      </div>
      
    </section>
    )}
    {leftRight && (<>
    <br /><br /><br /></>)}
      </>
  )
}

export default Event