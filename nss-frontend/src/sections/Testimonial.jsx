import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { TestimonialCard } from "../components";

export default class AutoPlay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    this.fetchTeam();
  }

  fetchTeam() {
    fetch("https://nss-iiitd-backend.onrender.com/api/v1/testimonies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch team");
        }
      })
      .then((result) => {
        this.setState({ team: result.data });
        console.log("Testimonies data",result.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    const { team } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 5,
      cssEase: "linear"
    };
    return (
      <div>
        <div className='flex felx-row'>
        <div className="text-black font-palanquin text-center text-[50px] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Testimonies&nbsp;
        </div>
        <div className="text-center font-palanquin text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            .
        </div>
      </div>
      
        <div className="mt-3">
          <Slider {...settings}>
              {/* <TestimonialCard /> */}
              {team.map((testimonial) => (
                <TestimonialCard key={testimonial._id} data={testimonial} />
              ))}
              
              
          </Slider>
        </div>
      </div>
    );
  }
}