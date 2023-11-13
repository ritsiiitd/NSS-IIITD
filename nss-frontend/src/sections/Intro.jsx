import React, { useEffect } from 'react'
import { useState } from "react";
import { Button, SmallCard } from "../components";
import {arrowRight} from '../assets/icons'
import { IIITDImages} from "../constants";
import { IIITD_1 } from '../assets/images'
import {Home} from '../Pages';
const Intro = () => {
  const [bigCard, setbigCard] = useState(IIITD_1);
  const [statistics,setStatistics] = useState([
      { value: '1+', stat: 'Volunteers' },
      { value: '5+', stat: 'Collaborations' },
      { value: '2+', stat: 'Initiatives' },
  ]);
  useEffect(()=>{
    const fetchStats = async() => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/static',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          console.log(result);
          setStatistics(result.data);
        }
      } catch (error) {
        
      }
    }
    fetchStats();
  },[]);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-[100px] max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col xl:mr-[60%] justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-transparent xl:whitespace-nowrap relative z-10 pr-10'>
            National Service 
            <br />
            Scheme
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>IIIT</span>
          <span className='text-[#58585a] inline-block mt-3'> Delhi</span>
          
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Register as volunteer
        </p>

        <Button label="Discover" iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.stat}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigCard}
          alt='shoe colletion'
          width="99%"
          height="80%"
          className='object-contain relative z-10'
        /> 
      */}

        <div className='xl:absolute xl:ml-[55%] xl:w-[50%]'>
          <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center' style={{ backgroundImage: `url(${bigCard})` }}>
            <br /><br /><br /><br /><br /><br />
          <div className='flex sm:gap-6 sm:mt-[50px] gap-4 absolute -bottom-[5%] max-sm:px-6'>
            {IIITDImages.map((image, index) => (
              <div key={index}>
                <SmallCard
                  index={index}
                  imgURL={image}
                  changeBigCardImage={(shoe) => setbigCard(shoe)}
                  bigCard={bigCard}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro