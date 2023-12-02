import React, { useEffect } from 'react'
import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonial,FAQs} from '../sections'
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const { sectionId } = useParams();

  useEffect(() => {
    // Check if the URL has a sectionId, and scroll to that section
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [sectionId]);

  return (
    <main className="relative">

    <section id='Intro' className="x1:padding-1 wide:padding-r padding-b">
      <Intro />
    </section>
    <section id='Departments' className="padding">
      <Departments />
    </section>
    <section id='Events' className="padding">
      <Events />
    </section>
    <section id='Testimonial' className="padding bg-pale-blue">
      <Testimonial />
    </section>
    <section id='Subscribe' className="padding-x font-montserrat w-full">
      <Subscribe />
    </section>
    <section id='FAQs' className="padding-x flex justify-center w-full">
      <FAQs />
    </section>
    </main>
  )
}

export default Home