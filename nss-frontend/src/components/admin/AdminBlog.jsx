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

const AdminBlog = () => {
    const [blog, setblog] = useState([]);
    const [result, showResult] = useState(false);

  const handleClose = () => {
    showResult(false);
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setblog(result.data);
          console.log(result.data);
        } else {
          console.error('Failed to fetch blog');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogs();
  }, []);


  const deleteBlog = async(blogId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/deleteBlog/${blogId}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
        })
        if(response.ok){
            const result = await response.json();
            setblog(result.data);
            // setIsInitialized(true);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        author:'',
        linkedin:'',
        title:'',
        photo:'',
        content:'',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('http://localhost:8080/api/v1/createBlog', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
                const result = await response.json();
                setblog(result.data);
                setIsLoading(false);
                showResult(true);
                // navigate('/');
            } else {
                console.error('Failed to create blog');
            }
            } catch (error) {
                console.error('Error creating blog', error);
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
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">Blog Posts <span></span></h3>
            <p className='mb-4 text-white'>manane Blogs</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
      <Row className='flex justify-center items-center gap-6 mt-4'>
        {/* Map through the blog array */}
        {blog.map((advisor) => (
          
          <Col key={advisor._id} xs={12} sm={6} lg={3}>
            {/* <Link to={`/blog/${advisor._id}`} style={{textDecoration:"none"}}> */}
            <div className=" bg-black single_advisor_profile wow fadeInUp">
              <div className="bg-black advisor_thumb">
                <img src={advisor.photo} alt="" />
                {/* Social Info */}
                
              </div>
              {/* blog Details */}
              <div className="single_advisor_details_info">
                <h6>{advisor.author}</h6>
                <p className="blogTitle font-bold">{advisor.title}</p>
                <Button onClick={()=>{deleteBlog(advisor._id)}} className='bg-coral-red mt-3 hover:bg-black'>Delete Blog</Button>
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
    <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new Blog</h1>
    </div>
    <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
        <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
        <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new Blogs using the following form. </h4>
    </div>

    <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>
    <div className='flex flex-wrap gap-[40px]'>
        <FormField 
        labelName="Author Name *"
        placeholder="Funsuk wangdu"
        inputType="text"
        value={form.author}
        handleChange={(e)=> handleFormFieldChange('author', e)} //used 'name' bcoz its form.name
        />
        


        <FormField 
        labelName="Author linkedin profile url *"
        placeholder="https://linkedin....."
        inputType="text"
        value={form.linkedin}
        handleChange={(e)=> handleFormFieldChange('linkedin', e)}
        />
        <FormField 
        labelName="Blog Title *"
        placeholder="Venue"
        inputType="text"
        value={form.title}
        handleChange={(e)=> handleFormFieldChange('title', e)}
        />
    </div>
    
    <FormField 
        labelName="Blog content *"
        placeholder="paste form content"
        isTextArea
        value={form.content}
        handleChange={(e)=> handleFormFieldChange('content', e)}
        />

   
    <FormField 
        labelName="Blog Image *"
        placeholder="Place image URL"
        inputType="url"
        value={form.photo}
        handleChange={(e)=> handleFormFieldChange('photo', e)}
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
          New Blog has been sent successfully — <strong>Thank you!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

export default AdminBlog