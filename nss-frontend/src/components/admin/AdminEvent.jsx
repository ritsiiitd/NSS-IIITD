import React from 'react'
import { useEffect, useState } from "react";
import { Event } from "../../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { createCampaign, money } from '../../assets';
import { CustomButton, FormField, Loader } from '../../components';
import { checkIfImage } from '../../utils';
import { Button } from 'react-bootstrap';

const AdminEvent = () => {


    const [allEvents,setEvents] = useState([{
        eventID:1,
        name:'Book',
        organiser: 'SA',
        venue: 'LHC',
        date: new Date('2023-12-31'), // Example date
        deadline: new Date('2023-12-02'), // Example deadline
        volunteers: [], // Initialize with an empty array
        picture: 'https://media.istockphoto.com/id/1318198538/photo/woman-puts-donations-in-a-box.jpg?s=612x612&w=0&k=20&c=XWa5VjQmm-5edFpwYP_O9uKa7MDii5SenuqjWCX7UE4=', // Example picture URL
        title: 'We are creating new event',
        description: 'utlaborum.',
        }]);
        
        const deleteEvent = async(eventId) => {
        try {
            const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/deleteEvent/${eventId}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
            })
            if(response.ok){
            const result = await response.json();
            setEvents(result.data);
            // setIsInitialized(true);
            }
        } catch (error) {
            console.log(error);
        }
        }

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

    const navigate = useNavigate();//called a hook
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name:'',
    organiser:'',
    venue:'',
    date:'',
    deadline:'',
    volunteers:[],
    picture:'',
    organiserLogo:'',
    description:'', 
    title:'',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/createEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const result = await response.json();
        setEvents(result.data);
        setIsLoading(false);
        // navigate('/');
      } else {
        console.error('Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event', error);
    }
  };

  const handleFormFieldChange = (fieldName, e) =>{//in event of inputting something in the form
    setForm({...form, [fieldName]:e.target.value})
  }

  return (
    <>
    <div
      className={`flex flex-row justify-start ml-${animationCompleted ? '0' : '[-50px]'}`}
      style={{ transition: 'margin-left 1.5s', borderBottom: '3px solid red' }}
    >
      <div
        className="text-white font-palanquin text-center text-[200%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        &nbsp;
      </div>

      <div
        className="text-white font-palanquin text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        manage events&nbsp;
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
            <div className="card " style={{ backgroundImage: `url(${event.picture})` }}>
            <div className="card-content">
            <h2 className="card-title font-palanquin">{event.name}</h2>
            <p className="card-body font-palanquin">
                {event.title}
            </p>
            <Button onClick={()=>{deleteEvent(event._id)}}>Delete</Button>
            </div>
        </div>
        ))}
    </div>
    <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <Loader />}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new Event</h1>
      </div>
      <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
            <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
            <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new events using the following form. </h4>
      </div>

      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
            labelName="Event Name *"
            placeholder="Book Collection Drive"
            inputType="text"
            value={form.name}
            handleChange={(e)=> handleFormFieldChange('name', e)} //used 'name' bcoz its form.name
          />
          
    
    
          <FormField 
            labelName="Event Organiser *"
            placeholder="NGO name"
            inputType="text"
            value={form.organiser}
            handleChange={(e)=> handleFormFieldChange('organiser', e)}
            />
          <FormField 
            labelName="Event Organiser *"
            placeholder="Venue"
            inputType="text"
            value={form.venue}
            handleChange={(e)=> handleFormFieldChange('venue', e)}
            />
        </div>
        <div className='flex flex-wrap gap-[40px]'>
            <FormField 
            labelName="Event Date *"
            placeholder="Date"
            inputType="date"
            value={form.date}
            handleChange={(e)=> handleFormFieldChange('date', e)}
            />
          
          <FormField 
            labelName="Registration Deadline *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e)=> handleFormFieldChange('deadline', e)}
          />
        </div>
        <FormField 
            labelName="Event Description *"
            placeholder="write about your campaign"
            isTextArea
            value={form.description}
            handleChange={(e)=> handleFormFieldChange('description', e)}
          />
        
        <FormField 
            labelName="Event Title *"
            placeholder="write onle line short description"
            inputType="text"
            value={form.title}
            handleChange={(e)=> handleFormFieldChange('title', e)}
          />

        <div className='flex flex-wrap gap-[40px]'>
        <FormField 
            labelName="Event Image *"
            placeholder="Place image URL"
            inputType="url"
            value={form.picture}
            handleChange={(e)=> handleFormFieldChange('picture', e)}
          />
        <FormField 
            labelName="Organiser logo Image *"
            placeholder="Place image URL"
            inputType="url"
            value={form.organiserLogo}
            handleChange={(e)=> handleFormFieldChange('organiserLogo', e)}
          />
          </div>

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton 
            btnType="submit"
            title="Start campaign"
            styles="bg-[#1dc071]"
          />
          
        </div> 
      </form>

    </div>
    </>
  )
}

export default AdminEvent