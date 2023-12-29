
// import React from 'react'
import React, { useState,useEffect } from 'react'
import { Button, Card } from 'flowbite-react';
import { Dept } from "../../components";
import { education,health,skill,environment } from "../../assets/images";
import { Col, Row } from 'react-bootstrap';
import '../../components/Dept.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { createCampaign, money } from '../../assets';
import { CustomButton, FormField, Loader } from '../../components';
import { checkIfImage } from '../../utils';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const AdminCollaborations = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [seen, setSeen] = useState(false)
  const [seen1, setSeen1] = useState(false)
  const [seen2, setSeen2] = useState(false)
  const [seen3, setSeen3] = useState(false)
  function togglePop () {
      setSeen(!seen);
  };
  function togglePop2 () {
      setSeen2(!seen2);
  };
  function togglePop3 () {
      setSeen3(!seen3);
  };
  function togglePop1 () {
      setSeen1(!seen1);
  };

  
const Popup = (props) => {


  function handleLogin(e) {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  }

  return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {props.org.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem className='gap-4' alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.image} />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {item.contactPerson}
                </Typography>
                {item.desc}
              </React.Fragment>
              
            }
            />
            <Button onClick={()=>{deleteCollaboration(props.depID,item._id)}} className='bg-coral-red mt-3 hover:bg-black'>Delete</Button>
        </ListItem>
        {index < props.org.length - 1 && <Divider variant="inset" component="li" />}
      </React.Fragment>
    ))}
  </List>
  )
}

  const [Collaboration, setCollaboration] = useState([]);
  const [result, showResult] = useState(false);

  const handleClose = () => {
  showResult(false);
  };



  const deleteCollaboration = async (departmentId, organizationId) => {
    try {
      const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/deleteCollaboration/${departmentId}/${organizationId}`, {
        method: 'GET', // Use DELETE method for deleting resources
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        // Handle the result as needed
        setDepartments(result.data);
      } else {
        console.error('Failed to delete collaboration');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
      desc:'',
      name:'',
      image:'',
      domain:''
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/createCollaboration', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
      });

      if (response.ok) {
              const result = await response.json();
              setDepartments(result.data);
              setIsLoading(false);
              showResult(true);
              // navigate('/');
          } else {
              console.error('Failed to create Collaboration');
          }
          } catch (error) {
              console.error('Error creating Collaboration', error);
          }
      };

    const handleFormFieldChange = (fieldName, e) =>{//in event of inputting something in the form
    setForm({...form, [fieldName]:e.target.value})
    }

    const handleDomainChange = (selectedDomain) => {
      setForm({ ...form, domain: selectedDomain });
    }

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/collaborationList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setDepartments(result.data);
        } else {
          console.error('Failed to fetch departments');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <>
    <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">Event Collaborations<span></span></h3>
            <p className='mb-4 text-white'>manage Collaborations</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
     <div className='mt-[30px]'>
      
      <br />
      <br />
      <div className='sm:flex sm:flex-col flex-row gap-4'>
      <>
        <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
            <div className="cet3m">

                <img onClick={togglePop} className="crs2d cjkjb max-w-[500px] max-h-[500px] flex justify-center items-center" src={education} width="100" height="100" alt="dona"/>
                {seen ? <Popup toggle={togglePop} depID={departments[0]?._id} org={departments[0]?.organisations} /> : null}
            </div>
        </div>
        </>
      <>
        <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
            <div className="cet3m">

                <img onClick={togglePop1} className="crs2d cjkjb max-w-[500px] max-h-[500px] flex justify-center items-center" src={health} width="100" height="100" alt="dona"/>
                {seen1 ? <Popup toggle={togglePop1} depID={departments[1]?._id} org={departments[1]?.organisations} /> : null}
            </div>
        </div>
        </>
      <>
        <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
            <div className="cet3m">

                <img onClick={togglePop2} className="crs2d cjkjb max-w-[500px] max-h-[500px] flex justify-center items-center" src={skill} width="100" height="100" alt="dona"/>
                {seen2 ? <Popup toggle={togglePop2} depID={departments[2]?._id} org={departments[2]?.organisations} /> : null}
            </div>
        </div>
        </>
      <>
        <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
            <div className="cet3m">

                <img onClick={togglePop3} className="crs2d cjkjb max-w-[500px] max-h-[500px] flex justify-center items-center" src={environment} width="100" height="100" alt="dona"/>
                {seen3 ? <Popup toggle={togglePop3} depID={departments[3]?._id} org={departments[3]?.organisations} /> : null}
            </div>
        </div>
        </>

      </div>
     </div>


     <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
    {isLoading && <Loader />}
    <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
    <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new Collaboration</h1>
    </div>
    <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
        <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
        <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new Collaborations using the following form. </h4>
    </div>


    <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>

      <label className='text-white' htmlFor="cars">Choose a domain:</label>
      
      <select value={form.domain} onChange={(e) => handleDomainChange(e.target.value)} className='bg-gray-700 text-white' id="cars" name="cars">
        <option value="">Select a domain</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
        <option value="Skill">Skill</option>
        <option value="Environment">Environment</option>
      </select>
        <FormField 
        labelName="Name *"
        placeholder="Collaboration name"
        inputType="text"
        value={form.name}
        req={true}
        handleChange={(e)=> handleFormFieldChange('name', e)} //used 'name' bcoz its form.name
        />

        <FormField 
        labelName="Brief Description *"
        placeholder="Write about organisation"
        inputType="text"
        value={form.desc}
        req={true}
        handleChange={(e)=> handleFormFieldChange('desc', e)} //used 'name' bcoz its form.name
        />
        

    
    
       

   
        <FormField 
            labelName="Organisation profile logo *"
            placeholder="Place logo image URL"
            inputType="url"
            value={form.image}
            req={true}
            handleChange={(e)=> handleFormFieldChange('image', e)}
        />
   

    <div className='flex justify-center items-center mt-[40px]'>
        <CustomButton 
        btnType="submit"
        title="Add Collaboration"
        styles="bg-[#1dc071]"
    />
        
    </div> 
    </form>

    </div>

    <Snackbar
        open={result}
        autoHideDuration={5000} // Adjust the duration (in milliseconds) as needed
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Success</AlertTitle>
          New Collaboration has been saved successfully — <strong>Thank you!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

export default AdminCollaborations