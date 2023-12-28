import React from 'react'
import { useEffect, useState } from "react";
import { Event } from "../../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { createCampaign, money } from '../../assets';
import { CustomButton, FormField, Loader } from '../../components';
import { checkIfImage } from '../../utils';
import { Button, Col, Row } from 'react-bootstrap';

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

  // Function to call the backend API and download the Excel file
const downloadVolunteerList = async (eventId) => {
  try {
    // Make a GET request to the backend API to download the volunteer list Excel file
    const response = await fetch(`http://localhost:8080/api/v1/downloadVolunteerList/${eventId}`, {
      method: 'GET',
    });

    // Check if the request was successful
    if (response.ok) {
      // Convert the response to a blob
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create a link element
      const link = document.createElement('a');
      link.href = url;

      // Set the filename for the downloaded file
      link.setAttribute('download', `volunteer_list_${eventId}.xlsx`);

      // Append the link to the body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } 
    // else {
    //   // Handle the error if the request was not successful
    //   console.error('Failed to download the volunteer list');
    // }
  } catch (error) {
    // Handle any network or other errors
    console.error('An error occurred while downloading the volunteer list', error);
  }
};

// Call the function with the event ID
// const eventId = 'your_event_id'; // Replace with the actual event ID
// downloadVolunteerList(eventId);

  return (
    <>
    <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">NSS events<span></span></h3>
            <p className='mb-4 text-white'>manage events</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
    <br /><br /> <br />
    <div className="flex gap-[40px] flex-wrap justify-center">
      {allEvents.map(event => (
            <div className="card " style={{ backgroundImage: `url(${event.picture})` }}>
            <div className="card-content">
            <h2 className="card-title font-palanquin">{event.name}</h2>
            
            <Button className=' bg-violet-500 hover:bg-red-600' onClick={()=>{deleteEvent(event._id)}}>Delete</Button>
            <Button className='mt-4 bg-green-700 hover:bg-pink-600' onClick={()=>{downloadVolunteerList(event._id)}}>Download Volunteer List</Button>
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