import React from 'react'
import { shoe8 } from "../assets/images";
import { Button } from "../components";
const Event = ({eventHeading, eventShortDescription, eventId, eventImage, leftRight}) => {
    console.log(leftRight);
  return (
    <>
    {!leftRight && (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Event 1
          <span className='text-coral-red'> NGO name </span>
          <span className='text-coral-red'> and </span> date
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='xl:flex-1 hidden xl:flex xl:justify-center xl:items-center lg:flex-1 lg:flex lg:justify-center lg:items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
        <br />
      <br />
      <br />
      </div>
      
    </section>)}

    {leftRight && (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
        <div className='xl:flex-1 hidden xl:flex xl:justify-center xl:items-center lg:flex-1 lg:flex lg:justify-center lg:items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Event 2
          <span className='text-coral-red'> NGO name </span>
          <span className='text-coral-red'>and </span> Date
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non necessitatibus voluptas, mollitia error corporis nemo vitae perspiciatis animi! Voluptatibus dolores alias numquam. Unde iste, dolorum sunt nihil labore itaque consequatur.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
        <br />
      <br />
      <br />
      </div>
    </section>
    )}
      </>
  )
}

export default Event