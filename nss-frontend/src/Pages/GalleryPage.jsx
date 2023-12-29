import React, { useEffect } from 'react'
import { Card,FormField,Loader } from "../components";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const RenderCards = ({data,title}) => {
  if(data?.length > 0) {
    return data.map((post)=>
      <Card key={post._id} photo={post}/>
    )
  }
  return (
    <h2 className='mt-5 text-[14px] max-w-[500px] text-gray-500'>{title}</h2>
  )
}

const GalleryPage = () => {

  const [loading,setLoading] = useState(false)
  const [saved,setSaved] = useState(null)
  const [searchData,setSearchedData] = useState(null)
  const [search,setSearch] = useState("")
  const [event, setEvent] = useState(null);
  const { galleryId } = useParams();

  const fetchGallery = async() => {
    try {
      const response = await fetch(`https://nss-iiitd-backend.onrender.com/api/v1/galleryPage/${galleryId}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
      })
      if(response.ok){
        const result = await response.json();
        setSaved(result.data);
        // setIsInitialized(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Fetch event details using eventId (make an API call or use your data source)
    // Update the state with the event details
    fetchGallery();
  }, [galleryId]);

  const handleSearchChange=(e)=>{
    setSearch(e.target.value);
    let searchedPosts = [];
    for(let k in saved){
      if(saved[k]?.prompt?.includes(search))
      searchedPosts.push(saved[k])
    }
    setSearchedData(searchedPosts);
  }

  return (
    <section className='sm:p-8 p-4 w-full bg-[#002626] max-w-10xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#AAAAAA]'>{saved?.eventName}</h1>
        <p className='mt-2 text-[14px] max-w-[500px] text-[#AAAAAA]'>
        Below is a collection of coverage for the event</p>
      </div> 

      <div className='mt-16'>
        <FormField 
          labelName="Search"
          type="text"
          name="text"
          placeholder="Search for images"
          value={search}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex items-center justify-center'>
            <Loader />
          </div>
        ):(
          <>
            {search && (<h2 className='mt-2 text-[14px] text-[#AAAAAA]'>
              Search results for {search}
            </h2>)}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {search ? (
                <RenderCards data={searchData?.images}
                title="No search results found"/>
              ):(
                <RenderCards data={saved?.images} title="No collection found"/>
              )}
            </div>
          </>
        ) 
        }
      </div>

    </section>
  )
}

export default GalleryPage