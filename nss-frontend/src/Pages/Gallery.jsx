import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Polaroid from '../components/Polaroid';

const Gallery = () => {

  const [allGalleries,setGalleries] = useState([{
    eventName:'',
    images:[]
  }]);

  useEffect(()=>{
    const fetchGalleries = async() => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/galleries',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          console.log(result);
          setGalleries(result.data);
        }
      } catch (error) {
        
      }
    }
    fetchGalleries();
  },[]);

  return (
    <div className="mt-[69px] mb-4 container shadow-5">
      <div id="photography-index-page" className="margin-top-25">
      <div
      className={`flex flex-row justify-start ml-'[-50px]'`}
      style={{ transition: 'margin-left 1.5s', borderBottom: '3px solid red' }}
    >
      <div
        className="text-black font-palanquin text-center text-[200%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        &nbsp;
      </div>

      <div
        className="text-black font-palanquin text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        gallery&nbsp;
      </div>

      <div
        className="text-center font-palanquin text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        style={{ verticalAlign: 'bottom' }}
      >
        .
      </div>
    </div>
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
  );
};

export default Gallery;
