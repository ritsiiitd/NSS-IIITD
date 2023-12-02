import React, { useState } from 'react';
import './contact.css';

import { contact, wall } from '../assets/images';




const ContactForm = () => {
  const [result, showResult] = useState(false);

  const handleClose = () => {
    showResult(false);
  };

 

  return (
    <>
      <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2 sm:hidden xl:flex" style={{ backgroundImage: `url(${wall})`}}></div>
    <div className="contents order-2 order-md-1">

      <div className="container border-2 py-4 " style={{ backgroundImage: `url(${contact})`,backgroundSize: '100%',}}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 py-5 bg-black rounded-4 bg-opacity-50">
            <h3 className='text-[30px] font-palanquin text-white'>Get in touch</h3>
            <p className="mt-2 mb-5 font-palanquin">Send us your query using this form and we will get back to you!</p>
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label className='font-palanquin text-white text-[20px]' htmlFor="fname">First Name</label>
                    <input type="text" name="fname" className="form-control" required placeholder="enter first name" id="fname"/>
                  </div>    
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label className='text-white text-[20px] font-palanquin' required htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" className="form-control" placeholder="enter last name" id="lname"/>
                  </div>    
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label className='text-white text-[20px] font-palanquin mt-4' htmlFor="email">Email Address</label>
                    <input type="email" name="reply_to" required className="form-control" placeholder="your email address" id="email"/>
                  </div>    
                </div>
              </div>
              <div className="mt-4 row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label className='text-white text-[20px] font-palanquin' htmlFor="lname">Phone Number</label>
                    <input type="number" name="phone" required className="form-control" placeholder="0000 000 0000" id="lname"/>
                  </div>    
                </div> 
              </div>
              <div className="mt-4 row">
                 <div className="col-md-6">
                  <div className="form-group first">
                    <label className='text-white text-[20px] font-palanquin' htmlFor="lname">What can we help you with</label>
                    <textarea name="message" rows="8" cols="40"  type="text" required className="form-control h-[100px] w-[500px]" placeholder="message" id="message"/>
                  </div>    
                </div>
              </div>
              
              <input type="submit" value="Send" className="btn hover:bg-black hover:text-white font-palanquin mt-4 border-white border-2 bg-coral-red px-5"/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>

      
    </>
  );
};

export default ContactForm;
