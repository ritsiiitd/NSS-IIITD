import React from 'react';
import { nssIntroVideo, about1, about2, about3, about4 } from '../assets/images';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Automatic video playing on half of the screen */}
      <div className="flex-1 relative">
        <video
          className="object-cover w-full h-[500px]"
          src={nssIntroVideo}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Section with description and photo collage */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Description section */}
        <div className="flex-1 px-8 mb-4 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4 mt-4 font-palanquin">Who are WE?</h2>
          <p className="text-lg font-palanquin mb-4">
          NSS IIITD, the National Service Scheme at Indraprastha Institute of Information Technology, Delhi, is a community-driven initiative aimed at fostering social responsibility and community engagement among students. Established with the belief that service to society is an integral part of education, NSS IIITD strives to create a positive impact through various social and environmental initiatives
          </p>
          {/* Add more paragraphs, lists, or other content as needed */}
        </div>

        {/* Photo collage section */}
        <div className="grid grid-cols-2 gap-2 lg:py-8 mb-4">
          {/* Replace these image sources with your actual images */}
          <img src={about4} alt="Collage 4" className="w-full h-[150px] object-cover" />
          <img src={about1} alt="Collage 1" className="w-full h-[150px] object-cover" />
          <img src={about2} alt="Collage 2" className="w-full h-[150px] object-cover" />
          <img src={about3} alt="Collage 3" className="w-full h-[150px] object-cover" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
