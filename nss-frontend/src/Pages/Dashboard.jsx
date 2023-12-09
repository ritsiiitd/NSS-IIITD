import React, { useState } from 'react';
import {ss} from '../assets/images';

const Dashboard = () => {
  const [showFAQForm, setShowFAQForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);

  const [blogFormData, setBlogFormData] = useState({
    picture: '',
    authorName: '',
    topic: '',
    content: '',
  });

  const [eventFormData, setEventFormData] = useState({
    name: '',
    organiser: '',
    venue: '',
    date: '',
    deadline: '',
    // volunteers: '',
    picture: '',
    organiserLogo: '',
    description: '',
  });

  const [faqFormData, setFaqFormData] = useState({
    question: '',
    answer: ''
  });

  const handleEventFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure to replace 'YOUR_BACKEND_URL' with the actual URL of your backend server
      const response = await fetch('http://localhost:8080/api/v1/adminevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventFormData),
      });

      if (response.ok) {
        console.log('Event added successfully!');
        setShowEventForm({
          name: '',
          organiser: '',
          venue: '',
          date: '',
          deadline: '',
          // volunteers: '',
          picture: '',
          organiserLogo: '',
          description: ''
        });
        // setShowEventForm(false); // Close the form after successful submission
      } else {
        console.error('Error adding event:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleFAQFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure to replace 'YOUR_BACKEND_URL' with the actual URL of your backend server
      const response = await fetch('http://localhost:8080/api/v1/adminfaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(faqFormData),
      });

      if (response.ok) {
        console.log('Event added successfully!');
        setFaqFormData({
          question: '',
          answer: ''
        });
        setShowEventForm(false); // Close the form after successful submission
      } else {
        console.error('Error adding event:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleBlogFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure to replace 'YOUR_BACKEND_URL' with the actual URL of your backend server
      const response = await fetch('http://localhost:8080/api/v1/adminblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogFormData),
      });

      if (response.ok) {
        console.log('Event added successfully!');
        setBlogFormData({
          picture: '',
          authorName: '',
          topic: '',
          content: '',
        });
        setShowEventForm(false); // Close the form after successful submission
      } else {
        console.log(JSON.stringify(blogFormData))
        console.error('Error adding event:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  const animatedTextStyle = {
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: 'writeText 2s steps(20, end) 1s forwards',
  };

  const typewriterStyle = {
    color: '#fff',
    fontFamily: 'Hedvig Letters Serif',
    overflow: 'hidden',
    borderRight: '.05em  solid white',
    whiteSpace: 'nowrap',
    margin: '0 auto',
    letterSpacing: '0.05em',
    animation: 'typing 5s steps(25, end), blink-caret .5s step-end infinite',
  };

  const navbar = {
    backgroundColor: 'black',
    padding: '15px', // Increase the padding for a thicker navbar
    color: 'white',
    fontFamily: 'Arial, sans-serif', // Change the font family
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };

  const boxStyle = {
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const sidebarItemStyle = {
    marginBottom: '10px',
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Raleway',
    transition: 'font-size 0.3s',
  };

  const centerTextStyle = {
    color: 'white',
    fontSize: '54px',
    textAlign: 'center',
    marginTop: '10vh',
    transform: 'translateY(-50%)',
  };

  const sidebarStyle = {
    width: '250px',
    height: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    top: '',
    left: '-200px',
    transition: 'left 0.3s ease-in-out',
    borderRight: '2px solid black',
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleBoxClick = (index) => {
    console.log(`Box ${index + 1} clicked`);
    setShowEventForm(index === 0);
    setShowFAQForm(index === 1);
    setShowBlogForm(index === 3);
  };

  const eventFormStyle = {
    display: showEventForm ? 'block' : 'none',
    position: 'absolute',
    top: '55%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '20%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const blogFormStyle = {
    display: showBlogForm ? 'block' : 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '80%',
  };

  const faqFormStyle = {
    display: showFAQForm ? 'block' : 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '80%',
  };

  const formLabelStyle = {
    display: 'block',
    marginBottom: '2px',
    left: '0',
  };

  const formInputStyle = {
    width: '100%',
    padding: '1px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  };

  const formButtonStyle = {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    height: '100vh',
    width: '100%',
    left: '0',
    margin: '0',
    position: 'absolute',
  };

  return (
    <div className="App">
      <style>
        {`
          @keyframes writeText {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink-caret {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: white;
            }
          }
        `}
      </style>
      <img src={ss} style={backgroundStyle} alt="Background" />

      <header>
        <nav style={navbar}>
          <button onClick={toggleSidebar}>☰</button>
        </nav>
      </header>

      <div style={{ ...sidebarStyle, left: isSidebarOpen ? '0' : '-250px' }}>
        <div style={{ ...boxStyle, backgroundColor: 'black', display: 'flex', justifyContent: 'space-between' }}></div>
        {["EVENTS", "FAQ", "TEAM MEMBERS", "BLOGS"].map((option, index) => (
          <div
            key={index}
            style={{
              ...boxStyle,
              backgroundColor: hoveredIndex === index ? 'lightgrey' : 'white',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleBoxClick(index)}
          >
            <div style={{ ...sidebarItemStyle, fontSize: hoveredIndex === index ? '20px' : '18px' }}>{option}</div>
          </div>
        ))}
      </div>

      <div style={eventFormStyle}>
      
        <form onSubmit={handleEventFormSubmit}>
          <label style={formLabelStyle} htmlFor="name">
            Event Name:
          </label>
          <input style={formInputStyle} type="text" id="name" name="name" onChange={(e) => setEventFormData({ ...eventFormData, name: e.target.value })} />

          <label style={formLabelStyle} htmlFor="organiser">
            Organiser:
          </label>
          <input style={formInputStyle} type="text" id="organiser" name="organiser" onChange={(e) => setEventFormData({ ...eventFormData, organiser: e.target.value })} />

          <label style={formLabelStyle} htmlFor="venue">
            Venue:
          </label>
          <input style={formInputStyle} type="text" id="venue" name="venue" onChange={(e) => setEventFormData({ ...eventFormData, venue: e.target.value })} />

          <label style={formLabelStyle} htmlFor="date">
            Date:
          </label>
          <input style={formInputStyle} type="Date" id="date" name="date" onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })} />

          <label style={formLabelStyle} htmlFor="deadline">
            Deadline:
          </label>
          <input style={formInputStyle} type="Date" id="deadline" name="deadline" onChange={(e) => setEventFormData({ ...eventFormData, deadline: e.target.value })} />

          {/* <label style={formLabelStyle} htmlFor="volunteers">
            Volunteers:
          </label>
          <input style={formInputStyle} type="text" id="volunteers" name="volunteers" onChange={(e) => setEventFormData({ ...eventFormData, volunteers: e.target.value })} /> */}

          <label style={formLabelStyle} htmlFor="picture">
            Picture:
          </label>
          <input style={formInputStyle} type="text" id="picture" name="picture" onChange={(e) => setEventFormData({ ...eventFormData, picture: e.target.value })} />

          <label style={formLabelStyle} htmlFor="organiserLogo">
            Organiser Logo:
          </label>
          <input style={formInputStyle} type="text" id="organiserLogo" name="organiserLogo" onChange={(e) => setEventFormData({ ...eventFormData, organiserLogo: e.target.value })} />

          <label style={formLabelStyle} htmlFor="description">
            Description:
          </label>
          <textarea style={formInputStyle} id="description" name="description" onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })} ></textarea> 

          

          <button style={formButtonStyle} type="submit">
            Add Event
          </button>
        </form>
    
      </div>
      <div style={faqFormStyle}>
        <form onSubmit={handleFAQFormSubmit}>
          <label style={formLabelStyle} htmlFor="question">
            Question:
          </label>
          <input style={formInputStyle} type="text" id="question" name="question" onChange={(e) => setFaqFormData({ ...faqFormData, question: e.target.value })} />

          <label style={formLabelStyle} htmlFor="answer">
            Answer:
          </label>
          <input style={formInputStyle} type="text" id="answer" name="answer" onChange={(e) => setFaqFormData({ ...faqFormData, answer: e.target.value })}/>

          <button style={formButtonStyle} type="submit">
            Post
          </button>
        </form>
      </div>


      <div style={blogFormStyle}>
        <form onSubmit={handleBlogFormSubmit}>
          <label style={formLabelStyle} htmlFor="picture">
            Picture:
          </label>
          <input
            style={formInputStyle}
            type="text"
            id="picture"
            name="picture"
            onChange={(e) => setBlogFormData({ ...blogFormData, picture: e.target.value })}
          />

          <label style={formLabelStyle} htmlFor="authorName">
            Author Name:
          </label>
          <input
            style={formInputStyle}
            type="text"
            id="authorName"
            name="authorName"
            onChange={(e) => setBlogFormData({ ...blogFormData, authorName: e.target.value })}
          />

          <label style={formLabelStyle} htmlFor="topic">
            Topic:
          </label>
          <input
            style={formInputStyle}
            type="text"
            id="topic"
            name="topic"
            onChange={(e) => setBlogFormData({ ...blogFormData, topic: e.target.value })}
          />

          <label style={formLabelStyle} htmlFor="content">
            Content:
          </label>
          <textarea
            style={formInputStyle}
            id="content"
            name="content"
            onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
          ></textarea>

          <button style={formButtonStyle} type="submit">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
