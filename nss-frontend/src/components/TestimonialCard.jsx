import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';
import {Social} from '../components'
import { facebook, instagram, linkedin,github } from "../assets/icons";
export default function TestimonialCard() {
  return (
    <>
    <MDBCard className='py-1 border-solid border-coral-red border-r-4 shadow-lg shadow-zinc-700'>
      <MDBCardBody>
        <div className='flex'>
            <img src="" alt="pic" />
            <MDBCardTitle className='text-black'>Ritick Chaudhary</MDBCardTitle>
        </div>
        <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
        <MDBCardText className='text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt harum, quis eum accusantium, temporibus officiis voluptatem possimus impedit doloremque cum optio. Consequatur quam doloremque incidunt esse at. Ipsa, magni?
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        {/* MDBCardLink href='#'>Another link</MDBCardLink> */}
        <div className='flex gap-4 mt-5'>
            <a href="#">
                <img src={facebook} alt="" />
            </a>
            <a href="#">
                <img src={instagram} alt="" />
            </a>
            <a href="#">
                <img src={github} alt="" />
            </a>
            <a href="#">
                <img src={linkedin} alt="" />
            </a>
        </div>
        
      </MDBCardBody>
    </MDBCard>
    
    
    </>
  );
}