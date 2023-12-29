import React, { useEffect } from 'react'
import { FormField,Loader } from "../../components";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { download } from '../../assets/images';
import { downloadImage } from '../../utils';
import { Button } from 'react-bootstrap';


const AdminGalleryPage = () => {
  const [loading,setLoading] = useState(false)
  const [saved,setSaved] = useState(null)
  const [searchData,setSearchedData] = useState(null)
  const [search,setSearch] = useState("")
  const [event, setEvent] = useState(null);
  const { galleryId } = useParams();


  const deleteGalleryImage = async(ImageId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/deleteGalleryImage/${galleryId}/${ImageId}`,{
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
  const Card = ({ _id, title, prompt, photo }) => {
      return (
        <div className='rounded-xl group relative flex mb-5 hover:shadow-cardhover'>
          <img
            className='w-full h-full mt-0 justify-center object-cover rounded-xl'
            src={photo?.driveLink}
            alt={photo?._id}  // Fix the typo here
          />
          <div className='flex flex-row gap-[20px] max-h-[50%] absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
            
            <Button onClick={()=>{deleteGalleryImage(photo._id)}} className='bg-coral-red mt-3 hover:bg-black'>Delete Image</Button>

          </div>
        </div>
      );
    };

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

export default AdminGalleryPage