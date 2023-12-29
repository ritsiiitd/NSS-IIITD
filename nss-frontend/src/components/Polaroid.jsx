import React from 'react';
import { Link } from 'react-router-dom';

const Polaroid = ({ eventName, galleryId, photos }) => {

  // Take the first four images from the photos array
  const firstFourImages = photos.slice(0, 4).concat(Array.from({ length: 4 - photos.length }, (_, index) => photos[index % photos.length]));
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-0">
      <Link to={`/galleryOf/${galleryId}`} title={eventName}>
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
          <div className="my-[-20px] font-palanquin w-[100%] h-[40px] link">{eventName} </div>
        </span>
      </Link>
    </div>
  );
};

export default Polaroid;
