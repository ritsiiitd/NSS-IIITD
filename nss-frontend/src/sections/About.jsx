import React from 'react'
import { nssIntroVideo } from "../assets/images";
const About = () => {
  return (
    <div className="flex flex-col h-screen">
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
      <div className="flex flex-col lg:flex-row">
        {/* Description section */}
        <div className="flex-1 px-8">
          <h2 className="text-4xl font-bold mb-4">Who are WE?</h2>
          <p className="text-lg mb-4">
            Your description goes here. Add more text as needed to describe your organization.
          </p>
          {/* Add more paragraphs, lists, or other content as needed */}
        </div>

        {/* Photo collage section */}
        <div className="lg:w-1/3">
          <div className="grid grid-cols-2 gap-2">
            {/* Replace these image sources with your actual images */}
            <img src="your-image1.jpg" alt="Collage 1" className="w-full h-32 object-cover" />
            <img src="your-image2.jpg" alt="Collage 2" className="w-full h-32 object-cover" />
            <img src="your-image3.jpg" alt="Collage 3" className="w-full h-32 object-cover" />
            <img src="your-image4.jpg" alt="Collage 4" className="w-full h-32 object-cover" />
            {/* Add more images as needed */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About