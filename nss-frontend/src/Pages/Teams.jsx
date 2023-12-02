import React from 'react';
// import mem from './Screenshot 2023-10-31 172805.png';
import ImageLine from './ImageLine'; // Assuming ImageLine.js is in the same directory
// import fac from './Screenshot 2023-10-31 174427.png';

const Teams = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const headingStyle = {
    color: 'black',
    fontSize: '70px',
    fontWeight: '200',
    fontFamily: 'Mulish',
    // display: 'flex',
    // textDecoration: 'underline',
    // textDecorationColor: 'goldenrod',
    // textDecorationThickness: '2px',
    // textUnderlineOffset: '4px',
    marginLeft: '550px',
    // textAlign: 'center',
    // alignItems: 'center',

  };

  const boldText = {
    fontWeight: '600',
  };

  const subHeading = {
    color: 'black',
    fontSize: '35px',
    fontWeight: '200',
    fontFamily: 'Kay Pho Du',
    marginLeft: '650px',
  };

  const textStyle = {
    fontSize: '30px',
    width: '600px',
    marginLeft: '100px',
    fontFamily: 'Playfair Display',
  };

  const imgStyle = {
    // flex: '1',
    width: '50px',
    // padding: '60px',
    // border: '5px solid white', // Add a border
    borderRadius: '100px',
    marginTop: '5px',
    marginLeft: '60px',
    height: '50px',
  };

  return (
    <div className="teams" style={{ textAlign: 'left' }}>
      <div style={containerStyle}>
        <div>
          <h2 style={headingStyle}> Meet the <span style={boldText}>team.</span></h2>
          {/* <h2 style={boldText}>team.</h2> */}
          <p style={{ ...textStyle }}>To create an impact at large, we aim to establish services that cater to all the sections of the society & environment, ranging from educational aid for deprived ones to awareness campaign through workshops & cultural activities.</p>
          
        </div>
        {/* <img src={mem} style={{...imgStyle}}/> */}
      </div>

      <p style = {{...subHeading}}>Faculty Advisor</p>
      <ImageLine imageSrc="Screenshot 2023-10-31 174427.png" numberOfImages={6} bb={0}/>


      <p style = {{...subHeading}}>Members</p>
      <ImageLine imageSrc="Screenshot 2023-11-05 233650.png" numberOfImages={6} bb = {1} />
      <ImageLine imageSrc="Screenshot 2023-11-05 233650.png" numberOfImages={6} bb = {1}/>


    </div>
  );
};

export default Teams;