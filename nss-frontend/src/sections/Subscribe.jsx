import {React, useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "../Pages/TeamSection.css"
// import { Subscribe } from '.';

function Subscribe() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setTeam(result.data);
          console.log(result.data);
        } else {
          console.error('Failed to fetch team');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTeam();
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
        {/* Map through the team array */}
        {team.map((advisor) => (
          <Col key={advisor._id} xs={12} sm={6} lg={3}>
            <div className=" bg-black single_advisor_profile wow fadeInUp">
              <div className="bg-black advisor_thumb">
                <img src={advisor.photo} alt="" />
                {/* Social Info */}
                
              </div>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>{advisor.author}</h6>
                <p className="designation font-bold">{advisor.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Subscribe;
