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
        const response = await fetch('http://localhost:8080/api/v1/galleries',{
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
    <div className="container shadow-5">
      <div id="photography-index-page" className="margin-top-25">
        <h5 className="page-title text-center"> Gallery </h5>
        <br />
        {/* <div>{allGalleries[0].eventName}</div> */}
        {/* <div>{allGalleries[1].eventName}</div> */}
        <div className="row multi-columns-row">
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
