// ImageLine.js
import React from 'react';
import fac from './Screenshot 2023-10-31 174427.png';
import './imageLine.css'; // Import the CSS file
import stu from './Screenshot 2023-11-05 233650.png';


function ImageLine(props) {
  const { imageSrc, numberOfImages, bb} = props;

  const imageComponents = [];
  if (bb==0){
  for (let i = 0; i < numberOfImages; i++) {
    imageComponents.push(
      <img key={i} src={fac} alt={`Image ${i}`} className="image" />
    );
  }
}
  else{
    for (let i = 0; i < numberOfImages; i++) {
        imageComponents.push(
          <img key={i} src={stu} alt={`Image ${i}`} className="image" />
        );
      }

  }

  return (
    <div className="image-line">
      {imageComponents}
    </div>
  );
}

export default ImageLine;