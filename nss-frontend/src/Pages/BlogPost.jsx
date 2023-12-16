import React, { useEffect, useState } from 'react'
import './blog.css'
import { useParams } from 'react-router-dom';
import { linkedin } from '../assets/icons';
const BlogPost = () => {

  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async() => {
    try {
      const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/blogPage/${blogId}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
      })
      if(response.ok){
        const result = await response.json();
        setBlog(result.data);
        console.log(result.data);
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Fetch event details using eventId (make an API call or use your data source)
    // Update the state with the event details
    fetchBlog();
  }, [blogId]);

  return (
    
    <div className="container-fluid w-full mt-8 mb-8">
        <div className="">
            <figure> 
            <div className="media" style={{ backgroundImage: `url(${blog?.photo || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png'})` }}></div>

            <figcaption className='relative'>
                {/* <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
                    <text className="title" dx="300%" dy="2.2em">{blog?.title}</text>
                    <text className="title" dx="50%" dy="3.5em">EVERY</text>
                    <text className="title" dx="50%" dy="4.5em">MOMENT</text>
                    </mask>
                </defs>
                <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                </svg> */}
                <div className="author">
                    <a className='mt-[12px] ml-[40px]' href={blog?.linkedin}>
                        <img src={linkedin} alt="" />
                    </a>
                    <p className='ml-[55px]'><b>author -</b> {blog?.author}</p>
                </div>
            </figcaption><a href={blog?.linkedin}></a>
            </figure>
        </div>

        <div className="mb-[150px] bg-rose-100">
            <h1 className='mt-[50px] font-palanquin ml-[15%] mr-[15%] text-[25px] font-bold'>{blog?.title}</h1>
            <p className='mt-6 font-palanquin ml-[15%] mr-[15%] text-[16px]'>{blog?.content}</p>
        </div>
       
    </div>
  )
}

export default BlogPost