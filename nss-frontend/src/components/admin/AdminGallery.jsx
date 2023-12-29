import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../Pages/Gallery.css';

import { createCampaign, money } from '../../assets';
import { CustomButton, FormField, Loader } from '../../components';
import { checkIfImage } from '../../utils';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AdminGallery = () => {

  const [Gallery, setGallery] = useState([]);
  const [result, showResult] = useState(false);

  const handleClose = () => {
    showResult(false);
  };

  const [allGalleries,setGalleries] = useState([{
    eventName:'',
    images:[]
  }]);

  useEffect(()=>{
    const fetchGalleries = async() => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/galleries',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          setGalleries(result.data);
        }
      } catch (error) {
        
      }
    }
    fetchGalleries();
  },[]);
  

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name:'',
    });
    const [form2, setForm2] = useState({
        galleryId:'',
        driveLinks:'',
    });

    
const deleteGallery = async(GalleryId) => {
  try {
      const response = await fetch(`http://localhost:8080/api/v1/deleteGallery/${GalleryId}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
      },
      })
      if(response.ok){
          const result = await response.json();
          setGalleries(result.data);
          // setIsInitialized(true);
          }
      } catch (error) {
          console.log(error);
      }
}
const Polaroid = ({ eventName, galleryId, photos }) => {

  // Take the first four images from the photos array
  const firstFourImages = photos.slice(0, 4).concat(Array.from({ length: 4 - photos.length }, (_, index) => photos[index % photos.length]));

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-0">
      
      <Link to={`adminGalleryof/${galleryId}`} title={eventName}>
        <span className="album block gap-4">
          {firstFourImages.map((photo, index) => (
            <span className="thumb" key={index}>
              <span
                className="polaroid shadow-5"
                style={{ backgroundImage: `url('${photo?.driveLink}')` }}
              >
                &nbsp;
              </span>
              
            </span>
          ))}
          
        </span>
          
            <div className="my-[-20px] font-palanquin w-[100%] h-[40px] link">{eventName} </div>
          
      </Link>
      <Button onClick={()=>{deleteGallery(galleryId)}} className='bg-coral-red mt-3 hover:bg-black'>Delete</Button>
      
    </div>
  );
};


  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
      const response = await fetch('http://localhost:8080/api/v1/createGallery', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
      });

      if (response.ok) {
              const result = await response.json();
              setGalleries(result.data);
              setIsLoading(false);
              showResult(true);
              // navigate('/');
          } else {
              console.error('Failed to create Gallery');
          }
          } catch (error) {
              console.error('Error creating Gallery', error);
          }
      };
  const handleSubmit2 = async (e) => {
      e.preventDefault();

      try {
      const response = await fetch('http://localhost:8080/api/v1/addImages', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(form2),
      });

      if (response.ok) {
              const result = await response.json();
              setGalleries(result.data);
              setIsLoading(false);
              showResult(true);
              // navigate('/');
          } else {
              console.error('Failed to add Image');
          }
          } catch (error) {
              console.error('Error adding image', error);
          }
      };

  const handleFormFieldChange = (fieldName, e) =>{//in event of inputting something in the form
    setForm({...form, [fieldName]:e.target.value})
  }
  const handleFormFieldChange2 = (fieldName, e) =>{//in event of inputting something in the form
    setForm2({...form2, [fieldName]:e.target.value})
  }


  const handleDomainChange = (galleryId) => {
    setForm2({ ...form2, galleryId: galleryId });
  }

  return (
    <>
    <div>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">Event Gallery<span></span></h3>
            <p className='mb-4 text-white'>add/delete images</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>

      <div className="mt-[69px] mb-4 bg-black container shadow-5">
      <div id="photography-index-page" className="margin-top-25">
        <br />
        {/* <div>{allGalleries[0].eventName}</div> */}
        {/* <div>{allGalleries[1].eventName}</div> */}
        <div className="row mt-5 multi-columns-row">
          {/* Add your gallery items here */}
          {/* Example for one gallery item */}
          
          {allGalleries.map((gallery, index) => (
            <React.Fragment key={index}>
              
              <Polaroid eventName={gallery.eventName} galleryId={gallery._id} key={gallery._id} photos={gallery.images} />
              
            </React.Fragment>
          ))}
        
          {/* End of gallery item */}
        </div>
      </div>
      <br /><br />
    </div>
    </div>
    <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
    {isLoading && <Loader />}
    <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
    <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new Gallery Folder</h1>
    </div>
    <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
        <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
        <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new Galleries using the following form. </h4>
    </div>


    <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>

        <FormField 
        labelName="Name *"
        placeholder="Event name"
        inputType="text"
        value={form.name}
        req={true}
        handleChange={(e)=> handleFormFieldChange('name', e)} //used 'name' bcoz its form.name
        />
        

    <div className='flex justify-center items-center mt-[40px]'>
        <CustomButton 
        btnType="submit"
        title="Add Folder"
        styles="bg-[#1dc071]"
    />
        
    </div> 
    </form>    
    </div>

    <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
    {isLoading && <Loader />}
    <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
    <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add images</h1>
    </div>
    <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
        <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
        <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new images to a gallery using the following form. </h4>
    </div>


        <form onSubmit={handleSubmit2} className='w-full mt-[65px] flex flex-col gap-[30px] '>

          <label className='text-white' htmlFor="cars">Choose a Gallery Folder:</label>
          
          <select value={form2.galleryId} onChange={(e) => handleDomainChange(e.target.value)} className='bg-gray-700 text-white' id="cars" name="cars">
            <option value="">Select a gallery folder</option>
            {allGalleries.map((gall)=>(
              <option value={gall._id}>{gall.eventName}</option>
            ))}
          </select>
            <FormField 
            labelName="Drive Links *"
            placeholder="enter comma seperated drive links for images you want to add to selected folder."
            inputType="text"
            value={form2.driveLinks}
            req={true}
            handleChange={(e)=> handleFormFieldChange2('driveLinks', e)} //used 'name' bcoz its form.name
            />
            <div className='flex justify-center items-center mt-[40px]'>
                <CustomButton 
                btnType="submit"
                title="Add Images"
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
          New Gallery/Image has been added successfully — <strong>Thank you!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

export default AdminGallery