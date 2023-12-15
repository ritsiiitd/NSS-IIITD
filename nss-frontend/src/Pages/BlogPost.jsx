import React from 'react'
import './blog.css'
const BlogPost = () => {
  return (
    
    <div className="container-fluid w-full mt-8 mb-8">
        <div className="">
            <figure>
            <div className="media" style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png)` }}></div>

            <figcaption>
                <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
                    <text className="title" dx="50%" dy="2.5em">ENJOY</text>
                    <text className="title" dx="50%" dy="3.5em">EVERY</text>
                    <text className="title" dx="50%" dy="4.5em">MOMENT</text>
                    </mask>
                </defs>
                <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                </svg>
                <div className="body">
                <p>Author date github linkedin</p>
                </div>
            </figcaption><a href="#"></a>
            </figure>
        </div>

        <div>
            <h1 className='mt-[50px] font-palanquin ml-[15%] mr-[15%] text-[25px] font-bold'>Title</h1>
            <p className='mt-6 font-palanquin ml-[15%] mr-[15%] text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora et ipsum. Quam dolorum mollitia atque eligendi soluta cumque, sequi provident temporibus veritatis suscipit nesciunt rerum nam qui aut consequatur.</p>
        </div>
       
    </div>
  )
}

export default BlogPost