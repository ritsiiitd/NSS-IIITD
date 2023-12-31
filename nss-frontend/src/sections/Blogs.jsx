import {React, useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../Pages/TeamSection.css"
import { Link } from 'react-router-dom';
// import { Subscribe } from '.';

function Subscribe() {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setblog(result.data);
        } else {
          console.error('Failed to fetch blog');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin mb-2">Blog Posts <span></span></h3>
            <p className='mb-4'>read Latest Blogs</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
      <Row className='flex justify-center items-center gap-6 mt-4'>
        {/* Map through the blog array */}
        {blog.map((advisor) => (
          
          <Col key={advisor._id} xs={12} sm={6} lg={3}>
            <Link to={`/blog/${advisor._id}`} style={{textDecoration:"none"}}>
            <div className=" bg-black single_advisor_profile wow fadeInUp">
              <div className="bg-black advisor_thumb">
                <img src={advisor.photo} alt="" />
                {/* Social Info */}
                
              </div>
              {/* blog Details */}
              <div className="single_advisor_details_info">
                <h6>{advisor.author}</h6>
                <p className="blogTitle font-bold">{advisor.title}</p>
              </div>
            </div>
          </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Subscribe;
