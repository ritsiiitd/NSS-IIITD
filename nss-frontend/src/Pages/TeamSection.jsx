import {React, useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./TeamSection.css"

function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/nssTeam', {
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
            <h3 className="mt-3 font-bold text-[50px] font-palanquin mb-2">Meet the Team <span></span></h3>
            <p className='mb-4'>meet the hardworking minds inside the organisation</p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* Map through the team array */}
        {team.map((advisor) => (
          <Col key={advisor._id} xs={12} sm={6} lg={3}>
            <div className="single_advisor_profile wow fadeInUp">
              <div className="advisor_thumb">
                <img src={advisor.pic} alt="" />
                {/* Social Info */}
                <div className="social-info">
                  <a href={advisor.github}><i className="fa fa-github"></i></a>
                  <a href={advisor.linkedin}><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>{advisor.name}</h6>
                <p className="designation font-bold">{advisor.designation}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TeamSection;
