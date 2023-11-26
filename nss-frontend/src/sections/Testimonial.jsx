import React, { Component } from "react";
import Slider from "react-slick";
import { TestimonialCard } from "../components";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <div className='flex felx-row'>
        <div className="text-black text-center text-[50px] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Testimonies&nbsp;
        </div>
        <div className="text-center text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            .
        </div>
      </div>
      
        <div className="mt-3">
          <Slider {...settings}>
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
          </Slider>
        </div>
      </div>
    );
  }
}