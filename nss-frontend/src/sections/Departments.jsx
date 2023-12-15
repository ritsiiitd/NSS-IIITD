import React, { useState,useEffect } from 'react'
import { Card } from 'flowbite-react';
import { Dept } from "../components";
import { education,health,skill,environment } from "../assets/images";
const Departments = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('https://nss-iiitd-backend.onrender.com/api/v1/collaborationList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setDepartments(result.data);
          console.log(result.data);
        } else {
          console.error('Failed to fetch departments');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDepartments();
  }, []);
  return (
    <>
     <div className='mt-[30px]'>
      <div
        className={`flex flex-row justify-start ml-[10px] `}
        style={{ transition: 'margin-left 1.5s', borderBottom: '3px solid red' }}
      >
        

        <div
          className="text-black font-palanquin text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
          style={{ verticalAlign: 'bottom' }}
        >
          Collaborations&nbsp;
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
      <div className='sm:flex sm:flex-col flex-row gap-4'>
        
        <Dept image={education} data={departments[0]}/>
        <Dept image={health}  data={departments[1]}/>
        <Dept image={skill} data={departments[2]}/>
        <Dept image={environment} data={departments[3]}/>
      </div>
     </div>
    </>
  )
}

export default Departments