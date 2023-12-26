import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
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

const AdminTestimonies = () => {
    const [Testimonies, setTestimonies] = useState([]);
    const [result, showResult] = useState(false);

  const handleClose = () => {
    showResult(false);
  };
  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/testimonies', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setTestimonies(result.data);
          console.log(result.data);
        } else {
          console.error('Failed to fetch Testimonies');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTestimonies();
  }, []);


  const deleteTestimonies = async(TestimoniesId) => {
    try {
        const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/deleteTestimonies/${TestimoniesId}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
        })
        if(response.ok){
            const result = await response.json();
            setTestimonies(result.data);
            // setIsInitialized(true);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        fb:'',
        name:'',
        linkedin:'',
        insta:'',
        github:'',
        image:'',
        value:'',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/createTestimonies', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
                const result = await response.json();
                setTestimonies(result.data);
                setIsLoading(false);
                showResult(true);
                // navigate('/');
            } else {
                console.error('Failed to create Testimonies');
            }
            } catch (error) {
                console.error('Error creating Testimonies', error);
            }
        };

  const handleFormFieldChange = (fieldName, e) =>{//in event of inputting something in the form
    setForm({...form, [fieldName]:e.target.value})
  }


  return (
    <><Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">User Testimonies<span></span></h3>
            <p className='mb-4 text-white'>manage Testimoniess</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
      <Row className='flex justify-center items-center gap-6 mt-4'>
        {/* Map through the Testimonies array */}
        {Testimonies.map((advisor) => (
          
          <Col key={advisor._id} xs={12} sm={6} lg={3}>
            {/* <Link to={`/Testimonies/${advisor._id}`} style={{textDecoration:"none"}}> */}
            <div className=" bg-black single_advisor_profile wow fadeInUp">
              <div className="bg-black advisor_thumb">
                <img src={advisor.image} alt="" />
                {/* Social Info */}
                
              </div>
              {/* Testimonies Details */}
              <div className="single_advisor_details_info">
                <h6>by {advisor.name}</h6>
                <h6 className='truncate'>by {advisor.value}</h6>
                <p className="TestimoniesTitle font-bold">{advisor.title}</p>
                <Button onClick={()=>{deleteTestimonies(advisor._id)}} className='bg-coral-red mt-3 hover:bg-black'>Delete</Button>
              </div>
            </div>
          {/* </Link> */}
          </Col>
        ))}
      </Row>
    </Container>

    <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
    {isLoading && <Loader />}
    <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
    <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new Testimonies</h1>
    </div>
    <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
        <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
        <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new Testimoniess using the following form. </h4>
    </div>


    <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>

        <FormField 
        labelName="Name *"
        placeholder="Testimony by ?"
        inputType="text"
        value={form.name}
        req={true}
        handleChange={(e)=> handleFormFieldChange('name', e)} //used 'name' bcoz its form.name
        />
        

    <div className='flex flex-wrap gap-[40px]'>

        <FormField 
        labelName="Author linkedin profile url"
        placeholder="https://linkedin....."
        inputType="text"
        value={form.linkedin}
        
        handleChange={(e)=> handleFormFieldChange('linkedin', e)}
        />
        <FormField 
        labelName="Author Instagram profile url"
        placeholder="https://instagram....."
        inputType="text"
        value={form.insta}
        handleChange={(e)=> handleFormFieldChange('insta', e)}
        />
        <FormField 
        labelName="Author Github profile url"
        placeholder="https://github....."
        inputType="text"
        value={form.github}
        handleChange={(e)=> handleFormFieldChange('github', e)}
        />
        
    </div>
    
    <FormField 
        labelName="Testimonies content *"
        placeholder="paste content"
        isTextArea
        value={form.value}
        req={true}
        handleChange={(e)=> handleFormFieldChange('value', e)}
        />
        

   
        <FormField 
            labelName="User profile Image *"
            placeholder="Place image URL"
            inputType="url"
            value={form.image}
            req={true}
            handleChange={(e)=> handleFormFieldChange('image', e)}
        />
   

    <div className='flex justify-center items-center mt-[40px]'>
        <CustomButton 
        btnType="submit"
        title="Start campaign"
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
          New Testimonies has been sent successfully — <strong>Thank you!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

export default AdminTestimonies