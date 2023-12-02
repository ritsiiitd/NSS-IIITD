import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { Dept } from "../components";
import { education,health,skill,environment } from "../assets/images";
const Departments = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  return (
    <>
     <div>
      <div
        className={`flex flex-row justify-start ml-${animationCompleted ? '0' : '[-50px]'}`}
        style={{ transition: 'margin-left 1.5s', borderBottom: '3px solid red' }}
      >
        

        <div
          className="text-black font-palanquin text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
          style={{ verticalAlign: 'bottom' }}
        >
          Departments&nbsp;
        </div>


        <div
          className="text-center text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
          style={{ verticalAlign: 'bottom' }}
        >
          .
        </div>
      </div>
      <br />
      <br />
      <div className='flex gap-4'>
        
        <Dept image={education}/>
        <Dept image={health}/>
        <Dept image={skill}/>
        <Dept image={environment}/>
      </div>
     </div>
    </>
  )
}

export default Departments