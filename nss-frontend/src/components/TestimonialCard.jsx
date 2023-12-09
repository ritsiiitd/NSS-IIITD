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
export default function TestimonialCard({data}) {
  return (
    <>
    <MDBCard className='py-1 border-solid border-coral-red border-r-4 shadow-lg font-palanquin shadow-zinc-700'>
      <MDBCardBody>
        <div className='flex gap-2'>
            <img src={data.image} alt="pic" height='50px' width={'50px'} className='rounded-2xl' />
            <MDBCardTitle className='font-bold ml-4 mt-4 text-black'>{data.name}</MDBCardTitle>
        </div>
        <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
        <MDBCardText className='text-black'>
            {data.value}
        </MDBCardText>
        {/* MDBCardLink href='#'>Another link</MDBCardLink> */}
        <div className='flex gap-4 mt-5'>
            <a href={data.fb}>
                <img src={facebook} alt="" />
            </a>
            <a href={data.insta}>
                <img src={instagram} alt="" />
            </a>
            <a href={data.github}>
                <img src={github} alt="" />
            </a>
            <a href={data.linkedin}>
                <img src={linkedin} alt="" />
            </a>
        </div>
        
      </MDBCardBody>
    </MDBCard>
    
    
    </>
  );
}