import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
// import { AdminFAQ } from '..';

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

const AdminFAQ = () => {


  const [FAQ, setFAQ] = useState([]);
  const [result, showResult] = useState(false);

  const handleClose = () => {
    showResult(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
      question:'',
      answer:'',
  });

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/faqs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setFAQ(result.data);
        } else {
          console.error('Failed to fetch faqs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFAQs();
  }, []);

  const deleteFaq = async(FAQId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/deleteFaq/${FAQId}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
        })
        if(response.ok){
        const result = await response.json();
        setFAQ(result.data);
        // setIsInitialized(true);
        }
    } catch (error) {
        console.log(error);
    }
    }
  const [expandedId, setExpandedId] = useState(null);

  const handleQuestionClick = (_id) => {
    setExpandedId(_id === expandedId ? null : _id);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch('http://localhost:8080/api/v1/createFaq', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });

    if (response.ok) {
            const result = await response.json();
            setFAQ(result.data);
            setIsLoading(false);
            showResult(true);
            // navigate('/');
        } else {
            console.error('Failed to create Faq');
        }
        } catch (error) {
            console.error('Error creating Faq', error);
        }
    };

  const handleFormFieldChange = (fieldName, e) =>{//in event of inputting something in the form
    setForm({...form, [fieldName]:e.target.value})
  }


  return (
    <><div className="flex lg:w-[1080px] max-w-full flex-col mt-24 mb-28 max-md:my-10">
      <div className='flex felx-row'>
        <div className="text-white text-center text-[50px] font-semibold leading-[57px] font-palanquin self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            FAQs&nbsp;
        </div>
        <div className="text-center text-red-500 text-[400%] font-semibold leading-[57px] font-pala self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            .
        </div>
      </div>
      <div className=" text-white text-center text-lg font-medium leading-6 self-center max-w-[922px] font-palanquin mt-9 max-md:max-w-full">
        Frequently asked questions about NSS IIITD
      </div>
      
      <div>
      {FAQ.map((faq) => (
        
        <div key={faq._id} className="items-stretch self-stretch flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        {expandedId === faq._id && (<div className="bg-white flex w-[3px] shrink-0 h-[150px] flex-col rounded-xl" ></div>)}
        {expandedId != faq._id && (<div className="bg-white flex w-[3px] shrink-0 h-8 flex-col rounded-xl" />)}
        <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
        <div key={faq._id}>
          <div onClick={() => handleQuestionClick(faq._id)} className="text-white font-palanquin text-xl font-semibold leading-6 max-md:max-w-full">
            {faq.question}
            <br />
          </div>
          {expandedId === faq._id && (
            <div className=" text-white-400 font-palanquin text-lg leading-8 mt-8 max-md:max-w-full">
           {faq.answer}
          </div>
          )}
        </div>
        </div><Button className=' bg-violet-500 hover:bg-red-600' onClick={()=>{deleteFaq(faq._id)}}>Delete</Button>
        </div>
      ))}
    </div>
    </div>

    <div className=' bg-[#1c1c24] mt-8 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <Loader />}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] '>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white '>Add new FAQ</h1>
      </div>
      <div className='w-full flex justify-start items-center mt-4 p-4 bg-[#b36dfdfe] h-120px rounded-[10px]'>
            <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
            <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You can add new FAQs using the following form. </h4>
      </div>

      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] '>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
            labelName="Question *"
            placeholder="faq question"
            inputType="text"
            value={form.question}
            handleChange={(e)=> handleFormFieldChange('question', e)} //used 'name' bcoz its form.name
          />
        
          <FormField 
            labelName="Answer *"
            placeholder="faq answer"
            inputType="text"
            value={form.answer}
            handleChange={(e)=> handleFormFieldChange('answer', e)}
            />

        </div>

        
        

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton 
            btnType="submit"
            title="Add FAQ"
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
          New FAQ has been added successfully — <strong>Thank you!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}


export default AdminFAQ